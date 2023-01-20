const queries = require("./queries");

module.exports = app => {
    const { existsOrError } = app.api.validation;

    const save = (req, res) => {
        const article = { ...req.body };
        if(req.params.id) article.id = req.params.id;

        try {
            existsOrError(article.name, "Nome não informado.");
            existsOrError(article.description, "Descrição não informado.");
            existsOrError(article.categoryId, "Categoria não informada.");
            existsOrError(article.userId, "Autor não informado.");
            existsOrError(article.content, "Conteúdo não informado.");
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(article.id) {
            app.db("articles")
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db("articles")
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db("articles")
                .where({ id: req.params.id }).del(); // isso usa o Knex para consultar o banco de dados.

                try {
                    existsOrError(rowsDeleted, "Artigo não encontrado.");
                } catch(msg) {
                    return res.status(400).send(msg)
                }
            
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    // paginação 
    const limit = 10;
    const get = async (req, res) => {
        const page = req.query.page || 1;

        const result = await app.db("articles").count("id").firsts();
        const count = parseInt(result.count); // 'result' vem como string, então precisa converter para número inteiro.

        app.db("articles")
            .select("id", "name", "description")
            .limit(limit).offset(page * limit - limit) // offset será 0 para pagina 1, 10 para página 2: 0, 10, 20, 30
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db("articles")
            .where({ id: req.params.id }) // aqui é o ID do artigo.
            .first()
            .then(article => {
                article.content = article.content.toString() // retorna uma valor binário, precisa transformar para string.
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }

    const getByCategory = async (req, res) => {
        const categoryId = req.params.id;
        const page = req.query.page || 1;
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId); // vai retornar as categorias com ID, serão objtos apenas com ID.
        const ids = categories.rows.map(c => c.id); // para extrair os IDs.

        // fazendo a consulta.
        app.db({ a: "articles", u: "users" }) // apelido para as 2 tabelas.
            .select("a.id", "a.name", "a.description", "a.imageUrl", { author: "u.name" })
            .limit(limit).offset(page * limit - limit)
            .whereRaw("?? = ??", ["u.id", "a.userId"])
            .whereIn("categoryId", ids)
            .orderBy("a.id", "desc")
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getByCategory }
}