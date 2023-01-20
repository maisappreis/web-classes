
console.log(this === global); // false | porque 'this' aponta para 'module.exports' e não para 'global'.
console.log(this === module); // false

console.log(this === module.exports); // true
console.log(this === exports); // true


// Dentro de uma função, o 'this' NÃO aponta para 'exports' e NÃO aponta para 'module.exports'.
// Dentro de uma função, o 'this' APONTA para 'global'.

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports); // false    
    console.log(this === module.exports);  // false
    console.log(this === global); // true

    this.perigo = "Cuidado, porque isso vai para o escopo global."; // Cuidado, porque isso vai para o escopo global.
}

logThis();

this.perigo = "Cuidado, porque isso vai para o escopo global."; // Já isso fora da função, está apenas dentro do modulo.