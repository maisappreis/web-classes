// Async & Await
// Atras do Async & Await tem que ter um 'promise'.

const { reject } = require("lodash")


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// await esperarPor(3000); // await is only valid in async functions and the top level bodies of modules

esperarPor(3000)
    .then(() => console.log('Execumento promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Execumento promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Execumento promise 3...'))
    .then(esperarPor)
    .then(() => console.log('Execumento promise 4...'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// Agora com o Async e Await
// Ele parece SINCRONO, mas é na verdade, ASSINCRONO. 

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async e Await ${valor}...`)

    await esperarPor(2500)
    console.log(`Async e Await ${valor + 1}...`)

    await esperarPor(3000)
    console.log(`Async e Await ${valor + 2}...`)
    
}

executar()

// Enqunto na primeira ele vai imprimindo 1 frase a cada 2 segundos.
// Com o ASYNC e SEM AWAIT ele espera o tempo de todas elas, pra depois imprimir todas as frases juntas ao mesmo tempo.
// Com o ASYNC e COM AWAIT, ele vai imprimindo uma após a outra conforme o tempo. Vai parecer que o código é SINCRONO, mas ele é ASSINCRONO.
// Você espera a resolução da anterior para resolver a proxima sem usar o método .then()

// ASSINCRONO, não depende do tempo, do relógio.






