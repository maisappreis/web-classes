
// Uso de algumas funções.
// templateString.
// Uso do !!


const nome = "Maisa";
const concatenacao = "Olá " + nome + ", como você está?";
const template = `
   Olá 
   ${nome}, como você está?`
console.log(concatenacao, template); // o templateString serve para facilitar longas concatenações.


let isAtivo = true;
console.log(isAtivo); // true
console.log(!isAtivo); // false
console.log(!!isAtivo); // true

let nomeAlguem = "";
console.log(nomeAlguem || "Desconhecido");

const valoresArray = [20.1, 6, 15, 9.7];
console.log(valoresArray[0], valoresArray[3]);
valoresArray[10] = 10;
console.log(valoresArray);
console.log(typeof valoresArray);



