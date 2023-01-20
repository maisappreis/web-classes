

// let novoArray = umArray.filter(elemento => typeof elemento === "number");
// let chineses = umArray.filter(funcionario => funcionario.pais === "China");
// let novoArray = umArray.filter((numero, indice) => { const numeroPar = numero % 2 === 0; const indicePar = indice % 2 === 0);

// const resultado = chaves.map(chave => [chave, objetoW[chave]]);
// const apenasPrecos = produtosLoja.map(item => item.preco);
// const novoObjeto = objeto.map(parChaveValor => parChaveValor.reverse());


// let somaNumeros = array.forEach(numero => resultadoSoma += numero);
// let segundoMaiorNumero = arrAy.forEach(numero => { if (numero > segundoMaior) segundoMaior = numero });


// const resultadoSoma = array.reduce((numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual, 0);
// const somaPrecos = produtosLoja.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0);



console.log("-------------------------------------------- .filter() --------------------------------------------");

function retornarNumerosDoArray2(oArray) {
    return oArray.filter(elemento => typeof elemento === "number")
}
console.log(retornarNumerosDoArray2([5, "maisa", 6, true]));


function numeroIndicePares3(arrayX) {
    return arrayX.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;

        return numeroPar && indicePar
    })    
}
console.log(numeroIndicePares3([2, 8, 9, 4, 6]));


console.log("-------------------------------------------- .reduce() --------------------------------------------");

function somarArray4(array) {
    const resultadoSoma = array.reduce((numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual, 0) // creio que o 0

    return resultadoSoma
}
console.log(somarArray4([5, 2, 1]));

// Resumindo, o "reduce" reduz um array, pode ser em um único elemento, ou mais.
// .reduce pode possuir 4 parâmetros: valorAnterior(obrigatório), valorAtual(obrigatório), indice do atual(não obrig) e array original(não obrig).
// valorAnterior seria o elemento em [0] e valorAtual seria o elemento em [1], e ai vai caminhando pra frente,
// [0] e [1], depois [1] e [2], depois [2] e [3].... o numeroAnterior vai sendo o acumulador. 

// O método reduce() executa uma função de callback "redutora" fornecida pelo usuário em cada elemento do array,
// em ordem, passando o valor de retorno do cálculo no elemento anterior.
// O resultado final da execução do redutor em todos os elementos do array é um valor único.

function oReduce(arraY) {

    arraY.reduce((valorAnteriorEAcumulador, valorAtual, indiceDoAtual, arrayOriginal) => {

        console.log(`${valorAnteriorEAcumulador} total do acumulador.`); // Assume posição [0] inicialmente, e vai acumulando a soma dos anteriores.
        console.log(`${valorAtual} valor atual.`);        // é o valor atual que está sendo somado naquela rodada.
        console.log(`${indiceDoAtual} índice do atual.`); 
        console.log(`${arrayOriginal} array original`);   // permanece inalterado.

        return valorAnteriorEAcumulador += valorAtual
    })
}
oReduce([5, 2, 1, 6, 8]);


const produtosLoja2 = [
    { nome: "iPhone", categoria: "Eletrônico", preco: 6165.00 },
    { nome: "Tablet", categoria: "Eletrônico", preco: 654.00 },
    { nome: "Mouse", categoria: "Eletrônico", preco: 35.60 }
]

function despesasTotais3(produtosLoja2) {
    return produtosLoja2.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(despesasTotais3(produtosLoja2));


console.log("-------------------------------------------- .map() --------------------------------------------");


const objeto = {a: 1, b: 2, c: 3}

function objetoParaArray3(objeto) {
    const chaves = Object.keys(objeto);
    const resultado = chaves.map(chave => [chave, objeto[chave]]);

    return resultado
}
console.log(objetoParaArray3(objeto));

// .map() cria um novo array ao chamar uma função para cada elemento do array. Chama uma função uma vez para cada elemento em uma matriz.
// .map() não executa a função para elementos vazios. Não altera o array original.

const produtosLoja = [
    { nome: "iPhone", categoria: "Eletrônico", preco: 6165.00 },
    { nome: "Tablet", categoria: "Eletrônico", preco: 654.00 },
    { nome: "Mouse", categoria: "Eletrônico", preco: 35.60 }
]
const chaves = Object.keys(objeto);


function despesasTotais2(produtosLoja) {
    return produtosLoja
    .map(item => item.preco)  // mapeia o abributo "preco" e cria um novo array apenas com os preços do objeto: [ 6165, 654, 35.6 ]
    .reduce((acumulador, valorAtual) => acumulador + valorAtual) // aqui ele reduz o array de preços, somando todos os elementos.
}
console.log(despesasTotais2(produtosLoja));

const objetoY = {
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [10, 10, 10, 9]
    }

const soma = notas => notas.reduce((acumulador, atual) => acumulador + atual, 0)
const media = notas => soma(notas) / notas.length

const exemplo1 = chaves.map(chave => [chave, objeto[chave]]);
const exemplo2 = produtosLoja.map(item => item.preco); // mapeia o atributo "preco" do objeto "produtosLoja", e cria um array só com eles.
const exemplo3 = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())
const exemplo4 = Object.entries(objetoY).map( estudante => {
    const chave = 0,
    valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]) }
    })


