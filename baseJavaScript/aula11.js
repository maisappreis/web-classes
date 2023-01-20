// Sobre Funções. Função em JS é First-Class Object (Citizens).
// O JavaScript trata funções como dados. Por isso há um leque de possibilidades.
// Higher-order function.
// Parâmetros variáveis.
// Parâmetro padrão.

//---------------------------------------------------------

// Ideia 1: criar função de forma literal.
// Na função o bloco é obrigatório estar entre {}.
// Caso você não chame o "return" ele retorna como "undefined".

function funcao1() { }


// Ideia 2: armazenar função dentro de uma variável.
// A função aqui fica anônima. Ai você invoca a função pelo nome da variável com os ().

const variavelComFuncao = function() { }


// Ideia 3: armazenar a função dentro de uma array.

const arrayComFuncao = [function (a, b) { return a + b }, funcao1, variavelComFuncao]
console.log(arrayComFuncao[0](2,3)); // aqui ele invoca apenas o elemento do índice 0 do array, e dá valores aos parâmentos "a" e "b".


// Ideia 3: armazenar a função dentro de um atributo de objeto.

const objeto = {};
objeto.falar = function () { return "Opa"};
console.log(objeto.falar()); // Opa
console.log(objeto) // { falar: [Function (anonymous)] }


// Ideia 4: passar uma função como parametro para outra função.

function run(fun) {   // esse "fun" é uma função anônima que imprime no console. (function () { console.log("Executando...")})
    fun()    // sem esses () aqui, a função não é invocada.
}
run(function () { console.log("Executando...")});


// Uma função pode retornar/conter uma outra função.

function somando(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
somando(5, 2)(3);
// somando(a, b)(c);

console.log("Parâmentos Variáveis.............")
// Parâmetros variáveis.
// O fato de uma função não ter parâmetros não impede que você, ainda assim, passe parâmentros.
// E tem como você recuperar os parâmentos usando "arguments". Esse "arguments" é um array com índices.

function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma()); // 0
console.log(soma(1)); // 1
console.log(soma(1, 2, 3.5)); // 6.5
console.log(soma(2, 6.6, ": Teste")); // 8.6: Teste


// Parâmetro padrão: Estratégia 1 para gerar um valor padrão, usando o OU ||.
console.log("Sobre parâmetro padrão estratégia 1, usando o OU ||.....")

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()); // sem parâmentros definidos, então assume 1 para todos os valores.
console.log(soma1(3));
console.log(soma1(1, 2, 3));
console.log(soma1(0, 0, 0)); // ele considera o 0 como falso, e assuma o valor de 1.


// Parâmetro padrão: Estratégia 2, 3 e 4 para gerar um valor padrão, usando o "a ? b : c".
console.log("Sobre parâmetro padrão estratégias 2, 3 e 4..... usando a ? b : c")

function soma2(a, b, c) {
    a = a !== undefined ? a : 1  // se "a" diferente de indefinido, pegar "a", senão, pega o 1.
    b = 1 in arguments ? b : 1    // se dentro de "arguments" existe o índice 1, pegar o "b", senão, pega o 1. É sempre "índice in arguments". Aqui os índices seriam (0, 1, 2).
    c = isNaN(c) ? 1 : c         // se "c" é um Não é um Número, pega 1, senão pega "c".
    return a + b + c
}
console.log(soma2()); 
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

// Parâmetro padrão após 2015, com o ES2015.
console.log("Parâmetro padrão após 2015, com o ES2015.....Menor chance de bugs.")

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3()); 
console.log(soma3(3));
console.log(soma3(1, 2, 3));
console.log(soma3(0, 0, 0));