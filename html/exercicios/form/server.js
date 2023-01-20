
// BACKEND do Formulário.

// Para criar arquivo 'pakage.json'
// PS C:\apps\aulasWeb\html\exercicios\form> npm init -y
// Instalar as dependencias do Express.
// PS C:\apps\aulasWeb\html\exercicios\form> npm i --save express@4.16.3 body-parser@1.18.2 -E

// Ele inicia importando o Express e o Body-parcer aqui dentro, para fazer o backend do formulário.

const express = require('express');
const app = express()
const bodyParser = require('body-parser'); // depois dos dados submetidos no formulário, ele vai fazer um 'parser'(analise) do corpo da requisição. E vai jogar os dados dentro de 'request.body'.

// urlencoded é o modo padrão do formulário.

app.use(bodyParser.urlencoded({ extended: true})); // sem isso, a resposta dada do formulário não aparece no terminal. É como se o 'body' não existisse no 'request'. O dado não será interpretado.

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluido!</h1>')
});

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
});

// POST vem do 'req.body'
// GET vem do 'req.query'

app.listen(3003);

// Dentro da pasta 'form' digita no terminal: node server.js (assim ele vai ficar ouvindo nesta porta).
// Toda vez que alterar aqui, chama ele pra ouvir de novo. Se usasse o 'nodemom' seria só salvar que ele já reinicializava.
// Para instalar a dependência 'nodemon' dentro da pasta 'form' digita no terminal: npm i --save nodemon
// Agora para ele ficar ouvindo: nodemon server.js