// Sobre operadores Aritiméticos (+ - / * %).
// Sobre operadores Relacionais (== != < > === !==) - Retorna true e false. 
// Sobre operadores Lógicos (&& e ||) - Retorna true e false.
// Sobre operadores Unários.
// Sobre operadores Ternários.


// Operadores Aritiméticos.

const [a, b, c, d] = [3, 5, 1, 15] // aqui estou usando o operador Destructuring em "[a, b, c, d]".

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2; // se resultado é 0 é par, senão ímpar.

console.log(soma, subtracao, multiplicacao, divisao, modulo);

// operadores ternários operam com 3 números.
// operadores binários operam com 2 números.
// operadores unários operam com 1 número, exemplo, deixar número negativo "-a".

// Operadores Relacionais.

console.log("01)", "1" == 1); // se "1" é igual a 1. TRUE, apesar de não terem o mesmo tipo.
console.log("02)", "1" === 1); // se "1" é exatamente igual 1, dá falso, porque não são do mesmo tipo, um é string e outro number.
console.log("03)", "3" != 3); // false, porque ele considera igual.
console.log("04)", "3" !== 3); // true, porque ele de fato considera exatamente diferente.

console.log("05)", 3 > 2);
console.log("06)", 3 < 2);
console.log("07)", 3 >= 2);
console.log("08)", 3 <= 2);

const d1 = new Date(0); // Essa Date(0) seria o marco Zero, que é dia 01/01/1970. Dependendo do fuso horário pode dar um pouco antes.
const d2 = new Date(0);
console.log("09)", d1 == d2); // false. Dá falso no 09 e 10, porque ele está comparando o endereço de memória.
console.log("10)", d1 === d2); // false.
console.log("11)", d1.getTime() === d1.getTime()); // Aqui é true porque tá comparando o Number, dá o valor da hora em milisegundo desde a data de referência até hoje.

console.log("12)", undefined == null); // True.
console.log("13)", undefined === null); // False.


// Operadores Lógicos.

// No && todos precisam ser verdadeiros para dar verdadeiro.
// No && apenas um precisa ser falso para dar falso.

// No || apenas um precisa ser verdadeiro para dar verdadeiro.
// No || todos precisam ser falsos para dar falso.

// No OU Exclusivo (transforma o XOU em diferente "!=" para pensar a lógica).
// true xou true => false
// true xou false => true
// false xou true => true
// false xou false => false

console.log(!true); // false
console.log(!false); // true

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2; // Usar a diferença para simular o OU exclusivo. Abaixo tem outra alternativa para o OU Exclusivo.
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor. Não existe o OU exclusivo no JavaScript, ai para fazer o Ou exclusivo se usa isso ai.
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // criou-se um objeto para retornar todos os valores.
}
console.log("Caso 1:", (compras(true, true)));
console.log("Caso 2:", (compras(false, true)));
console.log("Caso 3:", (compras(true, false)));
console.log("Caso 4:", (compras(false, false)));


// Operadores Unários.
// Existem três formas:
// Préfixada: operador antes do operando, -n
// Pósfixada: operador depois do operando, n++
// Infixada: no meio, a + b

let num1 = 1;
let num2 = 2;

num1++ // pode usar ++num1 ou num1++ | pré ou pós. A préfixada tem uma preferência na ordem da execução dentro da operação.
console.log(num1); // acrescentou 1 ao 1.
--num1
console.log(num1);

console.log(++num1 === num2--); // true, num1 virou 2 antes da comparação, então na hora da comparação o num2 era 2 também. E só depois virou 1.
console.log(num1 === num2); // false, a partir dessa linha de código, ai sim passam a ter valores diferentes, 2 e 1 respectivamente.


// Operadores Ternários.
// Opera 3 números, 3 dados diferentes.
// a ? b : c
// Se a condição "a" for true, retorna b, senão, retorna c.

const resultado = nota => nota >=7 ? "Aprovado" : "Reprovado"; // usando Arrow.

console.log(resultado(8)); // aprovado.
console.log(resultado(6)); // reprovado.



