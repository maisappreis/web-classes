// Hosting, que acontece com o VAR.
// Instanciamento de função.
// par nome/valor.


console.log("a = ", a); // ele joga a "var a" para cima, considera a existencia dela, apesar de ela ter sido declarada abaixo dessa sentença.
var a = 2;
console.log("a = ", a);

// Isso é o Hosting, o isamento da variável para cima.
// Mas não de deve fazer isso, sempre declara antes, e depois chama ela.
// Se fizer a mesma coisa com o LET gera erro.

console.log(typeof Object); // função.
console.log(typeof new Object); // objeto. Colocar o "new" significa instanciar uma função. O Object passa de função para objeto de fato.
console.log(typeof new Object()); // objeto. Com ou sem os parâmetros.

const cliente = function() {};
console.log(typeof cliente); // função.
console.log(typeof new cliente); // objeto.

class produto {}; // ES 2015 (ES6): padrão do JavaScript, a nova versão dele.
console.log(typeof produto); // função. A classe na verdade é uma função. Uma forma diferente de escrever produto.
console.log(typeof new produto()); // objeto.

// A forma de criar objetos em JavaScript é a partir de função. 

// Sobre nome/valor.
const saudacao = "Olá"; // contexto léxico 1. Como não está entre {}, essa const fica armazenada num contexto abrangente.
console.log(saudacao);

function exemplo() {
    const saudacao = "Falaaa" // contexto léxico 2. Essa constante está dentro do bloco.
    return saudacao;
   }
console.log(exemplo());

// Objetos são grupos alinhados de pares chave/valor.
const usuario = {
    nome: "Maisa",
    idade: 28,
    peso: 65,
    endereco: {
        logradouro: "Rodovia Sebastião",
        numero: 2065
    }
}
console.log(usuario);
