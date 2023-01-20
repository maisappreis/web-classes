// ARRAY
// O array é, na verdade, um objeto. E um objeto é uma função. Estrutura dinâmica.
// No JS o array pode ser heterogênio, ou seja, suporta numero, string, null, bloolean, undefined. Mas não é uma boa prática.
// Elementos do Array podem ser modificados, mesmo se declarado com o "const". O array é constante, mas os elementos não.

// Métodos Array. (linha 64)
// Métodos para percorrer um Array: forEach, map, filter, reduce.
// forEach (linha 107)
// MAP (linha 146)
// Filter (linha 229)
// Reduce (linha 279)
// Imperativo x Declarativo. (linha 339)
// Código Imperativo x Declarativo. (linha 340)
// Concatenar usando .concat (linha 372)
// FlatMap (linha 388)

// SITE com informações das funcionalidades do JS: https://developer.mozila.org

console.log(typeof Array, typeof new Array, typeof []);

// Forma não literal de criar Array.

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

// Notação literal. Mais recomendada.

aprovados = [ 'Bia', 'Carlos', 'Ana' ];
console.log(aprovados[0]);
console.log(aprovados[2]);

// Adicionando novo elemento.

aprovados[3] = 'Paulo'; // assim adiciona, mas desse jeito é mais comum para substituir algum que já existe.
aprovados.push('Maisa')  // o .push é mais apropriado para adicionar.

console.log(aprovados);
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // existem, mas ficam como undefined, estão vazio/empty


// Ordenando o Array.

aprovados.sort();
console.log(aprovados); // no caso das strings, em ordem alfabética.

// deletando elementos do Array.
// deletar não reordena os elementos.

delete aprovados[3];
console.log(aprovados[3]); // o delete deixa o array vázio, ele ainda existe, mas não tem nada lá, undefined.

// Função .splice
// Também adiciona elementos, também remove elementos, e para fazer os 2 ao mesmo tempo.
// Aqui ele reordena os elementos deletados.

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1);   // trabalha a partir do elemento[1], e deletou elemento[1].
console.log(aprovados);

aprovados.splice(1, 2);
console.log(aprovados);  // trabalha a partir do elemento[1], e deletou elemento[1] e [2]. 

aprovados.splice(1, 2, 'Maisa', 'João'); // trabalha a partir do elemento[1], e deletou elemento[1] e [2]. E adicionou mais 2 elementos.
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 0, 'Maisa', 'João'); // trabalha a partir do [1], não deletou ningm. E adicionou mais 2 elementos a partir de [1].
console.log(aprovados);

console.log("----------------------------------------------------------")

// Métodos Array.

const frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi'];
console.log(frutas);

frutas.pop(); // deleta o ULTIMO elemento do array.
console.log(frutas); 

frutas.shift(); // deleta o PRIMEIRO elemento do array.
console.log(frutas);

frutas.push('Melancia'); // adiciona um elemento na ULTIMA posição do array.
console.log(frutas);

frutas.unshift('Maracuja'); // adiciona um elemento na PRIMEIRA posição do array.
console.log(frutas);

const algumasFrutas1 = frutas.slice(2); // retorna um novo array a partir de [2]. Ele fatia, pega um pedaço do array.
console.log(algumasFrutas1);

const algumasFrutas2 = frutas.slice(1, 3); // fatiou a partir de [1], incluindo [1], até [3], excluindo [3].
console.log(algumasFrutas2); 

// Simulando um Array com Objeto.
// É apenas uma curiosidade, não vai usar isso, faz um array normal que é mais útil.

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'};
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray);

console.log("----------------------------------------------------------")

// Métodos para percorrer um Array.

// forEach
// dentro do forEach, existe um laço FOR, então ele chama a função, para cada elemento.

const lista = ['Aldo', 'Maira', 'Adri', 'Renan'];

// função tradicional.
// O índice deve ser o segundo parâmetro e o terceiro parâmetro deve ser o próprio Array.
// Você pode não colocar eles, mas se colocar, essa é a ordem.
lista.forEach(function(nome, indice, array)  {    // a cada novo elemento que for percorrido, ele vai chamar a função de callback, passando o prórpio elemento e seu índice (que são os 2 parâmenotos).
    console.log(`${indice + 1}) ${nome}`)  // indice mais 1, para a contagem iniciar em 1
    console.log(array)
})

