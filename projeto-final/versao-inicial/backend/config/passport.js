// Protegendo a API com o Passport
// Filtrar requisições que não venham com o token válido.

// site: jwt.io

const { authSecret } = require("../.env");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const { Strategy, ExtractJwt } = passportJwt;

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        // extrair JWT do cabeçalho de autenticação como token de portador.
    }

    const strategy = new Strategy(params, (payload, done) => {
        app.db("users")
            .where({ id: payload.id })
            .first()
            .then(user => done(null, user ? { ...payload } : false)) // se usuario não settado, false.
            .catch(err => done(err, false))
    })
    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate("jwt", { session: false })
    }
}