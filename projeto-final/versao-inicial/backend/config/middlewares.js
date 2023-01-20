// o body-parser para interpertar os arquivos que vierem no corpo da requisição.
// mesmo que estejam na mesma maquina, o backend e o frontend são 2 APIs diferentes, 2 processos, rodando em portas diferentes. Por isso, o 'cors' precisa estar habilitado.

// A aplicação backend precisa do Node para rodar, juntamente com o Express (para produção e desenvolvimento).
// Já a aplicação frontend não precisa do Node (para produção apenas), pq gera arquivos estáticos, e podem ser executados por outros mecanismos.


const bodyParser = require("body-parser");
const cors = require("cors"); // 2 APIs (back e front), então precisa do 'cors' para elas se comunicarem.

// usando a dependencia 'consign'.

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}