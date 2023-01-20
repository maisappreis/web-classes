
const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // instanciar o 'express' em uma variável.


// isso vai ser aplicado à qualquer requisição que chegar no servidor.

app.use(express.static('.')); // vai prover todos os arquivos estáticos.
app.use(bodyParser.urlencoded({ extended: true })); // se vier dados de um formulário, essa linha transfomará em objeto.
app.use(bodyParser.json()); // se vier dados JSON, essa linha transformará em objeto.

const multer = require('multer'); // usado para interpretar o formulário que veio do arquivo do upload.

// Armazenamento do upload.

const storage = multer.diskStorage({
    destination: function (req, file, callback) {  // serve para personalizar o nome do arquivo no momento de salvar esse upload.
        callback(null, './upload') // pasta na qual vai salvar os uploads.
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`); // nome o qual ele quer salvar o arquivo. Date.now (data em milisegundos)
    }
});

const upload = multer({storage}).single('arquivo');

app.post('/upload', (req, res) => {  // requisição do upload é via POST
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
}); 

// Função para Submissão de formulário com o método Fetch API. (fetch2.html)

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

// Função para exercício Axios2.html



app.get('/parOuImpar', (req, res) => {
 // formas de receber dados dentro do Express.
    // req.body (http://localhost:8080/parOuImpar/1)
    // req.query (http://localhost:8080/parOuImpar?numero=1)
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})



// app.get('/teste', (req, res) => res.send('Ok')); // função middleware que será chamada quando quando o '/teste' for invocado, a partir de uma requisição do tipo 'get'.
app.listen(8080, () => console.log('Executando...'));

