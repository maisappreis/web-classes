// Notação ponto, que serve para acessar membros de uma função, ou objeto.
// APIs do JavaScript.
// Funções Math. | this. | .toString | .toFixed ....


const objeto = {}
objeto.nome = "Bola" // O atributo ".nome" foi criado dinamicamente. 
objeto["nome"] = "Bola2" // Uma forma difenrente de fazer.
console.log(objeto.nome);


function obj1(nome) {
    this.nome = nome;
    this.exec = function() {
       console.log("Imprima!");
    }
}
const obj2 = new obj1("Cadeira"); // Aqui o "this." criou um atributo público, que ficará visível para quem instanciar um objeto do tipo obj2.
const obj3 = new obj1("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec(); // Aqui o "this." criou uma função pública, ficarão expostas.


const peso1 = Number("2");
console.log(typeof Number); // Number é função.
console.log(Number.isInteger(peso1)); // retorna true. Integer = Inteiro.

const nota = 9.87452;
console.log(nota.toFixed(2)); // Fixa 2 casas após a virgula.
console.log(nota.toString(2)); // Retorna linguagem binária 1001.1101111111
console.log((9.87452).toFixed(2));

console.log(Math.PI); // retorna valor de PI.
console.log(Math.pow(10, 2)); // retorna Potência, aqui 10 elevado a 2.
console.log(Math.ceil(6.1)); // arredonda para cima. Ceil = teto
console.log(Math.floor(6.1)); // arrendonda para baixo. Floor = chão

const palavra = "C4r4cters";
console.log(palavra.charAt(3)); // retorna a letra do índice de 0 a n1.
console.log(palavra.charCodeAt(3)); // retorna o valor de uma tabela lá chamada unicode.
console.log(palavra.indexOf("4")); // retornou a posição do primeiro número 4.
console.log(palavra.substring(1)); // retorna a palavra do índice 1 até o final.
console.log(palavra.substring(0, 3)); // retornou índice 0, 1 e 2.
console.log("Aprendendo ".concat(palavra).concat("!")); // concatena.
console.log(palavra.replace(/4/g, "a")); // Substitui todos os 4 por A. O "g" ali é de global, sem ele só substitui um 4.

console.log("Maisa,Renan,Derek,João".split(",")); // cria um Array.
