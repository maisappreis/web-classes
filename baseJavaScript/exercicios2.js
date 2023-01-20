

console.log("----------------------------------- Execício 01 - Opção 1 -----------------------------------");

// Função tradicional

function concatenar1(nome1) {
    return `Olá, ${nome1}!`
}
console.log(concatenar1("Maisa"));

// Função arrow com {} e "return"

let concatenar2 = nome2 => {
    return `Olá, ${nome2}!`
}
console.log(concatenar2("Renan"));

// Função arrow uma linha, sem {} e sem "return"

let concatenar3 = (nome3) => "Olá, " + nome3 + "!";
console.log(concatenar3("Ana"));

let concatenar4 = nome4 => console.log(`Olá, ${nome4}!`);
concatenar4("João");

console.log("----------------------------------- Execício 01 - Opção 2 -----------------------------------.join .concat");

function cumprimentar(nome) {
    const saudacao = "Olá";
    return [saudacao, nome].join(", ").concat("!");
}
console.log(cumprimentar("João"))

// .join - ele junta dois elementos usando um separador. Pode ser vígula, espaço, ou em branco, qqr coisa. 

console.log("----------------------------------- Execício 02 -----------------------------------");

// Função tradicional 1

function anosEmDias(anos) {
    return anos * 365
}

console.log(anosEmDias(25));

// Função tradicional 2

function anosEmDias3(anos) {
    const diasDoAno = 365;
    return anos * diasDoAno
}

console.log(anosEmDias3(28));

// Função ARROW

let anosEmDias2 = (anos) => anos * 365;

console.log(anosEmDias2(70));

console.log("----------------------------------- Execício 03 -----------------------------------");

// Tradicional:

function calcularSalario(horas, valorHora) {
    const imposto = 0.3;
    const salarioBruto = horas * valorHora;
    const salarioLiquido = salarioBruto - (salarioBruto * imposto);

    return `Salário líquido de R$ ${salarioLiquido}`
}
console.log(calcularSalario(150, 40.5));

// ARROW

let calcularSalario1 = (horas, valorHora) => horas * valorHora;
console.log(calcularSalario1(150, 40.5));

let calcularSalario2 = (horas, valorHora) => console.log(horas * valorHora);
calcularSalario2(150, 40.5);

let calcularSalario3 = (horas, valorHora) => {
    return horas * valorHora
}
console.log(calcularSalario3(150, 40.5));


console.log("----------------------------------- Execício 04 - Opção 1 -----------------------------------");


function saberMes(mes) {
    switch (mes) {
        case 1:
            console.log("Janeiro");
            break
        case 2:
            console.log("Fevereiro");
            break
        case 3:
            console.log("Março");
            break
        case 4:
            console.log("Abril");
            break
        case 5:
            console.log("Maio");
            break
        case 6:
            console.log("Junho");
            break
        case 7:
            console.log("Julho");
            break
        case 8:
            console.log("Agosto");
            break
        case 9:
            console.log("Setembro");
            break
        case 10:
            console.log("Outubro");
            break
        case 11:
            console.log("Novembro");
            break
        case 12:
            console.log("Dezembro");
            break
        default:
            console.log("Mês inválido.");

    }
}
saberMes(0);
saberMes(1);
saberMes(2);
saberMes(4);
saberMes(5);
saberMes(6);
saberMes(8);
saberMes(10);
saberMes(12);
saberMes(13);

console.log("----------------------------------- Execício 04 - Opção 2 ----------------------------------- [--i] ");

function saberMes2(mes) {
    const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return mapeamento[--mes]
}
// mapeamento[--mes] está acessando os elementos do array => array[i]
// [--mes] === [mes - 1] que seria diminuir 1 do índice para ele iniciar a contagem de 1, e não de 0.
// Assim como ++i vai adicionando 1 unidade no índice para percorre-lo, --i vai subtraindo 1 unidade no índice para percorre-lo.
// E porque é [--mes] e não [mes--]. Porque se for [mes--] ele acessa o índice fornecido antes mesmo de descontar 1 unidade. Ai o índice inicia em 0.
// Precisamos que primeiro ele subtraia 1, e depois acesse o índice, por isso é [--mes].

console.log(saberMes2(2));
console.log(saberMes2(5));

console.log("----------------------------------- Execício 05 ----------------------------------- typeof ");

function comparaNumeros(n1, n2) {
    if (typeof n1 != typeof n2) {
        return false
    } else {
        return n1 >= n2
    }
}
console.log(comparaNumeros(2, 3));
console.log(comparaNumeros(3, 2));
console.log(comparaNumeros(3, 3));
console.log(comparaNumeros("maisa", 6));

console.log("----------------------------------- Execício 06 - Opção 1 -----------------------------------");


