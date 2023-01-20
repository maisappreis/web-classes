
// Node faz "cash" de modulos que são importados a partir da função "require".
// Quando importa o módulo, por padrão ele é "casheado".
// Função Factory é uma forma de driblar isso dentro do Node.
// Se você quiser importar um modulo, e que um novo objeto seja gerado, você usa a função Factory.

// Uma Factory retorna um novo objeto/uma nova instância.

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}