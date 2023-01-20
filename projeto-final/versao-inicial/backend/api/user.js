const bcrypt = require("bcrypt-nodejs"); // para criptografar a senha do usuário sempre que ela for salva.

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10); // seria o sal, o tempero para gerar a senha. Para cada senha, ele gera um 'hash', que não tem como descobrir a senha do usuário a partir desse 'hash'.
        return bcrypt.hashSync(password, salt) // gera o 'hash' de forma sincrona, sem precisar de callback.
    }

    // Método Save irá salvar novo usuário e alterar usuario existente.

    const save = async (req, res) => {
        const user = { ...req.body } // no 'body' foi mandado um JSON, que representa o 'user'/usuario. E esse 'body' foi interceptado pelo body-parser, que gera um objeto configurado pra gente. Operador spread, espalhar todos os atributos do 'body' dentro de um outro objeto. Clonando o 'body'.
        if(req.params.id) user.id = req.params.id; // se aquele estiver settado, coloco ele dentro de 'user.id'.

        // se a requisição da URL original não começar com "/users".
        if(!req.originalUrl.startsWith("/users")) user.admin = false; // ou seja, apenas em "/users" eu posso definir admnistradores.
        // se não é usuario ou se usuário não é administrador.
        if(!req.user || !req.user.admin) user.admin = false;

        try {
            existsOrError(user.name, "Nome não informado"); // se não existe 'name', essa é a mensagem.
            existsOrError(user.email, "E-mail não informado");
            existsOrError(user.password, "Senha não informada");
            existsOrError(user.confirmPassword, "Confirmação de Senha inválida");
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem");

            // validação para saber se este usuário já não está cadastrado.
            const userFromDB = await app.db("users") // fazendo uma checagem lá no banco de dados.
                .where({ email: user.email }).first()  // função first() para não pegar uma lista de usuarios, e sim, apenas 1, o primeiro.
            if(!user.id) { // se o ID não estiver settado. Não existir.
                notExistsOrError(userFromDB, "Usuário já cadastrado")
            }
            
        } catch(msg) {
            return res.status(400).send(msg); // erro 400 é erro do lado do cliente, não do servidor. O usuário que errou.
        }

        user.password = encryptPassword(user.password); // aqui a senha é encryptografada.
        delete user.confirmPassword; // a confirmação de senha é deletada.
 
        if(user.id) { // se tiver ID
            app.db("users")
                .update(user) // então atualizar o usuario.
                .where({ id: user.id })
                .whereNull("deletedAt")
                .then(_ => res.status(204).send()) // se tudo der certo, chama o status 204, que é o status de sucesso.
                .catch(err => res.status(500).send(err)) // e se der erro, provavelmente agora foi do lado do servidor.
        } else { // se não tiver ID
            app.db("users")
                .insert(user) // então insirir o usuário.
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db("user")
            .select("id", "name", "email", "admin")
            .whereNull("deletedAt") // traga todos os usuario em que essa coluna esteja nula. Ou seja, trazer usuário não excluidos, apenas os ativos.
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    // código não será usado, apenas um desafio.

    const getById = (req, res) => {
        app.db("users")
            .select("id", "name", "email", "admin")
            .where({ id: req.params.id })
            .whereNull("deletedAt")
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    // atualizar a coluna "deletedAt", mas não vai de fato deletar do banco de dados,
    // ele apenas vai deixar de aparecer no sistema.
    // mas antes precisa checar se esse usuário não possui artigos postados, se sim, precisa deletar o artigo antes.
    const remove = async (req, res) => {
        try {
            const articles = await app.db("articles")
                .where({ userId: req.params.id })
            notExistsOrError(articles, "Usuário possui artigos.");

            const rowsUpdated = await app.db("users")
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, "Usuário não foi encontrado.");

            res.status(204).send();
        } catch(e) {
            res.status(400).send(e);
        }
    }

    return { save, get, getById, remove }
}