function retornaInverso(valor) {

    if (isNaN(valor)) {
        return `Booleano ou número são esperados, mas o parâmetro é do tipo ${typeof valor}.`
    } else if (valor === true) {
        return false
    } else if (valor === false) {
        return true
    } else if (valor == valor) {
        return -(valor)
    } else if (valor == -(valor)) {
        return valor
    }
}
console.log(retornaInverso(true)); // false
console.log(retornaInverso(false)); // true
console.log(retornaInverso(20)); // -20
console.log(retornaInverso(-20)); // 20
console.log(retornaInverso("Maisa")); // Booleano ou número são esperados, mas o parâmetro é do tipo string.

console.log("----------------------------------- Execício 06 - Opção 2 ----------------------------------- typeof ");

function retornaInverso2(valor) {
    const tipo = typeof valor;

    if (tipo == "boolean") {
        return !valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return `Booleano ou número são esperados, mas o parâmetro é do tipo ${typeof valor}.`
    }
}
console.log(retornaInverso2(true)); // false
console.log(retornaInverso2(false)); // true
console.log(retornaInverso2(20)); // -20
console.log(retornaInverso2(-20)); // 20
console.log(retornaInverso2("Maisa")); // Booleano ou número são esperados, mas o parâmetro é do tipo string.

console.log("----------------------------------- Execício 07 - Opção 1 -----------------------------------Não entendi o exercício");

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50));

console.log("----------------------------------- Execício 07 - Opção 2 -----------------------------------Não entendi o exercício");

function estaEntre2(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre2(10, 100, 50));

console.log("----------------------------------- Execício 08 - Opção 1 -----------------------------------");


function multiplicar(valor, multiplicador) {
    let resultado = 0;

    for (let contador = 1; contador <= multiplicador; contador++) {
        resultado += valor

    }
    return resultado
}
console.log(multiplicar(5, 3));
console.log(multiplicar(1, 5));

console.log("----------------------------------- Execício 08 - Opção 2 ----------------------------------- ");

function multiplicar2(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) { return 0}
    else {
        return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador - 1)
    }
}
console.log(multiplicar2(5, 3)); // Essa é exatamente o lance do 5 + 5 + 5. O numero somado no número de vezes do multiplicador.
console.log(multiplicar2(10, 2)); // Seria o 10 + 10. 
console.log(multiplicar(1, 5)); // Ele faria 1 + 1 + 1 + 1 + 1 (loop de 5 voltas) Ao inves de fazer 1x o 5. Ele vai fazer 5x o 1.

console.log("----------------------------------- Execício 08 - Opção 3 -----------------------------------");

function multiplicar3(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) { return 0 }

    const menorNumero = Math.min(numeroA, numeroB);
    const maiorNumero = Math.max(numeroA, numeroB);

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ? numero : numero + multiplicarRecursivamente(numero, multiplicador - 1)
        )
    }
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}
console.log(multiplicar3(55, 2));

// Nesse algorítimo, garante-se que o numero menor seja o multiplicador, reduzindo as chamadas resulsivas, diminuindo os ciclos de LOOP.


console.log("----------------------------------- Execício 09 - Opção 1 -----------------------------------");


function repetirElemento(elemento, vezes) {
    let meuArray = [];

    for (let i = 0; i < vezes; i++) {
        meuArray.push(elemento)
    }
    return meuArray
}
console.log(repetirElemento(7, 3));
console.log(repetirElemento("Maisa", 3));

console.log("----------------------------------- Execício 09 - Opção 2 ----------------------------------- Array .fill");

function repetirElemento2(elementos, numeroDeElementos) {
    return Array(numeroDeElementos).fill(elementos)
}

console.log(repetirElemento2("x", 5));

// Quando eu uso a palavra-chave "Array", ele cria um array, com o número de elementos e os elementos.
// Dentro de Array() fica o número de elementos.
// Dentro de fill() ficam os elementos.

console.log("----------------------------------- Execício 10 - Opção 1 -----------------------------------");


function simboloMais(repeticao) {
    let resultado = "";

    for (let i = 1; i <= repeticao; i++) {
        resultado += "+"
    }
    return resultado
}
console.log(simboloMais(3));
console.log(simboloMais(10));

console.log("----------------------------------- Execício 10 - Opção 2 ----------------------------------- Array .fill .join ");

function simboloMais2(repeticao, elementos, juntador) {
    return Array(repeticao).fill(elementos).join(juntador)
}
console.log(simboloMais2(10, "+", " | "));

// .fill contem de fato os elementos que serão repetidos pelo determinados numero de repetições.
// .join é apenas aquilo que vai "juntar" eles, que vai ficar entre esses elementos.

console.log("----------------------------------- Execício 10 - Opção 2.1 ----------------------------------- Array .fill .join ");

