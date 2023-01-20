// Função Arrow. Sempre são anônimas, possuem 1 única sentênça de código.
// THIS dentro da Função ARROW é um THIS associado ao contexto que a função foi escrita. Não há variação de forma alguma.
// BIND dentro da Função ARROW. A função Arrow é mais forte para amarrar o "this" do que o "bind".
// Na função ARROW, usar o THIS para fixar o THIS. Na função tradicional, usar o BIND para fixar o THIS.
// Função Anônima. (linha 98)
// Funções Callback. (.forEach). Passar funções para outras função, que chamam de volta. (linha 135)
// Funções Construtoras. (linha 205) Serve de molde para criar/construir objetos.
// Tipos de Declarações de Funções. (linha 244). 1) Function declaration, 2) Function expression e 3) Named function expression.
// Contexto Léxico. (linha 268) A função carrega o contexto com que ela foi declarada/escrita. O lance da variável "local" e "global".
// Closure. (linha 285). Envolve função, e cria escopo que permite que a função acesse e manipule variáveis externas à ela.

//-----------------------------------------------------------------------------------------------------------------------

// Função dentro de uma variável.

let dobro = function (a) {
    return 2 * a
}

// São duas opções de escrever a ARROW, com o bloco {} e "return" OU sem nenhum.
// Essa opção abaixo é um exemplo COM parâmentro.

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a; // Aqui o "return" fica implícito.
dobro = (a) => 2 * a;

console.log(dobro(5));

console.log(dobro(3));
console.log(dobro(Math.PI)); // Aqui o parâmetro "a" é o valor de PI.


// Essa outra opção abaixo é um exemplo SEM parâmentro.

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" // pode ser escrita assim também. Esse "_" é o parâmetro.

console.log(ola());



// THIS dentro da Função ARROW.
// Usando o exemplo da aula anterior.
// A Função Arrow não deixa o THIS variar.

function pessoa2() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade)
    },1000)                  
}
// new pessoa2;


// BIND dentro da Função ARROW.
console.log("Testes THIS e BIND com Função normal....")

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global); // TRUE, global === this. No NODE o this aponta para o contexto global. Que no navegador também daria TRUE, sendo "this === window".
comparaComThis(this); // FALSE, aqui o "this" não é o "this".

const obj1 = {}
comparaComThis = comparaComThis.bind(obj1);
comparaComThis(global); // FALSE: o "obj1" agora é o "this" pra chamada dessa função.
comparaComThis(obj1); // TRUE: porque agora aponta para o objeto "obj1."

// Agora usando a Arrow Function ou Função Arrow.
console.log("Agora usanda a Arrow Function ou Função Arrow....")

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global); // FALSE: como essa função foi definida/escrita dentro de um módulo/arquivo do Node, não aponta mais para o global. O "dono" da função seria o próprio módulo.
comparaComThisArrow(module.exports); // TRUE: o ".this" é exatamente igual a "module.exports".
comparaComThisArrow(this); // TRUE, aqui o "this" é o "this".

// Agora usando o BIND dentro de uma Função Arrow.
console.log("Agora usando o BIND dentro de uma Função Arrow....")

comparaComThisArrow = comparaComThisArrow.bind(obj1)
comparaComThisArrow(obj1); //FALSE: A função Arrow é mais forte para amarrar o "this" do que o "bind". 

// CONCLUSÃO:
// Na função ARROW, usar o THIS para fixar o THIS.
// Na função tradicional, usar o BIND para fixar o THIS.



// Função Anônima.

const somaNumeros = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = somaNumeros) { // aqui são 3 parâmetros.
    console.log(operacao(a, b))
}

imprimirResultado(3, 4); // como não passou o 3º parâmetro, ele assume o "operação = somaNumeros". 
// Pensa assim, quem ele mandou imprimir? "operacao(a, b)". "Operação" jogou para "somaNumeros". Que jogou o "a, b" para "x, y".

imprimirResultado(3, 4, somaNumeros); // mesma coisa da anterior, mas chamando mais explicitamente.
imprimirResultado(3, 4, function (x, y) { // o 3º parâmetro é uma função tradicional também anônima.
    return x - y
});
imprimirResultado(3, 4, (x, y) => x * y); // o 3º parâmetro é uma função Arrow.


// Função Anônima dentro de objeto.

const pessoa = {
    falar: function () {
        console.log("Olá, pessoa.")
    }
}
pessoa.falar(); // acessa a função chamando o nome do "objeto.atributo" / "objeto.chave" do objeto.

const pessoaX = {
    falar() {                        // Também poderia ser desse jeito aqui, retirar o ": function".
        console.log("Olá, você.")
    }
}
pessoaX.falar();


// Funções Callback. (.forEach)
// Você passa uma função, pra outra função, e quando determinado evento acontecer, essa determinada função vai ser chamada de volta.
// Pode ser chamada várias vezes, ou apenas 1x. Depende do contexto.

/* Exemplo 1 de Callback.*/ console.log("Exemplo 1 de Callback....")

const fabricantes = ["Mercedes", "Audi", "MBW"];

function imprimirLista(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)   // Aqui o "indice + 1" é para contagem inicia em 1.
}

fabricantes.forEach(imprimirLista);    // imprime a lista com o índice na frente.
// o "forEach" é uma função de "fabricantes", e "fabricantes" é um array. Então dentro do array você tem essa função "forEach".
// e eu quero que para cada elemento do array, ele chame a função "imprimirLista".
// Ele chama o array.forEach, e o parâmentro é o nome da função.

