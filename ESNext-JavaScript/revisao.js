// Funcionalidades novas do ECMAScript versões 6, 7 e 8.
// Templete String.
// Destructuring.
// Função Arrow.
// Função Arrow + this.
// Parâmentro default, Parâmetro Padrão.
// Operador Rest '...' ou pode ser o Spread, de espalhar.
// ES8: Object.values/Object.entries - O Object.keys já existia no anterior.
// Melhorias Notação Literal.
// Class.


// let e const são novas variáveis.

{
    var a = 2;
    let b = 3;
    console.log(b); // let tem escopo de bloco.
}

console.log(a); // 2 não tem escopo de bloco.
// console.log(b); // ERRO, b is not defined


// Templete String.

const produto = 'iPad';
console.log(`${produto} 
é caro`); // é possível quebrar a linha com Templete String. Com a string normal antiga, não é possível.


// Destructuring.
// Tirar algo de dentro da estrutura, seja array, objeto, string.
// esses 3 pontos "..." são o Operador REST.

const [l, e, ...tras] = "Maisa"; // desestruturar uma string.
console.log(l, e, tras); // M a [ 'i', 's', 'a' ] - ele tira as letras de uma string, 'M' foi atribuido a "l", "a" foi atribuido a "e"...

const [x, , y] = [1, 2, 3]; // desestruturar um array.
console.log(x, y); // 1 3

const { idade: i, nome } = { nome: "Ana", idade: 9 } // desestruturar objetos, tirar atributos de dentro do objeto.
console.log(i, nome);     // 'idade: i' está renomeando 'idade' para 'i'.


// Função Arrow.
// in line..

const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Se a função arrow tiver um corpo {} é preciso usar o 'return'.

const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3));

// Função Arrow + this

const lexico1 = () => console.log(this === exports); // sempre irá apontar para 'exports', o 'this' não vai variar.

// em uma função tradicional, o 'this' pode variar e apontar para outra coisa.


// Parâmentro default, Parâmetro Padrão.

function funcao(texto = 'Node') {
    console.log(texto)
}
funcao(undefined); // Node
funcao(); // Node
funcao(null); // null
funcao('E colocar algo como parâmetro aqui, ele será mais forte que o Parâmetro Padrão.');


// Operador Rest '...' ou pode ser o Spread, de espalhar.

function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total
}
console.log(total(1, 2, 3, 4, 5, 6));


// ES8: Object.values/Object.entries - O Object.keys já existia no anterior.

const obj = { a: 1, b: 2, c: 3};
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias Notação Literal.

const nomeX = 'ECMAScript';
const pessoaX = {
    nomeX,
    ola() {
        return 'é assim agora!'
    }
}
console.log(pessoaX.nomeX, pessoaX.ola());

// Antes era: 

const pessoaY = {
    nome: nomeX,
    ola: function() {
        return 'era assim antes!'
    }
}
console.log(pessoaY.nome, pessoaY.ola());


// Class.

class animal{};
class cachorro extends animal { // acaba sendo herança por protótipo.
    falar() {
        return 'Au au!'
    }
}
console.log(new cachorro().falar());

// para criar objetos a partir de uma classe você usa a palavra reservada "new"