function fazerMontanha(repeticao) {

    return Array(repeticao).fill("/'''").join("\\____")
}

console.log(fazerMontanha(9))

console.log("----------------------------------- Execício 10 - Opção 3 ----------------------------------- .repeat ");

function simboloMais3(repeticao) {
    return "+".repeat(repeticao)
}
console.log(simboloMais3(10));

// "string".repeat(numeroDeRepeticoes)

console.log("----------------------------------- Execício 11 - Opção 1 ---------------------------------- ");

let array1 = [3, 5, 9, 7, 3.5, "Olá"]

function retornarPrimeiroUltimoElemento(array1) {
    let novoArray = [];
    const indiceDoPrimeiro = 0;
    const indiceDoUltimo = array1.length - 1;
    novoArray.push(array1[indiceDoPrimeiro]);
    novoArray.push(array1[indiceDoUltimo]);

    return novoArray
}
console.log(retornarPrimeiroUltimoElemento(array1));

console.log("----------------------------------- Execício 11 - Opção 2 ---------------------------------- .shift .pop ");

function retornarPrimeiroUltimoElemento2(array1) {
    const primeiroElemento = array1.shift();   // .shift() acessa primeiro elemento de um array.
    const ultimoElemento = array1.pop();       // .pop() acessa ultimo elemento de um array.

    return [primeiroElemento, ultimoElemento]
}
console.log(retornarPrimeiroUltimoElemento2(array1));

console.log("----------------------------------- Execício 11 - Opção 3 ---------------------------------- .pop ");

function retornarPrimeiroUltimoElemento3([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop();

    return [primeiroElemento, ultimoElemento]
}

console.log(retornarPrimeiroUltimoElemento3([5, 6, 8, 90, "peixe"]));

console.log("----------------------------------- Execício 12 - Opção 1 ------------------------------ cópia de objeto:  Object.assign ");

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

console.log("----------------------------------- Execício 12 - Opção 2 ----------------------------------- cópia de objeto {...objeto} ");

const objY = { a: "eu", b: "amo", c: "você" };

function deletaPropriedade2(objY, c) {
    const copiaObjY = { ...objY };    // nessa linha foi criada uma cópia do objeto usando { ...objeto }
    delete copiaObjY[c]               // nessa linha foi deletada a propriedade "c" da cópia do objeto.

    return copiaObjY
}
console.log(deletaPropriedade2({ a: "eu", b: "amo", c: "você" }, "c"));

console.log("----------------------------------- Execício 12 - Opção 2.1 ----------------------------------- cópia de array [...array] ");

function deletaElemento(arrayA, x) {
    let copiaArrayA = [...arrayA];    // nessa linha foi criada uma cópia do array usando [ ...array ]
    delete copiaArrayA[x]

    return copiaArrayA
}
console.log(deletaElemento([3, 5, 666, 4, 9, 5, 41], 2));


console.log("----------------------------------- Execício 13 - Opção 1 -----------------------------------for of | typeof ");

const oArray = [1, "m", 54, "olá", 7];

function retornarNumerosDoArray(oArray) {
    const arrayDeNumeros = [];
    for (let elemento of oArray) {
        if (typeof elemento === "number") {
            arrayDeNumeros.push(elemento)
        }
    }
    return arrayDeNumeros
}
console.log(retornarNumerosDoArray(oArray));

console.log("----------------------------------- Execício 13 - Opção 2 -----------------------------------.filter e typeof ");

function retornarNumerosDoArray2(oArray) {
    return oArray.filter(elemento => typeof elemento === "number")
}
console.log(retornarNumerosDoArray2(oArray));

console.log("----------------------------------- Execício 14 - Opção 1 ----------------------------------- Object.entries .values .keys ");


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

function objetoParaArraY(objetoX) {
    return Object.entries(objetoX)
}
console.log(objetoParaArraY(objetoX));


console.log("----------------------------------- Execício 14 - Opção 2 ----------------------------------- for in ");

function objetoParaArray2(objetoX) {
    const resultado = [];

    for (let chave in objetoX) {
        resultado.push([chave, objetoX[chave]])
    }
    return resultado
}
console.log(objetoParaArray2(objetoX));

// [chave], mostra a chave.
// objeto[chave], mostra o valor.

// for in enxerga a chave.
// for of enxerga os valores.
// No array, o "for in" verá o índice. E o "for of" verá os elementos do array, os valores.
// No objeto, o "for in" verá as chaves. E o "for of" verá os valores, mas aqui no OBJETO com FOR OF, precisa usar o [Symbol.iterator] pra funcionar.
// https://imasters.com.br/front-end/diferenca-entre-for-of-e-for-in

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


console.log("----------------------------------- Execício 14 - Opção 3 ----------------------------------- Object.key .map");

function objetoParaArray3(objetoX) {
    const chaves = Object.keys(objetoX);
    const resultado = chaves.map(chave => [chave, objetoX[chave]]);

    return resultado
}
console.log(objetoParaArray3(objetoX));

// .map() cria um novo array ao chamar uma função para cada elemento do array. Chama uma função uma vez para cada elemento em uma matriz.
// .map() não executa a função para elementos vazios. Não altera o array original.

console.log("----------------------------------- Execício 15 - Opção 1 -----------------------------------");

const arrayX = [2, 6, 4, 1, 9, 54, 8];

function numeroIndicePares(arrayX) {
    let arrayPares = [];

    for (let i = 0; i < arrayX.length; i++) {
        if (i % 2 == 0 && arrayX[i] % 2 == 0) {
            arrayPares.push(arrayX[i])
        }
    }
    return arrayPares
}
console.log(numeroIndicePares(arrayX))

console.log("----------------------------------- Execício 15 - Opção 2 ----------------------------------- ");

function numeroIndicePares2(arrayX) {
    let arrayPares = [];

    for(let i = 0; i < arrayX.length; i += 2) {    // "i++" é igual a "i += 1", que navega pelos elemenos de 1 em 1.
        const numeroPar = arrayX[i] % 2 === 0      // no caso do "i += 2", ele navega em 2 em 2, pula 1 elemento entre eles.

        if(numeroPar){
            arrayPares.push(arrayX[i])
        }
    }
    return arrayPares
}
console.log(numeroIndicePares2(arrayX));

console.log("----------------------------------- Execício 15 - Opção 3 ----------------------------------- .filter ");

function numeroIndicePares3(arrayX) {
    return arrayX.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;

        return numeroPar && indicePar
    })    
}
console.log(numeroIndicePares3(arrayX))


