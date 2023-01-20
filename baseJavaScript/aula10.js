// Estrutura de repetição WHILE.
// Mais usada para uma situação em que se precisa de uma repetição com número INDETERMINADO de vezes.

// Estrutura de repetição DO/WHILE.

// Estrutura de repetição FOR.
// Mais usada para uma situação em que se precisa de uma repetição com número DETERMINADO de vezes.
// Estrutura de repetição FOR/IN. Ele percorre os atributos de uma estrutura, seja obejto, ou array.

// Usando BREAK e CONTINUE.
// BREAK pode agir em cima de FOR/WHILE/SWITCH.
// CONTINUE pode agir em cima apenas de FOR/WHILE, precisa ser uma estrutura de repetição, e SWITCH é de controle.

// ----------------------------------------------------------------------------------------------------


// Estrutura de repetição WHILE.
// Essa estrutura é baseada em true or false, enquanto for TRUE > continua. E quado acha o FALSE > para de executar, sai do laço.

function sorteioNumeros(min, max) {
    const valorSorteio = Math.random() * (max - min) + min;
    return Math.floor(valorSorteio)
}

let opcao = 0;

while (opcao != -1) {
    opcao = sorteioNumeros(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`); // para imprimir o valor de "opção" desse jeito ai, não usar aspas, USA a CRASE.
}
console.log("Até a próxima!");

// A formula "Math.random() * (max - min) - min" faz ele gerar um valor aleatório entre o max e o mín.


// Estrutura de repetição DO/WHILE.
// A expressão da condição fica depois do bloco.


function sorteioNumeros2(min, max) {
    const valorSorteio2 = Math.random() * (max - min) + min;
    return Math.floor(valorSorteio2)
}

let opcao2 = -1; // Nesse caso aqui, pode-se colocar o -1 que não dará problema, porque o teste fica apenas no final do código.
// E também nem precisaria atribuir um valor para essa variável, bastaria deixar "let opcao;"

 do {
    opcao2 = sorteioNumeros2(-1, 10);
    console.log(`A opção escolhida foi ${opcao2}`)
} while (opcao2 != -1)

console.log("Até logo!")


// Estrutura de repetição FOR.

let contador = 1;
while(contador <= 10) {
    console.log(`Contador = ${contador}`);
    contador++
}

for(let i = 1; i <= 10; i++) { // Aqui o "let i = 1", porque não se trata de posição no índice, e sim, apenas de números. Quando se trata de índice, sempre inicia em 0. 
    console.log(`i = ${i}`)
}

// Usando o FOR para acessar/navegar os elementos de uma ARRAY.

let array2 = [2, 56, 48, 4, 6, 648, 95];

for(let i = 0; i < array2.length; i++) { // o certo é sempre colocar o LET ali dentro do for, para ele não ser global. É uma boa prática.
    console.log(`Nota: ${array2[i]}`) // Aqui o "let i = 0", inicia em 0 porque é a primeira posição do ARRAY. No de cima, inicia em 1, porque não se trata de posição, é apenas um número.
}


// Comparando WHILE com FOR.
// No WHILE "let contador = 1;" - declaração da variável.
// No FOR "let i = 0;" - declaração da variável.
// A expressão: "(contador <= 10)" no WHILE, e no FOR "i < array2.length";
// O incremento: "contador++" no WHILE, e no FOR "i++"".


// Estrutura de repetição FOR/IN.
// Ele percorre os atributos de uma estrutura, seja objeto, ou array.
// No caso do Array, usar o FOR/IN não é a melhor alternativa. Mas para objeto é bem usado.


const notas = [6.7, 5.5, 9.2, 10, 7.5];

for(let i in notas) {
    console.log(i, notas[i]) // ele acessa o índice "in"/"dentro" do array "notas". E retorna o índice.
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 28,
    peso: 54
}

for(let a in pessoa) {
    console.log(`${a} = ${pessoa[a]}`)
    
}

// Tanto o "i" quando o "atributo" antes de "in" devem ser declaradas como variáveis "let". Para ficarem locais.
// Assim como no array existe um íncice dos elementos, dentro dos objetos também existe.
// As variávei "i" e "atributo" antes de "in" se referem ao índice.

// No ARRAY o "i" se refere ao indice, e o nome do array mais i, array[i], se refere ao elemento.
// No OBJETO o "a" se refere ao atributo, e o nome do objeto mais a, objeto[a], se refere aos elementos, chave: valor.


// Usando BREAK e CONTINUE.
// O ideal é evitá-los, porque eles desviam o fluxo, usar se realmente necessário.
// O break age em cima do bloco mais próximo, no caso em cima do FOR no exemplo abaixo.

const numbersArray =  [9, 8, 7, 6, 10, 8, 9, 4];

for(x in numbersArray) { // Esse "x" está acessando/se referindo ao índice do array.
    if (x == 5) { // ele para na posição 5, e sai do laço/loop.
        break
    }
    console.log(`${x} = ${numbersArray[x]}`) // o índice do ultimo aqui é som [] e não {}.
}
// O BREAK interrompe, e vai para fora do laço.
// O CONTINUE interrompe a atual, e pula para próxima, não para fora do laço.
console.log("Agora com o continue..")

for(y in numbersArray) {
    if (y == 3) { // ele pula a posição 3, e continua da 4 em diante.
        continue
    }
    console.log(`${y} = ${numbersArray[y]}`)
}


// É possível criar rótulos, internos e externos. Exemplo:
// Mas é melhor não usar isso, existem forma melhores.

rotuloExterno: for (a in numbersArray) {
    for (b in numbersArray) {         // esse for aqui está criando um rótulo interno.
        if(a == 2 && b == 3) break rotuloExterno // aqui eu preciso chamar o nome do rótulo externo, senão ele age em cima do interno.
        console.log(`Par = ${a}, ${b}`)
    }
}


console.log(37 % 5) // true

console.log(38 + (5 - (38 % 5)))
