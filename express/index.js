
// Criando uma API

const express = require("express"); // qnd não usa o './' ele procura dentro de 'node_modules' o arquivo 'index.js'.
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid"); // usar o './' quando for uma pasta minha.
const usuarioApi = require("./api/usuario");
const produtoApi = require("./api/produto");

produtoApi(app, "com parâmetro!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text()); // estou chamando o body-parser, e o resultado dessa função é uma função Middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // quando se submete formulário no frontend, o padrão de dados que chega no backend é do tipo "url encoded".
app.use(saudacao("Maisa"));

// Isso é uma requisição Middleware.
// é possível retornar objeto, array, array dentro de objeto, html.
// a resposta pode ser JSON, XML, formato binário, formato textual, HTML. O mais comum é JSON.

app.use((req, res, next) => {  // precisa chamar o 'next()' aqui, senão, ele não continua a leitura dos códigos abaixo disso.
    console.log("Antes..."); 
    next()
});

// A ordem é importante.

app.get("/clientes/relatorio", (req, res, next) => {  // outra maneira de passar parâmentros, usando a 'query'.
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}.`) 
    next()
}) // Acesso na URL: http://localhost:3001/clientes/relatorio?completo=true&ano=2018

app.post("/corpo", (req, res) => { // o mais comum aqui é usar o Body-Parser (analisador de corpo)
    // let corpo = "";
    // req.on("data", function(parte) {
    //     corpo += parte
    // })

    // req.on("end", function() {
    //     res.send(corpo)
    // })
    res.send(req.body); // usando aqui o body-parser
}) 

// Body-parser é o middleware de análise de corpo do Node.js. Ele é responsável por analisar os corpos de solicitação de entrada em um middleware antes de manuseá-lo.

app.get("/clientes/:id", (req, res) => {  // aqui ele acessa o 'id' usando 'params' (testa lá no Postman).
    res.send(`Cliente ${req.params.id} selecionado!`);
})

app.get("/opa", (req, res, next) => {   // o 'app.use' ou 'app.all' atende todos os tipos de requisição: get, post, put, delete.
    console.log("Durante...")
    res.json({
        data: [
            {id: 12, name: "Ana", position: 1},
            {id: 56, name: "Bia", position: 2},
            {id: 35, name: "Lua", position: 3},
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json({   // vai retornar um JSON, no browser e no PostMan
    //     name: "iPad 32Gb",
    //     price: 1899.22,
    //     discount: 0.12
    // })

    // res.send("Estou <b>bem!</b>")
})

app.use("/opa", (req, res, next) => { 
    console.log("Depois..."); 
    next()
})


app.listen(3001, () => {
    console.log("Backend executando.....")
})