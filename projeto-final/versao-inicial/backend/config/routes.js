// Definir as rotas da minha aplicação.
// Versão usando o 'consign'.

const admin = require("./admin");

module.exports = app => {
    app.post("/signup", app.api.user.save);
    app.post("/signin", app.api.auth.signin);
    app.post("/validateToken", app.api.auth.validateToken);
    
    app.route("/users")            // aqui não é pasta, então não tem ponto, é uma URL.
        .all(app.config.passport.authenticate()) // Acesso apenas logado.
        .post(app.api.user.save) // com admin
        .get(admin(app.api.user.get));
    
    app.route("/users/:id")
        .all(app.config.passport.authenticate()) // Acesso apenas logado.
        .put(admin(app.api.user.save))  // função save() salva novo usuario(post) e altera usuario existente(put)
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove));

    app.route("/categories")
        .all(app.config.passport.authenticate()) // Acesso apenas logado.
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save));

// Cuidado com a ordem! URLs mais específicas em cima, e mais genéricas em baixo.
    app.route("/categories/tree")
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree);

    app.route("/categories/:id")
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove));

    app.route("/articles")
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save)); // apenas o administrador pode postar um artigo.

    app.route("/articles/:id")
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save)) // apenas o administrador pode alterar.
        .delete(admin(app.api.article.remove)); // apenas o administrador pode remover.

    app.route("/categories/:id/articles")
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory);

    app.route("/stats")
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)
}



// Versão sem usar o 'consign'. Forma tradicional.

// const user = require('../api/user');

// module.exports = app => {
//     app.route("/users")
//         .post(user.save)
// }