console.log("----------------------------------- Execício 16 - Opção 1 -----------------------------------");


function checarAnoBissexto(ano) {

    if (ano >= 0) {
        if (ano % 400 == 0) {
            console.log(`${ano} é ano bissexto.`)
        } else if (ano % 100 == 1) {
            console.log(`${ano} não é ano bissexto.`)
        } else if (ano % 4 == 0) {
            console.log(`${ano} é ano bissexto.`)
        } else {
            console.log(`${ano} não é ano bissexto.`)
        }
    }
    else {
        console.log(`${ano} inválido.`)
    }
}

checarAnoBissexto(0);
checarAnoBissexto(2020);
checarAnoBissexto(2021);

console.log("----------------------------------- Execício 16 - Opção 2 ----------------------------------- ");

function checarAnoBissexto2(ano) {
    const divisivelPor4 = ano % 4 === 0;
    const divisivelPor100 = ano % 100 === 0;
    const divisivelPor400 = ano % 400 === 0;

    return (divisivelPor400 && !divisivelPor100 ) || divisivelPor4
}
console.log(checarAnoBissexto2(0)); // true
console.log(checarAnoBissexto2(2020)); // true
console.log(checarAnoBissexto2(2021)); // false

console.log("----------------------------------- Execício 16 - Opção 3 ----------------------------------- new Date() .getDate()");


function checarAnoBissexto3(ano) {
    return new Date(ano, 1, 29).getDate() === 29;   // new Date(ano, mes, data)
}

console.log(checarAnoBissexto3(2020)); // true
console.log(checarAnoBissexto3(2021)); // false

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias

console.log(new Date(2022, 0, 25)); // 25-01-2022
// Os meses iniciam em 0, como em um índice. Janeiro é 0, Feverieiro é 1, Março é 2....

console.log("----------------------------------- Execício 17 - Opção 1 -----------------------------------");

const arrayY = [5, 4, 3, 2, 1];

function somarArray(arrayY) {
    let resultadoSoma = 0;     // precisa iniciar a soma em 0.

    for (let i = 0; i < arrayY.length; i++) {
        resultadoSoma += arrayY[i]
        // resultadoSoma = resultadoSoma + arrayY[i]        
    }
    return resultadoSoma
}
console.log(somarArray(arrayY));


console.log("----------------------------------- Execício 17 - Opção 2 ----------------------------------- .slice() ");

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

console.log("----------------------------------- Usando .slice ----------------------------------- ");

const myArray = ["Maisa", "Renan", "Mirian", "Lucas", "Pai", "Mãe"];

console.log(myArray.slice(0)); // Novo array criado. Nenhum elemento saiu.
console.log(myArray.slice(1)); // Novo array criado. Permaneceu do [1] em diante, elemento[0] saiu.
console.log(myArray.slice(2)); // Novo array criado. Permaneceu do [2] em diante, elementos[0] e [1] sairam.
console.log(myArray.slice(3, 5)); // Novo array criado. Permaneceu [3] e [4], o ultimo [5] NÃO é incluido.

