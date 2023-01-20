
// Um banco de dados de memória, um array de objetos, para persistir em memória.

// Uma sequencia de objetos, com seus id

const sequence = {
    _id: 1,
    get id() { return this._id++} // vai sempre retornar o proximo valor de 'id'.
}

const produtos = {}; // a chave é o 'id' e o valor é o próprio produto.
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // se o 'id' do produto não estiver 'settado', configurado.
    produtos[produto.id] = produto          // a chave vai ser o [produto.id], que receber o valor como sendo o próprio 'produto'.
    return produto   // aqui o produto estará com o 'id settado'
}

function getProduto(id) {
    return produtos[id] || {} // caso não encontre o produto, ele retorna um objeto vazio.
}

function getProdutos() {
    return Object.values(produtos) // para retornar apenas os 'valores'.
}

// uma função pra caso queira excluir produto.

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// agora preciso exportar isso para fora desse módulo, para ficar visível fora.

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };

// o objeto 'sequence' ficou interno à este módulo.


// o 'get' de todos os produtos.
// o 'get' por id de um produto.
// o 'post' para salvar um novo elemento, criar esse produto, para persistir na memória.
// o 'put' para alterar os dados do produto/elemento.
// o 'delete' para excluir um produto.

// Fizermos o CRUD = create, read, update, delete.