// .map() cria um novo array ao chamar uma função para cada elemento do array. Chama uma função uma vez para cada elemento em uma matriz.
// .map() não executa a função para elementos vazios. Não altera o array original.
// Todos aqui tiveram apenas UM parâmentro. 
// E depois da => houveram funções curtas, de uma sentênça, e outras, funções mais longas.


console.log("-------------------------------------------- .forEach() --------------------------------------------");

function somarArray3(arrayY) {
    let resultadoSoma = 0;

    arrayY.forEach(numero => resultadoSoma += numero)
    return resultadoSoma
}
console.log(somarArray3([2, 4, 1]));


console.log("-------------------------------------------- .Math.X() --------------------------------------------");

const arrAy = [5, 6, 85, 94, 14, 75, 26, 12];

const maiorNumero = Math.max(...arrAy);
const menorNumero = Math.min(...arrAy);

const max = 10;
const min = 1;
const numeroSorteado = Math.floor(Math.random() * (max - min) + min); 


console.log("-------------------------------------------- .slice() --------------------------------------------");

const arrayY = [5, 4, 3, 2, 1];

function somarArray2(arrayY) {
    const quantidadeNumeros = arrayY.length;

    return (quantidadeNumeros === 0 ? 0 : arrayY[0] + somarArray2(arrayY.slice(1))) // ele vai fatiando, sempre cortando fora o primeiro elemento do array.
}
console.log(somarArray2(arrayY));

// aqui, ele vai somando o elemento da posição 0 do índice a cada nova chamada.
// o .slice vai, a cada nova chamada, tirando o elemento[0] anterior, e colocando o elemento[1], na posição [0] do índice. 

// O método .slice() (fatia) retorna elementos selecionados em um array, como um novo array.
// O método .slice() seleciona de um determinado início, até um determinado final (não inclusivo), por meio do índice.
// O método .slice() não altera o array original. Funciona com number e strings.

const myArray = ["Maisa", "Renan", "Mirian", "Lucas", "Pai", "Mãe"];

console.log(myArray.slice(0)); // Novo array criado. Nenhum elemento saiu.
console.log(myArray.slice(1)); // Novo array criado. Permaneceu do [1] em diante, elemento[0] saiu.
console.log(myArray.slice(2)); // Novo array criado. Permaneceu do [2] em diante, elementos[0] e [1] sairam.
console.log(myArray.slice(3, 5)); // Novo array criado. Permaneceu [3] e [4], o ultimo [5] NÃO é incluido.

console.log("-------------------------------------------- .splice() --------------------------------------------");


console.log("-------------------------------------------- .split() --------------------------------------------");