console.log("----------------------------------- Execício 17 - Opção 3 ----------------------------------- .forEach ");

function somarArray3(arrayY) {
    let resultadoSoma = 0;

    arrayY.forEach(numero => resultadoSoma += numero)
    return resultadoSoma
}
console.log(somarArray3(arrayY));

console.log("----------------------------------- Execício 17 - Opção 4 ----------------------------------- .reduce ");

function somarArray4(arrayY) {
    const resultadoSoma = arrayY.reduce((numeroAnterior, numeroAtual) => numeroAnterior + numeroAtual, 0) // creio que o 0

    return resultadoSoma
}
console.log(somarArray4(arrayY));

// Resumindo, o "reduce" reduz um array, pode ser em um único elemento, ou mais.
// .reduce pode possuir 4 parâmetros: valorAnterior(obrigatório), valorAtual(obrigatório), indice do atual(não obrig) e array original(não obrig).
// valorAnterior seria o elemento em [0] e valorAtual seria o elemento em [1], e ai vai caminhando pra frente,
// [0] e [1], depois [1] e [2], depois [2] e [3].... o numeroAnterior vai sendo o acumulador. 

// O método reduce() executa uma função de callback "redutora" fornecida pelo usuário em cada elemento do array,
// em ordem, passando o valor de retorno do cálculo no elemento anterior.
// O resultado final da execução do redutor em todos os elementos do array é um valor único.

console.log("----------------------------------- Entendendo .reduce ----------------------------------- .reduce ");

function oReduce(arrayY) {

    arrayY.reduce((valorAnteriorEAcumulador, valorAtual, indiceDoAtual, arrayOriginal) => {

        console.log(`${valorAnteriorEAcumulador} total do acumulador.`); // Assume posição [0] inicialmente, e vai acumulando a soma dos anteriores.
        console.log(`${valorAtual} valor atual.`);        // é o valor atual que está sendo somado naquela rodada.
        console.log(`${indiceDoAtual} índice do atual.`); 
        console.log(`${arrayOriginal} array original`);   // permanece inalterado.

        return valorAnteriorEAcumulador += valorAtual
    })
}
oReduce(arrayY);

console.log("----------------------------------- Execício 18 - Opção 1 ----------------------------------- FOR OF em ARRAY de Objetos ");

const produtosLoja = [
    { nome: "iPhone", categoria: "Eletrônico", preco: 6165.00 },
    { nome: "Tablet", categoria: "Eletrônico", preco: 654.00 },
    { nome: "Mouse", categoria: "Eletrônico", preco: 35.60 }
]

function despesasTotais(produtosLoja) {
    let resultadoSoma = 0;

    for (let items of produtosLoja) {   // Usar o "let of" para navegar em um array de objetos.
        resultadoSoma += items.preco
    }
    return resultadoSoma
}
console.log(despesasTotais(produtosLoja));

console.log("----------------------------------- Execício 18 - Opção 2 ----------------------------------- .map .reduce ");

function despesasTotais2(produtosLoja) {
    return produtosLoja
    .map(item => item.preco)  // mapeia o abributo "preco" e cria um novo array apenas com os preços do objeto: [ 6165, 654, 35.6 ]
    .reduce((acumulador, valorAtual) => acumulador + valorAtual) // aqui ele reduz o array de preços, somando todos os elementos.
}
console.log(despesasTotais2(produtosLoja));

// .map() cria um novo array ao chamar uma função para cada elemento do array. Chama uma função uma vez para cada elemento em uma matriz.
// .map() não executa a função para elementos vazios. Não altera o array original.

console.log("----------------------------------- Execício 18 - Opção 3 ----------------------------------- .reduce ");

function despesasTotais3(produtosLoja) {
    return produtosLoja.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(despesasTotais3(produtosLoja));

// "valorAtual.preco" está fazendo o filtrando apenas o atributo "preco" dos objetos.
// O número "0" no final da sentênça indica o índice do "valorAtual", mas não conseguir entender o funcionamento dele.

console.log("----------------------------------- Execício 19 - Opção 1 -----------------------------------");


const arrayZ = [2, 4, 2, 4];

function calcularMedia(arrayZ) {
    let media = 0;
    let soma = 0;
    let qntNumeros = 0;

    for (let i = 0; i < arrayZ.length; i++) {
        soma += arrayZ[i];
        qntNumeros = arrayZ.length;
        media = soma / qntNumeros;
    }
    return media
}
console.log(calcularMedia(arrayZ));

console.log("----------------------------------- Execício 19 - Opção 2 ----------------------------------- for of ");

function calcularMedia2(arrayZ) {
    const qtdNumers = arrayZ.length;
    let soma = 0;   // aqui não pode ser uma "const", porque varia, iniciar em 0, e depois da soma muda de valor.

    for (let elemento of arrayZ) {
        soma += elemento
    }
    return soma / qtdNumers
}
console.log(calcularMedia2(arrayZ));

console.log("----------------------------------- Execício 19 - Opção 3 ----------------------------------- .reduce ");

function calcularMedia3(arrayZ) {
    const qtdNumeros = arrayZ.length;
    let soma = arrayZ.reduce((elementoA, elementoB) => elementoA + elementoB);

    return soma / qtdNumeros
}
console.log(calcularMedia3(arrayZ));

console.log("----------------------------------- Execício 20 -----------------------------------");


function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2

    return area.toFixed(2)
}
console.log(calcularAreaTriangulo(6, 5.5564));


