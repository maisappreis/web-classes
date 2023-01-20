
// Destructuring

let array = [2, 3, 4];
const [x, y, z] = array;

console.log([x, y, z]); // [2, 3, 4]


// Função com promise.

function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max] // usar o Destructuring para inverter máximo e mínimo caso o mínimo seja maior.
        // [destructuring] = [array]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min // Math.floor ou parseInt para ter um numero inteiro.
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 30)
    .then(numero => numero * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)


// DESAFIO

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler') // isso é impresso primeiro porque ele não esperar o código de cima executar até o fim.
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))



// Quando se quer chamar várias promises ao mesmo tempo, e só chamar o 'then' quando todas as promessas forem resolvidas.
// Vai ser isso no exemplo abaixo.


function gerarNumerosEntre2(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max] // usar o Destructuring para inverter máximo e mínimo caso o mínimo seja maior.
        // [destructuring] = [array]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min // Math.floor ou parseInt para ter um numero inteiro.
            resolve(aleatorio)
        }, tempo)
        
    })
}

// Por exemplo, quero gerar 5 números aleatórios de uma vez só.

function gerarVariosNumeros() {
    return Promise.all([            // cria-se aqui um array de 'promises'.
        gerarNumerosEntre2(1, 20, 1000),
        gerarNumerosEntre2(0, 80, 5000),
        gerarNumerosEntre2(10, 100, 2000),
        gerarNumerosEntre2(50, 100, 500),
        gerarNumerosEntre2(5, 15, 3000),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros)); // ele leva o tempo necessario, e me devolve um array com todos.




