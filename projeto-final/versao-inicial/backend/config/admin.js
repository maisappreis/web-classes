// uma função que retorna o middleware.
// mas só quero chamar ela se o usuário for administrador.

module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.admin) {   // se for TRUE, ou seja, o usuario for admnistrador.
            middleware(req, res, next)
        } else {
            res.status(401).send("Usuário não é admnistrador.") // e caso não seja admin.            
        }
    }
}