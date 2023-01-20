// Parte de segurança e autenticação.
// Função de Login.

const { authSecret } = require("../.env");
const jwt = require("jwt-simple"); // é gerado um token 'jwt'.
const bcrypt = require("bcrypt-nodejs"); // servirá para comparar a senha criptografada com a senha digitada no login.

module.exports = app => {
    const signin = async (req, res) => {
        if(!req.body.email || !req.body.password) { // se não colocado email ou senha.
            return res.status(400).send("Informe usuário e senha!")
        }

        const user = await app.db("users")
            .where({ email: req.body.email })
            .first() // pegar o primeiro
        
        if(!user) return res.status(400).send("Usuário não encontrado!") // se o usuário não existe, retorna status de erro.

        // comparando senha recebida crua com senha criptografada.
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch) return res.status(401).send("Senha ou e-mail inválidos.")

        // com a função date.now() ele vai gerar uma expiração para o token.
        const now = Math.floor(Date.now() / 1000);

        const payload = { 
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, // issued at (emitido em). Data de geração do token
            exp: now + (60 * 60 * 24 * 3) // Data de expiração do token: válido por 3 dias. 
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret) // codificação do token.
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null;
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret) // decodificação do token.
                // no JS o tempo é em milisegundos (por isso * 1000)
                // já no Token o tempo está em segundos.
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token.
        }
        res.send(false)
    }
    return { signin, validateToken }
}

// http://localhost:8081/auth
