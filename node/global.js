
// Exportando um objeto Global....
// Caso queira colocar algo dentro do Escopo Global (geralmente é uma excessão, quase nunca usado).
// Qualquer arquivo do sistema terá acesso a esta informação.
// console.log(global);

globalThis.minhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'        
    },
    nome: 'Sistema Legal'
}

