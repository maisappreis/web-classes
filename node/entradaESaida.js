// Dentro do Node tente-se algumas constantes, objetos que estão disponíveis globalmente.
// Como "__dirname", "global", "process".

// A partir do "process" também é possivel imprimir no console, e obter dados a partir do "process".
// Também é possível ler os parametros que foram passados qnd voce chamar uma aplicação em Node diretamente no terminal.


const anonimo = process.argv.indexOf('-a') !== -1; // 'argv' de argumento.
//console.log(anonimo);


// NO TERMINAL:
// PS C:\apps\aulasJavaScript\node> node entradaESaida.js -a
// true
// PS C:\apps\aulasJavaScript\node> node entradaESaida.js -b
// false

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // 'stdout' standart output = saída padrão. "\n" quebra de linha.
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {            // 'stdin' standart input = entrada padrão. Isso é acionado com o enter dado depois de informar o nome.
        const nome = data.toString().replace('\n', '') // substitui o 'enter' por nada. Tirou a quebra de linha.

        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}

// PS C:\apps\aulasJavaScript\node> node entradaESaida.js -a
// Fala Anônimo!

// PS C:\apps\aulasJavaScript\node> node entradaESaida.js
// Informe seu nome: Maisa
// Fala Maisa

