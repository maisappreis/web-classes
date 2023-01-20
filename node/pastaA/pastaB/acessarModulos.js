
// IMPORTAÇÃO no Node, com "require".

const moduloA = require('../../moduloA'); // voltou 2 pastas, e acessou o arquivo ModuloA. Esse é um caminho relativo.

console.log(moduloA.cumprimento);

// você pode importar modulos que estão dentro de "node_modules",
// e pode importar os modulos que já vem previamente instalados no Node, os modulos Core.

const c = require('./pastaC'); // por ele estar dentro de 'index', não preciso colocar o caminho completo ('./pastaC/index')
console.log(c.ola);


// Acessando o "http", como é um modulo interno do Node, não precisa usar caminho relativo.

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// Descobrir porque meu navegador não acessa o "localhost:8080"
