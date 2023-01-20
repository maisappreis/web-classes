
// Tratamento de ERRO com o Async e Await.

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min // Math.floor ou parseInt para ter um numero inteiro.
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido.')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qntNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (let _ of Array(qntNumeros).fill()) { // Ele vai criar um array com x números de elementos, todos como 'undefined', pq o .fill() tá vazio.
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) {
            throw `Que Chato!`
        } else {
            return gerarMegaSena(qntNumeros, tentativas + 1)
        }   

    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// o AWAIT vai na frente da função que retorna uma PROMISE.
// Existe um tratamento de erro na função 'gerarNumeroEntre', mas também pode ser um tratamento em 'gerarMegaSena'.

