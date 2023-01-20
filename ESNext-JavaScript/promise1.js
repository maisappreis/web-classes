
// Sobre PROMISE.
// Consegue fazer várias chamadas de forma mais simples, com menos linhas do que um callback tradicional.


console.log(typeof Promise); // function

let p = new Promise(function(cumprirPromessa) { // mas 'p' aqui vira um objeto. Promessa de algo que será executado no futuro. E devolvido no futuro.
    cumprirPromessa(["Ana", "Bia", "Paula"])  // prometeu devolver o valor 3. Só pode passar 1 parâmentro aqui. Se quiser mais valores, colocar um objeto dentro.
    // {x: 3, y: 4, z: 5} // pode ser objeto, pode ser array.
    // ["Ana", "Bia", "Paula"]
}) 
// Eu poderia já colocar os '.then()' logo aqui depois da função.
// dentro de 'promise' chama uma função pra quando quiser cumprimir essa promessa.

console.log(typeof p) // object

// usa 'then' para chamar a função


p.then(function(valor) {  // Na forma função tradicional.
    console.log(valor)
})

p
    //.then(valor => console.log(valor)) // Na forma ARROW.
    .then(elemento => elemento[0]) // aqui pega o primeiro elemento "Ana"
    .then(primeiraLetra => primeiraLetra[0]) // aqui pega a primeira letra de Ana, "A"
    .then(letra => letra.toLowerCase()) // deixando a letra minuscula "a"
    .then(letraMinuscula => console.log(letraMinuscula));

 // Esse .then() vai receber sempre apenas um único parâmentro.
 // Cria uma sequencia de operações, armazenadas em funções.
 // Eu poderia criar uma função tradicional nomeada com return exernamente, e depois chamar essa função dentro de .then(nomeFuncao)

