// Sobre Array.
// Sobre objetos.
// Sobre o "null".
// Sobre função, sobre função ARROW "=>".
// Diferenças sobre VAR e LET.

const formatoArray = []; 

const formatoObjeto = {};
formatoObjeto.nome = "Celular Ultra Mega";
formatoObjeto.preco = 2560.64;
console.log(formatoObjeto);

const produto1 = {
    nome: "Camisa Polo",
    preco: 79.90,
    desconto: 0.4
}
console.log(produto1);

const produto2 = {
    nome: "Sapato",
    preco: 56.6
    }

let valor;
console.log(valor); // undefined
valor = null // ausência de valor, não aponta para nenhum lugar na memória.
console.log(valor); // null,  usar nulo para deixar produto sem preço, por exemplo.
 
console.log(typeof Object); // objeto é função.

class produto {}
console.log(typeof produto); // classe é função.

function soma(a, b = 3) {
    return a + b;
} 
console.log(soma(2, 6));
console.log(soma(2));

// Armazenando uma função dentro de uma variável.
const imprimaSoma = function(a, b) {
    console.log(a + b)
}
imprimaSoma(5, 5);

// Armazenando uma função arrow dentro de uma variável.
const soma2 = (x, y) => {
    return x + y 
}
console.log(soma2(5, 10)); 
// o símbulo => significa função Arrow.

const subtracao = (x, y) => x - y; // return está implícito.
console.log(subtracao(6, 5));

// Sobre Função ARROW.
// Quando for uma função de uma única linha, pode ser feito sem {} usando a flexa/arrow "=>".
// Na Função ARROW, pode-se usar as {} com o return dentro delas.
// E pode-se não usar {}, sem o return, que já fica implícito.
// Primeira parte do ARROW é colocar uma expressão relacional que retorna true or false, exemplo "a <= b", retorna true or false.

const resultado1 = nota1 => nota1 >= 7 ? "Aprovado" : "Reprovado"; // Função Arrow sem {} e sem Return.
console.log(resultado1(9));

const resultado2 = nota2 => {
    return nota2 >=7 ? "Aprovado" : "Reprovado"; // Função Arrow com {} e com Return.
}
console.log(resultado2(6));

function imprimirLegal(w) {
    return console.log(w);
}
imprimirLegal("Legal!!!");


// Sobre VAR e LET.
// A variável VAR fica visível em todo o código, EXCETO quando declarada dentro de uma função.
// Mas quando declarada fora de função, estará visível globalmente.
// Deve-se evitar criar variáveis globais, porque em algum momento alguém pode redeclarar ela com outro valor, e ai comprometer o programa.

var numero1 = 1; {
    var numero1 = 2;
    console.log("dentro =", numero1);
}
console.log("fora =", numero1);

var numero2 = 1; {
    let numero2 = 2;
    console.log("dentro =", numero2);
}
console.log("fora =", numero2);

// O LET procura o valor primeiro dentro do bloco. Ele tem escopo global, escopo de função e escopo de bloco.
// O VAR não tem escopo de bloco, e isso que faz toda a diferença entre eles.

const funcs = [];
for (var i = 0; i < 12; i++) { // com o VAR
    funcs.push(function() {
        console.log(i);
    })
} 
funcs[2]();
funcs[8]();

// Pelo fato de a VAR não ter escopo de bloco, o resultado será 10 para qualquer chamada. Agora olha como ficaria com LET.

const funcs2 = [];
for (let i = 0; i < 10; i++) { // com o LET
    funcs2.push(function() {
        console.log(i);
    })
}
funcs2[2]();
funcs2[8]();