console.log("----------------------------------- Execício 21 - Opção 1 -----------------------------------");


const arrayW = [5, 9, 4, 2, 6, 1];

function acharMenorNumero(arrayW) {
    let menorNumero = arrayW[0]

    for (let i = 0; i < arrayW.length; i++) {
        if (arrayW[i] < menorNumero) {
            menorNumero = arrayW[i]
        }
    }
    return menorNumero
}
console.log(acharMenorNumero(arrayW));

console.log("----------------------------------- Execício 21 - Opção 2 ----------------------------------- Math.min(...array) ");

function acharMenorNumero2(arrayW) {
    return Math.min(...arrayW)     // é apenas "(...nomeDoArray)"
}
console.log(acharMenorNumero2(arrayW));

console.log("----------------------------------- Execício 21 - Opção 3 ----------------------------------- for in ");

function acharMenorNumero3(arrayW) {
    let menorNumero = arrayW[0];

    for (let i in arrayW) {
        if(arrayW[i] < menorNumero) {
            menorNumero = arrayW[i]
        }
    }
    return menorNumero
}
console.log(acharMenorNumero3(arrayW));

console.log("----------------------------------- Execício 21 - Opção 4 ----------------------------------- .reduce ");

function acharMenorNumero4(arrayW) {
    return arrayW.reduce((anterior, atual) => atual < anterior ? atual : anterior) // fica com o menor, pq o objetivo é achar o menor.
}
console.log(acharMenorNumero4(arrayW));


console.log("----------------------------------- Execício 22 ----------------------------------- Math.random() ");


function sorteio(numeroEscolhido) {
    const min = 1;
    const max = 10;
    const numeroSorteado = Math.floor(Math.random() * (max - min) + min); // (10 - 1) + 1 == 10

    if (numeroEscolhido == numeroSorteado) {
        console.log(`Parabéns, o número sorteado foi ${numeroSorteado} `)
    } else {
        console.log(`Que pena, o número sorteado foi ${numeroSorteado}`)
    }
}
sorteio(5);

/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

console.log("----------------------------------- Execício 23 - Opção 1 ----------------------------------- .split() ");

const stringOriginal = "Eu sou uma frase bem linda.";

function contaPalavras(stringOriginal) {
    let contaPalavras = 0;
    let stringDividida = stringOriginal.split(" ");  // stringDividida = [ 'Eu', 'sou', 'uma', 'frase', 'bem', 'linda.' ]
    

    for (let i = 0; i < stringDividida.length; i++) {
        contaPalavras++

    }
    return contaPalavras

}
console.log(contaPalavras(stringOriginal));


// o método .split() divide uma string em um array de substrings. Ele cria um novo array. Não altera array original.
// Se for usado o ("") como separador, a string será dividida entre as palavras.

console.log("----------------------------------- Execício 23 - Opção 2 ----------------------------------- .split() ");

function contaPalavras2(stringOriginal) {
    let stringDividida = stringOriginal.split(" ");

    return stringDividida.length
}
console.log(contaPalavras2(stringOriginal));

console.log("----------------------------------- Execício 24 - Opção 1 ----------------------------------- .charAt(i) ");


function contarCaracter(stringX, caractere) {
    let contaLetra = 0;

    for (let i = 0; i < stringX.length; i++) {
        if (caractere === stringX.charAt(i)) {
            contaLetra++
        }
    }
    return contaLetra
}
console.log(contarCaracter("banana", "a"));
console.log(contarCaracter("pararelepipedo", "p"));

// Quando tenho uma string, exemplo: const string = "banana"; Usando o string[0] eu acesso as letras, como se fosse em um array.
// Mas não é um array, é uma string. Há outra forma de acessar:
// Usando .charAt(i) ele acessa as letras da string.

const stringLegal = "Maisa";

console.log(stringLegal.charAt(0)); // M
console.log(stringLegal.charAt(1)); // a
console.log(stringLegal.charAt(2)); // i
console.log(stringLegal.charAt(3)); // s
console.log(stringLegal.charAt(4)); // a

