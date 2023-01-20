
// IMPORTAÇÃO no Node, com "require".
// Esse arquivo módulo Cliente vai requerer/pedir/demandar outros módulos/arquivos.
// require() é um "commonJS".

const moduloA = require('./moduloA'); // por padrão é ('./moduloA.js').
const moduloB = require('./moduloB'); // caminho relativo.

console.log(moduloA);
console.log(moduloA.cumprimento);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);


console.log(moduloB);
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());

// No Terminal > "node -v" olha a versão | "npm -v" olha versão do Node Package Managerment
// E esse NPM é o responsavel por baixar bibliotecas de terceiros, como jQuery, React, Angular e muito mais coisas.
// Instalando "lodash" >> digitar no terminal: "npm i lodash"

// Ai se eu mandar meus código para salvar no GitHub, precisa que a pasta do "lodash" seja ignorada, porque tem muita coisa, por isso pasta "gitignore".