
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); // aqui invoca a função Factory.
const contadorD = require('./instanciaNova')();


contadorA.inc(); // valor original era 1, mais 2 incrementos, igual 3.
contadorA.inc(); // esse "inc" é para incrementar o contador.
console.log(contadorB.valor); // valor = 3 | Alterando 'contadorA', alterou o valor do 'contadorB'.



contadorC.inc();
contadorC.inc();
console.log(contadorD.valor); // valor = 1 | Como aqui foi usada a Factory, o valor de 'contadorD' não é alterado, pq o incremento foi em 'contadorC'.
console.log(contadorC.valor); // valor = 3 | No 'contadorC' houve sim incremento.