console.log("----------------------------------- Execício 24 - Opção 2 ----------------------------------- .filter() com string ");

function contarCaracter2(stringX, letra) {
    return [...stringX].filter(caractere => caractere === letra).length  // isso cria um NOVO ARRAY, apenas com as letras.
}
console.log(contarCaracter2("banana", "a")); // sem o .length o retorno seria: [ 'a', 'a', 'a' ] com o length, ele dá o comprimento 3.

// A string está assim [...string] porque o .filter() é usado com ARRYs e não com STRINGS.

// O método .filter() cria um novo array preenchido com elementos que passam em um teste fornecido por uma função.
// O método filter() não executa a função para elementos vazios.
// O método filter() não altera o array original.

console.log("----------------------------------- Execício 25 - Opção 1 ----------------------------------- for of | .includes ");


function buscarPalavrasSemelhantes(palavra, arraY) {
    let resultado = [];

    for (let elemento of arraY) {
        if (elemento.includes(palavra)) {
            resultado.push(elemento)
        }
    }
    return resultado
}
console.log(buscarPalavrasSemelhantes("pro", ["profissional", "almoço", "produto"]));

console.log("----------------------------------- Execício 25 - Opção 2 ----------------------------------- .filter .includes ");

function buscarPalavrasSemelhantes2(inicioPalavra, arrayDePalavras) {
    return arrayDePalavras.filter(palavra => palavra.includes(inicioPalavra))
}

console.log(buscarPalavrasSemelhantes2("pro", ["profissional", "almoço", "produto"]));


console.log("----------------------------------- Execício 26 - Opção 1 ----------------------------------- .forEach | .replace ");


const stringY = 'abacaxi';

const vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

function removerVogais(stringY) {

    vogais.forEach(vogal => stringY = stringY.replace(/[vogal]/ig, ''))

    return stringY
}
console.log(removerVogais(stringY));

console.log("----------------------------------- Execício 26 - Opção 2 ----------------------------------- .replace ");

function removerVogais2(aString) {
    return aString.replace(/[AEIOU]/g, '')
}
console.log(removerVogais2('NaNAnaNA'));

// (/[AEIOU]/, '') Assim, retirou apenas o primeiro "A" maiusculo.
// (/[aeiou]/, '') Assim, retirou apenas o primeiro "a" minusculo.
// (/[AEIOU]/g, '') Assim, retirou TODOS os "A"(s) maiusculos.
// (/[aeiou]/g, '') Assim, retirou TODOS os "a"(s) minusculos.

// Conclusão, "g" é para retirar todos. E o "i" é para desconsiderar maiusculos e minusculos.


console.log("----------------------------------- Execício 27 - Opção 1 ----------------------------------- Object.entries | .forEach ");

const objetoZ = { ela: "Paula", voce: "João", eu: "Maisa" };

function inverterChaveValor(objetoZ) {
    const objetoInvertido = {};

    Object.entries(objetoZ).forEach(elementos => {
        const chave = 0
        const valor = 1

        objetoInvertido[elementos[valor]] = elementos[chave]
    })
    return objetoInvertido
}
console.log(inverterChaveValor(objetoZ))

// Não compreendi porque os valores 0 e 1 para chave e valor.

console.log("----------------------------------- Execício 27 - Opção 2 ----------------------------------- Object.entries | Object.fromEntries | .map .reverse ");


function inverterChaveValor2(objetoZ) {
    let paresChaveValorInvertido = Object.entries(objetoZ).map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(paresChaveValorInvertido) // cria novo objeto.
}
console.log(inverterChaveValor2(objetoZ))

//fromEntries() cria um novo objeto cujas propriedades são especificadas pelas entradas do iterável.
// O objeto. fromEntries() espera que o iterável retorne um objeto iterador que produz pares chave-valor.
// Ele usa a chave como a chave de propriedade do objeto e o valor como o valor associado à chave de propriedade.

console.log("----------------------------------- Execício 28 - Opção 1 ----------------------------------- for of | String() ");


function contaNumeroDigitos(arrayDeNumeros, numeroDigitosDesejados) {
    let arrayResultado = [];

    for (let numero of arrayDeNumeros) {
        const numeroDigitosReal = String(numero).length; // String(numero) transfora os números em string. E usando .length, ele acessa o cumprimento.

        if (numeroDigitosReal === numeroDigitosDesejados) {
            arrayResultado.push(numero);
        }
    }
    return arrayResultado
}

console.log(contaNumeroDigitos([254, 26, 14, 333], 3));

// O método String() retorna o mesmo que o método toString() para qualquer valor.
// O método toString() é usado internamente pelo JavaScript quando um objeto precisa ser exibido como um texto (como em HTML).
// Ou quando um objeto precisa ser usado como uma string.

