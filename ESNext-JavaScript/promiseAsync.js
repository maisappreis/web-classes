// PROMISSES.
// Novo recurso do ECMAScript
// Uma premessa, quando se quer ter algum processamento assincromo.
// Dois caminhos mais comum: promessa cumprida, promessa rejeitada. Resolve OU Reject.
// Async & Await. transformar algo que parece Assincrono, em algo que parece Sincrono.(linha 98)

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {    // esse objeto "new Promisse" está recebendo uma callback que será chamada quando a promessa for atendida.
        setTimeout(() => {    // esse simula o tempo de esperar para ativar a promessa 'falar'
            resolve(frase)    // o resolve aceite apenas 1 único parâmentro.
        }, segundos * 1000)  // tempo é em milisegundos, então é segundos * 1000.
    })
}
falarDepoisDe(3, 'Que Legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
// .catch(e => console.log(e));    // aqui seria para tratar o erro, mas lá onde está 'resolve' precisaria estar 'reject'.


// Agora usando Callback para resolver um problema que seria mais facilmente resolvido por uma 'promise'.
// Foi dai que veio a motivação para criar este novo recurso 'promise'. 

const http = require('http'); // precisa importar os dados antes.

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''  // isso é uma string, JSON

        res.on('data', dados => {
            resultado += dados  // resultado vai sendo atribuindo aos dados que estão chegando.
        })

        res.on('end', () => {    // depois de todos os dados terem chegado
            callback(JSON.parse(resultado))  // converter JSON para objeto
        })
    })
}

// Callback Hell - de inferno kk

let nomes = []; // para obter a chamada de nomes dessas funções.
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`)) // .map() para extrair apenas nomes.
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `Turma B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `Turma C: ${c.nome}`))
            console.log(nomes)
        })
    })
})

// É callbanck dentro de callback. O promise resolve isso de forma mais simples e elegante.

// AGORA com o PROMISE

const getTurma2 = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''  
    
            res.on('data', dados => {
                resultado += dados  
            })
    
            res.on('end', () => {    
                try {
                    resolve(JSON.parse(resultado)) // caso tente fazer uma parse de algo que não é JSON, vai cair no erro 'reject(e)'
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes2 = []; 
getTurma2('A').then(alunos => {
    nomes2 = nomes2.concat(alunos.map(a => `Turma A: ${a.nome}`)) 
    getTurma2('B').then(alunos => {
        nomes2 = nomes2.concat(alunos.map(b => `Turma B: ${b.nome}`))
        getTurma2('C').then(alunos => {
            nomes2 = nomes2.concat(alunos.map(c => `Turma C: ${c.nome}`))
            console.log(nomes2)
        })
    })
})

// Agora usando Promise do jeito simples.

Promise.all([getTurma2('A'), getTurma2('B'), getTurma2('C')]) // com 1 única chamada, ele chama as 3, ps. dentro de array
    .then(turmas => [].concat(...turmas)) // agora as turmas ficaram em um único array // antes, cada turma estava em um array.
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
    
getTurma2('D').catch(e => console.log(e.message)); // Unexpected token < in JSON at position 0


// Async & Await. Transformar algo que parece Assincrono, em algo que parece Sincrono.
// A comunicação assíncrona é a transmissão de dados, geralmente sem o uso de um sinal de relógio externo,
// onde os dados podem ser transmitidos intermitentemente em um fluxo estável.
// Em comunicações síncronas, o emissor e o receptor devem estar num estado de sincronia antes da comunicação iniciar e permanecer
// em sincronia durante a transmissão. Ou seja, os dois precisam estar juntos e interagindo, independente de estarem no mesmo local
// ou não, durante o ato da comunicação.

// Novo recurso do ES8.
// Objetivo simplificar o uso de promise.

const getTurma3 = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''  
    
            res.on('data', dados => {
                resultado += dados  
            })
    
            res.on('end', () => {    
                try {
                    resolve(JSON.parse(resultado)) // caso tente fazer uma parse de algo que não é JSON, vai cair no erro 'reject(e)'
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}


// precisa marcar a função com a palavra 'async', a função 'await' só vai funcionar dentro de uma função marcada como 'Async'.

let obterAlunos = async () => {
    const turmaA = await getTurma3('A'); // muito mais SINCRONA dessa forma.
    const turmaB = await getTurma3('B');
    const turmaC = await getTurma3('C');
    return [].concat(turmaA, turmaB, turmaC); // retorna um objeto AsyncFunction.
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))