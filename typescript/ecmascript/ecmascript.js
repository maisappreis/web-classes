"use strict";
// Isso aqui só ocorre se estiver settado "target": "es6",
// Caso seja um ECMA inferior, tudo vira VAR e o LET e CONST não existem.
let seraQuePode = "?";
console.log(seraQuePode);
// var seraQuePode = "?"  // caso fosse só isso, não daria erro como o LET, pois o VAR é jogado para cima, e dá 'undefined'.
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar casaco!"; // se fosse VAR, eu consigo acessar externamente ao bloco, VAR é global dentro do módulo.
    console.log(acao);
}
// console.log(acao); // com VAR consigo acessar aqui fora.
var segredo = "externo";
function revelar() {
    var segredo = "interno"; // VAR escopo função. Só é possível acessar internamente.
    console.log(segredo);
}
revelar(); // vai acessar a interna, pq é a função.
console.log(segredo); // vai conseguir acessar apenas a VAR externa.
// Declarando uma constante no ES6, ela não pode ser alterada, mas se o 'target' for ES5, vai virar VAR, ele vai dar erro, mas vai passar.
const cpf = "123.258.000-58";
// cpf = "159.489.025-56"; // não pode alterar
// Função ARROW x Tradicional
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(6, 4));
// Função com 1 parâmetro apenas, se colocado o TIPO, deve ser entre ()
const falarCom = (pessoa) => console.log("Olá, " + pessoa);
falarCom("Maisa");
// THIS
// function normalComThis() {
//     console.log(this)
// }
// normalComThis(); // aqui é 'undefined'
// const normalComThisEspecial = normalComThis.bind({ nome: "Ana"}); // Numa função tradicional, o valor do THIS pode variar com o uso do BIND e outras formas.
// normalComThisEspecial(); // aqui passou a ser "nome: Ana"
// const arrowComThis = () => console.log(this);
// arrowComThis(); // imprime 'windown' no browser.
// Parâmentro Padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
// Rest & Spread (juntar e espalhar)
const numbers = [1, 88, 26, -54];
console.log(Math.max(...numbers)); // ele espalha os elementos do Array dentro da função Math.max, que não aceita apenas o array.
const turmaA = ["Maisa", "Ana", "Bia"];
const turmaB = ["Renan", "Paulo", "Gui", ...turmaA]; // espalhando, spread.
console.log(turmaB);
function retornarArray(...args) {
    return args; // args é internamente um array
}
const numeros = retornarArray(1, 5, 6, 2, 3, 7); // usando o Rest.
console.log(numeros);
console.log(retornarArray(...numbers)); // usando o Spread.
// Rest $ Spread (Tupla)
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
// '...args' e '...params' são, internamente, arrays.
function tuplaParam2(...params) {
    console.log(Array.isArray(params)); // retorna TRUE.
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructirung em ARRAY
const caracteristicas = ["Motor 1.8", 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructirung em OBJETO
const item = {
    nome: "SSD 480GB",
    preco: 544,
    caracteristicas: {
        w: "Importado"
    }
};
const { nome: n, preco: p } = item; // deu um apelido(label) 'n' ao atributo 'nome', pois a variavel 'nome' já esta sendo usada em outro arquivo.
console.log(n);
console.log(p);
console.log(item.nome);
console.log(item.preco);
const { caracteristicas: { w } } = item; // desentruturação do atributo aninhado
console.log(w);
// DESAFIOS
// 1
let dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2
let dizerOla = function (nome = "pessoa") {
    console.log(`Olá, ${nome}!`);
};
dizerOla("Maisa");
// 3
let nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4
let array = [55, 20, ...nums];
// array.push(...nums); // poderia ser assim.
console.log(array);
// 5
let notas = [8.5, 6.3, 9.4];
let [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// 6
let cientista = { primeiroNome: "Will", expeciencia: 12 };
let { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);
// Promises
fetch("https://swapi.dev/api/people/1") // 'fetch' funciona no browser, aqui acho que precisa de plugin.
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title));