// função in line => arrow
lista.forEach(nome => console.log(nome)); // função arrow, com único parâmentro, o nome.

// função armazenada em uma variável.
const exibirLista = lista => console.log(lista); 
lista.forEach(exibirLista); 

console.log("--------------Implementando nosso próprio forEach------------------------")
// forEach2 é uma função criada por mim, não uma função pronta do JS.

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)     // o elemento, o índice do elemento, e o array
    }
}

const lista2 = ['Aldo', 'Maira', 'Adri', 'Renan'];

lista2.forEach2(function(nome, indice, array)  {   
    console.log(`${indice + 1}) ${nome}`)  
    console.log(array)
})

console.log("-----------------------MAP-----------------------")

// MAP
// há um laço, que será executado. Serve para criar um NOVO ARRAY TRANSFORMADO.
// Mapeia um array, para um outro/novo array do mesmo tamanho, mas com os dados transformados.
// o MAP é o FOR com um propósito. MAP tem o FOR internamente.

// Passa uma função callback para o MAP, que pode receber 3 parâmentros. O elemento, o índice do elemento, e o array completo.

const arrayInicial = [1, 2, 3, 4, 5, 6];

let novoArray = arrayInicial.map(function(e) { // aqui ele passou apenas 1 parâmetro, o elemento
    return e * 2
})

console.log(novoArray); // criou um NOVO ARRAY TRANSFORMADO, agora todos os elementos com o dobro dos valores do array anterior.
console.log(arrayInicial); // o array anterior permanece o inalterado. 


// Agora ficar chamando MAP em cima de cada array já transformado pelo MAP.

const soma10 = e => e + 10; // tenho uma função, que recebe o elemento, e que soma 10 ao elemento.
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

// parseFloat analisa um argumento de uma string, e retorna um numero de ponto flutuante.
// Ele chama o MAP em cima de cada novo array mapeado.
// transformações sucessivas.

novoArray = arrayInicial.map(soma10).map(triplo).map(paraDinheiro)
console.log(novoArray); // ficou no formato de string porque foi colocado em um templete string ``, entre as crases.


// Abaixo é um array no formato JSON.

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar Array apenas com preços usando MAP.
// primeiro MAP chama o JSON.parse para transformar as strings em objetos. Texto em Objeto.
// segundo MAP recebe objeto como entrada, e retorna apenas o preço.

// .parse (interpreta uma string ou conjunto de caracteres, fazendo com que o conteúdo dentro dela seja lido e interpretado corretamente no nosso computador.)

const paraObjeto = json => JSON.parse(json); // converte texto/strings em objeto. JSON é texto, é string.
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

console.log("--------------Implementando nosso próprio .map------------------------")
// map2 é uma função criada por mim, não uma função pronta do JS.
// isso é apenas para entender o funcionamento interno do MAP, e do forEach no anterior.


Array.prototype.map2 = function(callback) {
    const novoArray2 = [];
    for (let o = 0; o < this.length; o++) {     // percorre o Array original usando o "this"
        novoArray2.push(callback(this[o], o, this))
    }
    return novoArray2
}

const carrinho2 = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

const paraObjeto2 = json => JSON.parse(json); // converte texto/strings em objeto. JSON é texto, é string.
const apenasPreco2 = produto2 => produto2.preco;

const resultado2 = carrinho2.map2(paraObjeto2).map2(apenasPreco2);
console.log(resultado2);

// Filter
// Outra maneira de percorrer um array. Ele filtra um array baseado em algum critério.
// Normalmente, o novo array gerado é menor do que o array original, justamente porque houve esse filtro.
// Quando na condição retorna TRUE, esse elemento vai como o novo array criado.

const produtos = [
    { nome: 'Notebook', preco: 2600, fragil: true },
    { nome: 'iPad', preco: 1560, fragil: true },
    { nome: 'Copo de vidro', preco: 12.50, fragil: true },
    { nome: 'Copo de pláscico', preco: 2.85, fragil: false },
]

console.log(produtos.filter(function(p) {
    return p.preco > 1500
}))

const precoAcima1700 = p => p.preco > 1700;
const fragilTrue = p => p.fragil == true; // não precisa nem colocar o "== true", porque ele ja retorna true or false.

resultadoProdutos = produtos.filter(precoAcima1700).filter(fragilTrue);
console.log(resultadoProdutos)

console.log("--------------Implementando nosso próprio .filter------------------------")
// .filter2 é uma função criada por mim, não uma função pronta do JS.

