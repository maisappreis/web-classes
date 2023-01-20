// Tratamento de ERRO dentro das PROMISES.
// Tratamento de ERRO usando TRY e CATCH.

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro) {
            reject("Ocorreu um erro!")
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5) // se 10% de chance de erro, mais chances de imprimir 'testando...', se 90%, mais chande de resultar em erro
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`) // caso ocorra um erro especificamente dentro deste 'then', ele vai ser tratado pelo Erro interno.
    )
    .catch(err => console.log(`Erro Geral: ${err}`))

// se não colocado o .catch() o próprio Node trata o erro e devolve uma mensagem enorme.
// com o .catch(), retorna o erro da forma como eu coloquei.


// Tratamento de ERRO usando TRY e CATCH.

function funcionarOuNao2(valor, chanceErro) {
    return new Promise((resolve, reject) =>{
        try {
            if(Math.random() < chanceErro) {
                reject("Ocorreu um erro!")
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }        
    })
}

funcionarOuNao2('Testando...', 0.5) // se 10% de chance de erro, mais chances de imprimir 'testando...', se 90%, mais chande de resultar em erro
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`) // caso ocorra um erro especificamente dentro deste 'then', ele vai ser tratado pelo Erro interno.
    )
    .catch(err => console.log(`Erro Geral: ${err}`))