fabricantes.forEach(function(a) {
    console.log(a)
}); // imprimiu a lista sem o índice. Exemplo com função tradicional.
 
fabricantes.forEach(b => console.log(b)); // imprimiu a lista sem o índice. Exemplo com função arrow.

// ele vai chamando de volta cada elemento encontrado no array.


// Objetivo exercício: gerar novo array com todas as notas menores que 7.
/* Exemplo 2 SEM Callback.*/ console.log("Exemplo 2 SEM Callback....")

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

let notasBaixas = [];
for (let i in notas) {
    if(notas[i] < 7) {              // Esse "notas[i]"" se refere aos elementos do array.
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas); // [ 6.5, 5.2, 3.6 ]

/* Exemplo 2 de Callback.*/ console.log("Exemplo 2 COM Callback....");

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})  // a função ".filter" vai filtrar os elementos de um array, em cima de um critério.
// Será uma função Callback TRUE or FALSE. Se retorna TRUE, significa que aquele elemento deve ser adicionado no array que está sendo gerado.

console.log(notasBaixas2); // [ 6.5, 5.2, 3.6 ]

/* Exemplo 2 COM Callback e COM Função ARROW.*/ console.log("Exemplo 2 COM Callback e COM Função ARROW....");

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3); // [ 6.5, 5.2, 3.6 ]

// OU AINDA

const notasMenorQue7 = nota => nota < 7; // cria uma constante com a Função Array.
const notasBaixas4 = notas.filter(notasMenorQue7); 
console.log(notasBaixas4);

/* Exemplo COM Callback no BROWSER. */ console.log("Exemplo COM Callback no BROWSER....");

//document.getElementsByTagName("body")[0].onclick = function (e) {
    //console.log("O evento ocorreu....")}


// isso é uma função, que retorna um array, e para acessar somente um indice do array, ele coloca [].
// esse ".onclick" seria o evento, no caso aqui, o click do mouse. Que quando clicado, retorna o console.log.
// Só funciona no browser.


/* Funções Construtoras. */ console.log("Funções Construtoras....");

function carro(velocidadeMaxima = 200, delta = 5) {    // são 2 parâmentros, e ambos possuem valores padrão para caso não sejam fornecidos novos valores posteriormente.
    // A LET abaixo é um atributo privado, que pertence apenas ao escopo desta função.
    let velocidadeAtual = 0;

    // Método público. O "this" faz isso se tornar público, ou seja, visível fora do escopo/bloco desta função.
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    } else { 
        velocidadeAtual = velocidadeMaxima
    }

    // Método público. Se trocar o "this" por "let" ou "const", se torna privada/local.
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
}
// Essa função acima é uma função construtora, ela serve de molde para criar os objetos abaixo.
// Em outras linguagens se usaria uma Classe para fazer isso.

const uno = new carro; // o operador "new" cria uma nova instancia, cria um objeto, função construtora. Pode ser COM parenteses "new carro()", porque é uma função.
uno.acelerar();
console.log(uno.getVelocidadeAtual()); // 5

const ferrari = new carro(350, 20);
ferrari.acelerar();
ferrari.acelerar(); // quando mais eu chamo a função "acelerar", maior o "getVelocidadeAtual".
console.log(ferrari.getVelocidadeAtual()); // 40

// Isso é Programação Orientada a Objetos.

console.log(typeof carro); // Carro é Função. Por isso usar os parenteses "new carro()". Senão usados, ele pega os parâmetros padrão.
console.log(typeof ferrari); // Ferrari é objeto, ele foi criado/instanciado a partir do "new".



/* Tipos de Declarações de Funções */ console.log("Tipos de Declarações de Funções...."); // Function declaration, Function expression e Named function expression.

// Tipo 1: Function declaration (forma tradicional de declarar função).
// Apenas esse tipo 1 tem a vantagem que o JS joga essas funções para cima de toda a sequência de código.
// Ou seja, eu poderia escrever um "console.log" com o resultado dela, em cima dela, sem erros..

function somaZ(x, y) {
    return x + y
}

// Tipo 2: Function expression (a função como valor de uma variável).

const variavel = function (x, y) {
    return x - y
}

// Tipo 3: Named function expression (uma mistura das anteriores, tem uma variável que armazena o valor dela, e ela não é anônima).
// Menos utilizada.

const variavel2 = function nome(x, y) {
    return x * y
}


/* Contexto Léxico. */ console.log("Contexto Léxico....");
// A função carrega o contexto com que ela foi declarada/escrita.  

const valorDaVariavel = "Global";

function minhaFuncao() {
    console.log(valorDaVariavel)
}

function exec() {
    const valorDaVariavel = "Local";
    minhaFuncao()  // Essa função aqui carrega o contexto do local onde ela foi definida, ou seja, ali de cima.
}

exec(); // Acessou GLOBAL.


/* Closure. */ console.log("Closure....");
// Closure. Vem de fechamento, envolver algo.
// É o escopo criado quando uma função é declarada.
// Esse escopo permite que a função acesse e manipule variáveis externas à função.
// É o contexte léxico em ação.


const x = "Global";

function fora() {
    const x = "Local";
    function dentro() {
        return x          // Função dentro de função. Esse "x" remete ao "local".
    }
    return dentro         // Aqui, a função "fora" retornará a função "dentro".
}

const minhaFuncao2 = fora();
console.log(minhaFuncao2()); // Acessou LOCAL.