console.log("----------------------------------- Execício 28 - Opção 2 ----------------------------------- .filter | String() ");

function contaNumeroDigitos2(arrayDeNumeros, numeroDigitosDesejados) {
    return arrayDeNumeros.filter(numero => {
        const numeroDigitosReal = String(numero).length

        return numeroDigitosReal === numeroDigitosDesejados
    })
}
console.log(contaNumeroDigitos2([254, 26, 14, 333], 3));

console.log("----------------------------------- Execício 29 - Opção 1 ----------------------------------- .forEach() .splice() ");

const arrAy = [2, 5, 9, 4, 1, 13, 6];

function segundoMaiorNumero(arrAy) {
    let indiceMaior = 0;
    let segundoMaior;

    arrAy.forEach((numero, indice) => {     // aqui navega pelo índice.
        if (numero > arrAy[indiceMaior]) {
            indiceMaior = indice            // aqui ele acha a posição no índice do maior número, que é [5]. Se trocar a ordem dessa linha, dá errado.
        }
    })
    arrAy.splice(indiceMaior, 1)  // .splice(indice removido, qnt removida) = indiceMaior foi removido do array (removeu [5]), e apenas 1 item removido.
    segundoMaior = arrAy[0]       // determina que o segundo maior elemento estará na posição 0 do índice.

    arrAy.forEach(numero => {
        if (numero > segundoMaior)
        segundoMaior = numero      // mas acho que aqui que o código de fato joga o segundo maior para a posição 0 do índice.
    })
    return segundoMaior
}
console.log(segundoMaiorNumero(arrAy));

// .splice - O método altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no local.
// .splice(índice, quantos, iten1,...itemX):
// índice: Requerido. A posição para adicionar/remover itens. O valor negativo define a posição do final do array.
// quantos: Opcional. Numeros de itens a ser removidos.
// itens: Opcional. Novos elementos a serem adicionados.

console.log("----------------------------------- Execício 29 - Opção 2 ----------------------------------- .filter | Math.max ");

function segundoMaiorNum(arrAy) {
    const maiorNumero = Math.max(...arrAy);               // ele acha o maior número aqui.
    arrAy = arrAy.filter(numero => numero != maiorNumero) // com esse filtro ele modifica o array original, deletando o maior número do Arrat, apenas dentro da função.
    const segundoMaior = Math.max(...arrAy)               // ai ele procura o próximo maior, desconsiderando o realmente maior.

    return segundoMaior
}
console.log(segundoMaiorNum(arrAy));


console.log("----------------------------------- Execício 29 - Opção 3 ----------------------------------- .sort ");

function segundoMaior(arrAy) {
    const arrayOrdenado = arrAy.sort((a, b) => a < b ? 1 : -1); // .sort((a, b) => a < b ? 1 : -1) ordem decrescente.

    return arrayOrdenado[1]
}
console.log(segundoMaior(arrAy));


function segundoMaior2(arrAy) {
    const arrayOrdenado = arrAy.sort((a, b) => b - a); // .sort((a, b) => b - a) ordem decrescente.
    return arrayOrdenado[1]
}
console.log(segundoMaior2(arrAy));

const arrayEmOrdemDecrescente2 = arrAy.sort((a, b) => a < b ? 1 : -1);
console.log(arrayEmOrdemDecrescente2);

// .sort - Para ordenar arrays em ordem crescente ou decrescente.
// Classifica os elementos de um array original e cria um novo array ordenado.
// .sort((a, b) => a < b ? 1 : -1)
// .sort((a, b) => b - a)


const arrayEmOrdemDecrescente1 = arrAy.sort((a, b) => a < b ? 1 : -1);
console.log(arrayEmOrdemDecrescente1);

console.log("----------------------------------- Execício 30 ----------------------------------- Object.entries() .map .sort ");


const soma = notas => notas.reduce((acumulador, atual) => acumulador + atual, 0)
const media = notas => soma(notas) / notas.length

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort((a, b) => + b.media - a.media) // usar o ".media" para determinar que a ordem é pela média.
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [10, 10, 10, 9] // média 
    })) // retornará { nome: "Mariana", media: 7.875 }



    console.log("----------------------------------- .sort() -----------------------------------");

    let numerosArray1 = [321, 54, 6, 78, 9, 584, 12];
    const ordemCrescente = numerosArray1.sort((a, b) => - b + a); // .sort((a, b) => - b + a); crescente
    console.log(ordemCrescente);

    const numerosArray2 = [321, 54, 6, 78, 9, 584, 12];
    const ordemDecrescente = numerosArray2.sort((a, b) => + b - a); // .sort((a, b) => + b - a); decrescente
  

   
    console.log(ordemDecrescente)
  