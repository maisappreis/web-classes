const app = require("express")(); // 'app' é uma instância do Express. Fiz o require e já chamei a função também.
const consign = require("consign");
const db = require("./config/db"); // isso aqui é o 'knex' apenas com outro nome.
const mongoose = require("mongoose");

require("./config/mongodb");

// adicionar o 'db' dentro de 'app'.

app.db = db; // com isso, eu consigo fazer o CRUD: create, read, update e delete, no Banco de Dados. App recebe banco de dados.
app.mongoose = mongoose; // app recebe mongoose (ele é colocado dentro da aplicação.)

// Com o 'consign' não preciso ficar importanto cada um dos arquivos, nem com o caminho relativo das pastas.

consign()
    .include("./config/passport.js")
    .then("./config/middlewares.js")
    .then("./api/validation.js")
    .then("./api")  // o 'consign' vai carregar todos os arquivos dentro da pasta 'api'.
    .then("./schedule")
    .then("./config/routes.js")
    .into(app)   // essa depend. 'consign' está fazendo a ligação do 'app' em 'middlewares.js', com esse 'app' aqui.
    
// ou seja, está injetando os middlewares dentro da minha aplicação.


app.listen(3000, () => {
    console.log("Backend executando...")
})


