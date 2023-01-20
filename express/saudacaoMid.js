
// Criando um Middleware.
// Mesmo não tendo os parâmentros: req, res e next, ainda assim ele entende como uma função Middleware.
// mas eu não posso colocar qualquer parâmentro aleatório, então preciso criar uma função, que retorne uma função Middleware.

function saudacao(nome) {
    return function(re, res, next) {
    console.log("Seja bem vindo, " + nome + "!")
    
    next()
    }    
};

module.exports = saudacao;