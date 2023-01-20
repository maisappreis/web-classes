// Sobre o THIS.
// THIS e Função Bind.

// Uma forma de referênciar/acessar o objeto atual daquela execução.
// Ele acessa quem é o dono daquele código que está sendo executado ali.
// O THIS pode variar, conforme a forma que você chama a função. EXCETO quando você usar a função ARROW, ai ele fica fixo, sempre apontando para "Window".
// THIS, em outras linguagens "SELF".


//Na função normal, o THIS pode variar

function f1() {
    console.log(this === global) // TRUE. Esse "global" é igual a "window" no navegador.
}
f1();

// Na função ARROW (mais enxuta), o THIS não vai variar.

const f2 = () => console.log(this === global) // FALSE.
f2(); // Aqui deu FALSO, mas no navegador dá TRUE. Por que no Node cada arquivo representa um módulo, e essa função está escrita diretamente dentro de um arquivo.


// THIS e Função Bind.

const pessoa = {
    saudacao: "Bom dia!",
    falar() {                             // Recurso novo do ES2015. O atributo do objeto pode ser uma função.
            console.log(this.saudacao)    // O "this." está referenciando o valor dado ao atributo "saudação".
    }                                     // O "this" procura fora das {} pelo "saudacao". Sem ele ali, dá erro, ele não acha "saudacao".
}                                         // ele diz que a "saudacao" está indefinida.
pessoa.falar();

// É possível armazenar essa função "pessoa.falar()" em uma variável.
const falar = pessoa.falar;
falar(); // dá como indefinido, porque o "saudacao" já não aponta mais para o objeto "pessoa". Aponta para outro objeto que não tem o atributo "saudacao".
// Há um conflito entre o mundo da Programação Funcional e o mundo da Programação Orientada a Objeto. Conflito de Paradigmas.

// Para evitar isso, usamos o BIND, que é uma função difenrente, feita para amarrar o objeto.
// No BIND você passa um objeto que você quer que seja resolvido o THIS.
// Com o "bind" você amarra um objeto para ser o dono da execução.

const falarDePessoa = pessoa.falar.bind(pessoa)    // Aqui eu uso o BIND para apontar para o objeto "pessoa". Assim, o THIS será resolvido pra "pessoa".
falarDePessoa();


// Ainda sobre THIS e BIND. Estratégias para manter o THIS fixo, sem variar.

function pessoa2() {
    this.idade = 0;     // Com o "this." no momento que eu instanciar essa função, criar um objeto, eu vou ter o atributo "idade" a disposição para poder manipular ele.

    setInterval(function() {    // Essa função dispara uma outra função a partir de um intervalo que você passou. Aqui tem uma função dentro dos (), ou seja, como parâmentro de "setInterval".
        this.idade++;
        console.log(this.idade) // Todo esse treço é o parâmentro. "function() {this.idade++; console.log(this.idade)}, 1000"
    }, 1000)                    // Esse 1000 é em millisegundos, ou seja, 1 segundo. Ou seja, a cada 1000 milisegundos a função é disparada novamente.
}

// new pessoa2; // Ele não está apontando para a função "pessoa", mas sim para a função "setInterval".

// A correção disso seria usando o BIND.

function pessoa3() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade)
    }.bind(this))                  // Esse ".bind(this) depois do bloco da função anônima, que é parâmetro de "setInterval", amarrou a função "pessoa".
}
// Esse ".bind(this) amarrou a função "setInterval" à função "pessoa3".

// new pessoa3; (esse é quem chama a função para ser impressa)


// Agora usando o SELF.

function pessoa4() {
    this.idade = 0;

    const self = this           // Determina o THIS como uma constante, porque ai ele não vai variar.
    setInterval(function() {
        self.idade++;
        console.log(self.idade)
    })                  
}
// new pessoa4;