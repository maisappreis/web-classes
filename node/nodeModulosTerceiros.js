
// IMPORTAÇÃO no Node, com "require".

const _ = require('lodash') // esse "_" é a referencia para o lodash, para a biblioteca. (ele buscará dentro de lodash > index.js)

// Exemplo usando a biblioteca:

setInterval(() => console.log(_.random(1, 10)), 2000);
// esse é um código pra um sorteio, usando um código da biblioteca, sem precisar que eu escreva meu próprio código.
// sorteio numero aleatório, de 1 a 1000, feito de 2 em 2 segundos (2000).


// No terminal:

// PS C:\apps> cd aulasJavaScript
// PS C:\apps\aulasJavaScript> cd node
// PS C:\apps\aulasJavaScript\node> nodemon nodeModulosTerceiros.js
// PS C:\apps\aulasJavaScript\node> nodemon nodeModulosTerceiros.js

// Ctrl + C para parar a execução do nodemon, e qualquer outra execução no terminal.