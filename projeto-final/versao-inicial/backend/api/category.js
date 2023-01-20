module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation;

    const save = (req, res) => {
        const category = {
            id: req.body.id,
            name: req.body.name,
            parentId: req.body.parentId
        };
        
        if (req.params.id) category.id = req.params.id

        try {
            existsOrError(category.name, "Nome não informado")
        } catch (msg) {
            return res.status(400).send(msg) // erro lado do cliente
        }

        if (category.id) {
            app.db("categories")
                .update(category)
                .where({ id: category.id })
                .then(_ => res.status(204), send()) // status de sucesso.
                .catch(err => res.status(500).send(err)) // erro lado servidor ou banco de dados.
        } else {
            app.db("categories")
                .insert(category)
                .then(_ => res.status(204).send()) // sucesso.
                .catch(err => res.status(500).send(err)) // erro lado servidor.
        }
    }

    // agora o método 'remove', mas precisa fazer algumas validações para ver se pode remover.
    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, "Código da Categoria não informado.")

            // fazer consulta no banco de dados para checar se há uma subcategoria.
            const subcategory = await app.db("categories")
                .where({ parentId: req.params.id }) // se tiver subcategoria, não pode deletar.
            notExistsOrError(subcategory, "Categoria possui subcategoria.") // se não existe, okay, dá certo e deleta categoria, senão, dá erro.

            const articles = await app.db("articles")
                .where({ categoryId: req.params.id })
            notExistsOrError(articles, "Categoria possui artigos.") // não existe artigos, okay, deleta, senao, erro.

            const rowsDeleted = await app.db("categories")
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, "Categoria não foi encontrada.") // se passou nas validações,  se a catgoria existe, ele deleta, senão, erro.

            res.status(204).send(); // se passou em tudo, status de sucesso.
        } catch (msg) {
            res.status(400).send(msg) // se caiu em alguma das validações acima, msg de erro.
        }
    }

    // criação dos caminhos onde ficarão salvos os artigos e as subcategorias.
    const withPath = categories => { // vai retornar um lista [array] de categorias, mas com um atributo a mais.
        const getParent = (categories, parentId) => { // vai pegar o 'pai' com base nessa lista e no ID.
            const parent = categories.filter(parent => parent.id === parentId);
            return parent.length ? parent[0] : null // retorna uma unica categoria, que bate com o pai filtrado ali.
        }
        // transformar um array de categorias, em outro array de categorias, mas agora, cada categoria possui um atributo a mais, chamado 'path'.
        const categoriesWithPath = categories.map(category => {
            let path = category.name;
            let parent = getParent(categories, category.parentId); // pega o 'parent' se existir.

            while (parent) { // enquanto houver um 'parent', e continua fazendo o caminho.
                path = `${parent.name} > ${path}`;
                parent = getParent(categories, parent.parentId)
            }

            return { ...category, path }
        })

        // ordenando categorias pelo caminho, em ordem alfabética.
        categoriesWithPath.sort((a, b) => {
            if (a.path < b.path) return -1
            if (a.path > b.path) return 1
            return 0 // senão, retorna 0 pq são igual.
        })

        return categoriesWithPath
    }

    const get = (req, res) => {
        app.db("categories")
            .then(categories => res.json(withPath(categories)))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db("categories")
            .where({ id: req.params.id })
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    // vai transformar um array de categorias em uma estrutura de arvores.
    const toTree = (categories, tree) => {
        if(!tree) tree = categories.filter(c => !c.parentId); // se não tiver categoria settada, vai filtrar todas as categorias que não possuem 'parentId' settado.
        tree = tree.map(parentNode => {  // pegar os nós pais, 'parentNode'
            const isChild = node => node.parentId == parentNode.id;
            parentNode.children = toTree(categories, categories.filter(isChild)) // vai ficar chamando essa função de forma recursiva.
            return parentNode
        }) 

        return tree
    }

    const getTree = (req, res) => {
        app.db("categories")
            .then(categories => res.json(toTree(categories)))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getTree }
}
