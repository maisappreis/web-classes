
// Escrever arquivos com o método writeFile.()

const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') 
})

// se 'err' for falso, ele vai executar o 'Arquivo Salvo!'

// Vou querer salvar esse objeto no disco, persistir no disco.
// Por ser um objeto, vou transformar/converter em texto, formato JSON - usando JSON.stringify()
// ele cria de fato um arquivo no formato .json ali no meu menu.


