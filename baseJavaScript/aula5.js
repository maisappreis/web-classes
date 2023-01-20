// Operador de atribuição "=".
// Operador de atribuição destructuring, incorporado do JavaScript em 2015. ES2015: ECMAScript 6 é o nome real do JavaScript 2015.
// Destructuring. É um operador de desestruturação, ele tira/extrai algo de uma estrutura, seja ela objeto, array.

const a = 7;
let b = 3;

b += a; // equivalente a: b = b + a
console.log(b);

b -= a; // equivalente a: b = b - a
console.log(b);

b *= a; // b = b * a
console.log(b);

b /= a; // b = b / a
console.log(b);

b %= a; // b = b % a (que seria o resto da divisão de b por a).
console.log(b);

// Note, o valor de "b" vai se alterando de cima para baixo, a cada novo cálculo.

// Agora usando o Destructuring. Novo recurso do ES2015.

const pessoa = {
    nome: "Maisa",
    idade: 28,
    endereco: {
        logradouro: "Rua Abc.",
        numero: 2065
    }
}
const { nome, idade } = pessoa; // extraindo "nome" e "idade" de dentro do objeto "pessoa" usando o Destructuring.
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const { endereco: {logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep); // extraiu essas 3 informações, e CEP veio como undefined porque não havia sido colocado.

// Destructuring no objeto usa as {}, porque ele está desestruturando de um objeto.

// E quando está desestruturando de um Array ele usa [].
// Agora um exemplo do Destructuring com o Array.

const arraY = [4, 5, 6];
const [q, w, r] = arraY;
console.log([q, w, r]);

const [x] = [10];
console.log(x); // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 8, 9, 55];
console.log(n1, n3, n5, n6); // 10 8 55 0

// o [a] aqui é o operador de desestruturação. E o [10] é o array.


// Agora o Destructuring como parâmentro de uma função.
// Passou um objeto para dentro do parâmentro da função.

function rand({ min = 0, max = 1000}) { // passou 2 atributos com valores padrão, dentro do operador destructuring. 
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const objetoAleatorio = { min: 40, max: 50}
console.log(rand(objetoAleatorio)); // esse aqui fica gerando valores aleatórios ".random" a cada execução.
console.log(rand({ min: 900 })); // como aqui o max não foi definido, ele usa o valor padrão lá de cima "max = 1000".
console.log(rand({})); // aqui também, ele vai usar o min e max definidos lá em cima como padrão "0 a 1000".


// Agora o Array dentro dos parâmentros de uma função, usando o Destructuring.
// Igual o exemplo anterior, mas agora substituindo as {} pelos [].

function rand2([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]; // se min maior que max, é para inverter o min/max. Criou-se um novo array: [max, min].
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const objAleatorio = [ 100, 10 ]; // por ser um array não se pode usar o "min: e max:" para chamar os valores.
console.log(rand2(objAleatorio));
console.log(rand2([50, 40]));