// COMANDO PARA INICIALIZAR O 'package.json' dentro da pasta do projeto.
// PS C:\apps> cd aulasJavaScript
// PS C:\apps\aulasJavaScript> cd node
// PS C:\apps\aulasJavaScript\node> cd projeto
// PS C:\apps\aulasJavaScript\node\projeto> npm init -y

// Wrote to C:\apps\aulasJavaScript\node\projeto\package.json:

// Instalando o Express:
// PS C:\apps\aulasJavaScript\node\projeto> npm - --save express@4.16.2 -E

// PS C:\apps\aulasJavaScript\node\projeto> npm i --save-dev nodemon@1.14.11 -E (Para instalar 'nodemon' dentro das dependencias de 'dev' desenvolvimento)

// A pasta "src" é criada por padrão, para armazenar o código fonte. 
// Aqui vamos configurar o Express, que será nosso servidor Web, nosso framework web para a criação dos nossos web services.

// Primeira coisa: quando se está desenvolvendo algo que tem comunicação com a rede, eu preciso declarar uma porta.
// A porta é um processo dentro do computador
// A porta 80 é a porta padrão da requisição do 'http'


const porta = 3003;

const express = require('express'); // estou importando o Express para este módulo.
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

// importei o banco de dados aqui. E importei o body parser.

app.use(bodyParser.urlencoded({ extended: true })) // esse "urlencoded" é uma função middleware.
// Isso vai ser disparado para todas as requisições.

app.get('/produtos', (req, res, next) => {   // 'get' é uma forma de requisição. E como resposta pra essa requisição, vou passar uma função middleware
    res.send(bancoDeDados.getProdutos()) // para obter toda a lista de produtos.
}) 

// A função/método send() vai automaticamente converter esse objeto para JSON.
// "req, res, next" = requisição, resposta, próximo passo. 

app.get('/produtos/:id', (req, res, next) => {  // passei uma parâmentro para produto, o '/:id'. Para obter um produto específico com base no 'id'.
    res.send(bancoDeDados.getProduto(req.params.id))  // o parâmentro está na requisição, ele requer o parâmentro id.
})

// E para submeter os dados, e salvar um outro produto.
// Alguem vai submeter as informações, criar produtos, tipo formulário dos produtos, com nome, preço, e blabla, e dai entra o 'post'.

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // é a resposta que vem da função banco de dados. Vai converter para JSON para ir para Web.
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})


 app.listen(porta, () => {
     console.log(`Servidor está executando na porta ${porta}.`)
 })

 // Enquanto esse código estiver executando, esta porta fica "ocupada" com o processo.

 // quando reinicia o servidor "rs" o 'id' volta para 1.
 // No Postman: http://localhost:3003/produtos/2
