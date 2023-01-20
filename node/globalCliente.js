
// Importando um objeto Global...

require('./global');

console.log(minhaApp.saudacao());

minhaApp.nome = 'Eita!!';
console.log(minhaApp.nome); // O objeto ficou passivo de ser modificado.


// Poderia congelar ele usando o Object.freeze()

/*
globalThis.minhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'        
    },
    nome: 'Sistema Legal'
})
*/