console.log("-------------------------------------------- .repeat() --------------------------------------------");

function simboloMais3(repeticao) {
    return "+".repeat(repeticao)
}
console.log(simboloMais3(10));

// "string".repeat(numeroDeRepeticoes)

console.log("-------------------------------------------- .fill() --------------------------------------------");

function repetirElemento2(elementos, numeroDeElementos) {
    return Array(numeroDeElementos).fill(elementos)
}
console.log(repetirElemento2("x", 5));

// Quando eu uso a palavra-chave "Array", ele cria um array, com o número de elementos e os elementos.
// Dentro de Array() fica o número de elementos.
// Dentro de fill() ficam os elementos.

function simboloMais2(repeticao, elementos, juntador) {
    return Array(repeticao).fill(elementos).join(juntador)
}
console.log(simboloMais2(10, "+", " | "));

// .fill contem de fato os elementos que serão repetidos pelo determinados numero de repetições.
// .join é apenas aquilo que vai "juntar" eles, que vai ficar entre esses elementos.


console.log("-------------------------------------------- .join() e .concat() --------------------------------------------");

function cumprimentar(nome) {
    const saudacao = "Olá";
    return [saudacao, nome].join(", ").concat("!");
}
console.log(cumprimentar("João"))

// .join - ele junta dois elementos usando um separador. Pode ser vígula, espaço, ou em branco, qqr coisa.

function simboloMais2(repeticao, elementos, juntador) {
    return Array(repeticao).fill(elementos).join(juntador)
}
console.log(simboloMais2(10, "+", " | "));

// .fill contem de fato os elementos que serão repetidos pelo determinados numero de repetições.
// .join é apenas aquilo que vai "juntar" eles, que vai ficar entre esses elementos.


console.log("-------------------------------------------- .sort() --------------------------------------------");

let numerosArray1 = [321, 54, 6, 78, 9, 584, 12];
    const ordemCrescente = numerosArray1.sort((a, b) => - b + a); // .sort((a, b) => - b + a); crescente
    console.log(ordemCrescente);

    const numerosArray2 = [321, 54, 6, 78, 9, 584, 12];
    const ordemDecrescente = numerosArray2.sort((a, b) => + b - a); // .sort((a, b) => + b - a); decrescente
  

   
    console.log(ordemDecrescente);

console.log("-------------------------------------------- .includes() --------------------------------------------");


console.log("-------------------------------------------- .replace() --------------------------------------------");


console.log("-------------------------------------------- .reverse() --------------------------------------------");



console.log("-------------------------------------------- .shift() .pop() --------------------------------------------");

function retornarPrimeiroUltimoElemento2(array1) {
    const primeiroElemento = array1.shift();   // .shift() acessa primeiro elemento de um array.
    const ultimoElemento = array1.pop();       // .pop() acessa ultimo elemento de um array.

    return [primeiroElemento, ultimoElemento]
}
console.log(retornarPrimeiroUltimoElemento2([5, 8, 9, 42, 16, 4, 49]));





console.log("--------------------------------- Object.entries() Object.values() Object.keys() -----------------------------------");

const objetoX = {
    nome: "Maisa",
    idade: 28,
    corCabelo: "Loiro",
    corOlho: "Azul"
}

function objetoParaArray(objetoX) {

    console.log(Object.entries(objetoX)); // [ [ chave1, valor1 ], [chave2, valor2 ] ]
    console.log(Object.values(objetoX)); // [ valor1, valor2 ]
    console.log(Object.keys(objetoX)); // [ chave1, chave2 ]
}
objetoParaArray(objetoX);


console.log("-------------------------------------------- cópia de objeto: Object.assign() --------------------------------------------");

function deletarPropriedadeDaCopiaDoObjeto(objetoZ, c) {
    const copiaDoObjetoZ = Object.assign({}, objetoZ) // nessa linha foi criada uma cópia do objeto usando o Object.assign
    delete copiaDoObjetoZ[c];                         // nessa linha foi deletada a propriedade "c" da cópia do objeto.
                                                      // o objeto de origem permanece inalterado.
    return copiaDoObjetoZ
}

