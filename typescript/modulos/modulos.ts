// Modulos
// Mais recomentado para aplicações maiores, afim de evitar conflitos entre os arquivos.
// Os módulos não são interpretados pelo browser, é necessário usar uma biblioteca para isso.
// O SystemJS é necessário para fazer essa separação em módulos, para fazer o browser ser como modulos.
// https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.21.6/system.js (CDN do SystemJS)

// import { areaRetangulo  } from "./retangulo";
// import { areaCircuferencia } from "./circuferencia";

import retangulo from "./retangulo"; // por colocar o 'default' lá, não preciso usar o 'destructuring'.
import { areaCircuferencia as circ } from "./circuferencia"; // import e export padrão CommonJS

console.log("Módulo carregado....")
console.log(retangulo(7, 8));
console.log(circ(2));

// Mistura dos sistemas de módulos, 

const { digaOi } = require("./novo"); // import e export padrão Node e ES6
console.log(digaOi("Ana"));

// O browser não consegue interpretar o 'import' e nem o 'exports'. Apenas o Node entende.
// Por isso, é necessário baixar uma dependência, o 'SystemJS'.

// em uma situação real, algo comp o Webpack fará isso de forma melhorada para o wordflow do trabalho, e não esse SystemJS.
// typescript>npm i -s systemjs@0.21.5 -E

// COMMONJS
// import blabla from blabla
// export
// export default

// ES6
// require("blabla")
// module.exports     --> padrão Node
// exports