Array.prototype.filter2 = function(callback) {
    const novoArrayProdutos = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { // esse "if" aqui, é se ele retornar TRUE.
            novoArrayProdutos.push(this[i]) 
        }
    }
    return novoArrayProdutos
}

const produtos2 = [
    { nome: 'Notebook', preco: 2600, fragil: true },
    { nome: 'iPad', preco: 1560, fragil: true },
    { nome: 'Copo de vidro', preco: 12.50, fragil: true },
    { nome: 'Copo de pláscico', preco: 2.85, fragil: false },
]

const precoAcima17002 = p2 => p2.preco > 1700;
const fragilTrue2 = p2 => p2.fragil;

resultadoProdutos2 = produtos2.filter2(precoAcima17002).filter2(fragilTrue2);
console.log(resultadoProdutos2)

console.log("-----------------------REDUCE------------------------")

// Reduce
// Serve para criar um novo array, com base em um array inicial, fazendo coisas como:
// Varios elemento viram 1 elemento só, um array em um number, um array em uma string. Ele tem uma ideia de agregação.

const estudantes = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(estudantes.map(a => a.nota)); // imprime um array só com as notas.

const resultadoEst = estudantes.map(a => a.nota).reduce(function(acumulador, atual) { // esse "atual" é o elemento, além dele, pode ser passado o índice e o array.
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // Aqui onde está o 0 eu posso passar qualquer VALOR INICIAL para ser adicionado nesse calculo. Ou não passar nada.

console.log(resultadoEst); // foi o resultado da soma de todas as notas.


const estudantes2 = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// 1. Todos os estudantes são bolsistas?
// Antes do REDUCE, eu vou ter que usar o MAP

const todosBolsistas = (result, bolsista) => result && bolsista;
console.log(estudantes2.map(a => a.bolsista).reduce(todosBolsistas)); // false

// 2. Algum estudante é bolsista?

const algumBolsista = (result, bolsista) => result || bolsista;
console.log(estudantes2.map(a => a.bolsista).reduce(algumBolsista)); // true


console.log("---------------------Implementando nosso próprio .reduce------------------------")
// .reduce2 é uma função criada por mim, não uma função pronta do JS.


Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]  // como o acumulador vai ser o i=0, no FOR o i vai iniciar em 1.
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const somaN = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(somaN, 21));


console.log("----------------------Código Imperativo x Declarativo------------------------")

// Código Imperativo x Declarativo.

const osAlunos = [
    { nome: 'Maria', nota: 7.9 },
    { nome: 'Pedro', nota: 9.2 }
]

// Imperativo
let total1 = 0;
for (let i = 0; i < osAlunos.length; i ++) {
    total1 += osAlunos[i].nota
}
console.log(total1 / osAlunos.length)

// No imperativo, o "como deve ser feito" é mais importante. Os detalhes do passo a passo.


// Declarativo
const getNota = osAlunos => osAlunos.nota;
const somaNotas = (total, atual) => total + atual;

const total2 = osAlunos.map(getNota).reduce(somaNotas);
console.log(total2 / osAlunos.length);

// Na declarativa, o "o que tem que ser feito" é mais importante. O "como é feito" está internamente no MAP, no REDUCE.
// A declarativa é mais interessante, porque partes dela podem ser reutilizadas em outros contextos.
// Ela é mais bem dividida. É mais do paradigma funcional.

console.log("---------------------- .concat ------------------------")

// Concatenar usando .concat

const filhas = ['valenska', 'Cibalena'];
const filhos = ['Uoxinton', 'Uelislei'];
let todos = filhas.concat(filhos);
console.log(todos, filhas, filhos);

todos = filhas.concat(filhos, 'Fulano');
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // array, array, elemento, matriz | todos eles foram concatenados no array vazio []
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));
console.log([100, 200].concat([1, 2], [3, 4], 5, [[6, 7]]));


console.log("---------------------- FlatMap ------------------------")

// FlatMap
// É uma MAP associado com o CONCAT.
// Não existe nativamente na API do JS.

const escola = [{      // é um array, em que os elementos são objetos, com seus atributos chave/valor.
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1)

// resultou em um array, com dois arrays dentro, e cada array, 2 elementos dentro.
// fica array dentro de array

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])); // Assim, ficam em 1 único array.

// A ideia do FlatMap é conseguir esse array único.

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);