console.log(deletarPropriedadeDaCopiaDoObjeto({ a: 1, b: 2, c: 3 }, "c"));

// .assign - Copia todas as propriedades enumeráveis de um ou mais objetos de ORIGEM para um objeto de DESTINO.
// .assign(destino, origem).
// .assign(target, source).

console.log("-------------------------------------------- cópia de objeto: {...objeto} --------------------------------------------");

const objY = { a: "eu", b: "amo", c: "você" };

function deletaPropriedade2(objY, c) {
    const copiaObjY = { ...objY };    // nessa linha foi criada uma cópia do objeto usando { ...objeto }
    delete copiaObjY[c]               // nessa linha foi deletada a propriedade "c" da cópia do objeto.

    return copiaObjY
}
console.log(deletaPropriedade2({ a: "eu", b: "amo", c: "você" }, "c"));


console.log("-------------------------------------------- cópia de array: {...array} --------------------------------------------");

function deletaElemento(arrayA, x) {
    let copiaArrayA = [...arrayA];    // nessa linha foi criada uma cópia do array usando [ ...array ]
    delete copiaArrayA[x]

    return copiaArrayA
}
console.log(deletaElemento([3, 5, 666, 4, 9, 5, 41], 2));

console.log("----------------------------------- FOR IN e FOR OF no ARRAY ----------------------------------- ");

let umArray = [3, 4, 5, 8, 9, 10];

for (let indice in umArray) {
    console.log(indice)          // o FOR IN retorna os ÍNDICES do ARRAY.
}

for (let elemento of umArray) {
    console.log(elemento)       // o FOR OF retorna os ELEMENTOS do ARRAY.
}

console.log("----------------------------------- FOR IN e FOR OF no OBJETO ----------------------------------- ");

let umObjeto = {
    nome: "Maisa",
    idade: 28,
    nacionalidade: "brasileira",

    [Symbol.iterator]: function* (){   // este treço é necessário para que o FOR OF funcione, e ache os VALORES do OBJETO.
        yield this.nome;
        yield this.idade;
        yield this.nacionalidade;
    }
}

for (let chave in umObjeto) {
    console.log(chave)        // o FOR IN retorna as CHAVES no OBJETO.
}

for (let valor of umObjeto) {
    console.log(valor)         // o FOR OF retorna os VALORES no OBJETO, porém, precisa da função [Symbol.iterator] acima.
}

console.log("----------------------------------- FOR OF em um ARRAY de OBJETOS ----------------------------------- ");

// FOR OF em um ARRAY de OBJETOS funciona normalmente, sem necessidade de função [Symbol.iterator].
// Porque se trata de um ARRAY, apenas de ser um ARRAY que contêm OBJETOS dentro.

const meusObjetos = [
    {nome: "Maisa", idade: 28},       // meuObjeto[0] - Cada objeto aqui, é um elemento do array. 
    {nome: "Renan", idade: 35},   // meuObjeto[1]
    {nome: "Mirian", idade: 27}       // meuObjeto[2]
]

for (let elemento of meusObjetos) {
    //console.log(elemento)          // imprime tudo.
    console.log(elemento.nome);       // acessa os valores da chave "nome".
    console.log(elemento.idade);     // acessa os valores da chave "idade".
}

console.log("----------------------------------- new Date() .getDate() ----------------------------------- ");

function checarAnoBissexto3(ano) {
    return new Date(ano, 1, 29).getDate() === 29;   // new Date(ano, mes, data)
}

console.log(checarAnoBissexto3(2020)); // true
console.log(checarAnoBissexto3(2021)); // false

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias

console.log(new Date(2022, 0, 25)); // 25-01-2022
// Os meses iniciam em 0, como em um índice. Janeiro é 0, Feverieiro é 1, Março é 2...