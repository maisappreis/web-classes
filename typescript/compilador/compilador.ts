
let canal: string = "Gaveta";
let inscritos: number = 6412359;

// canal = inscritos;
console.log(`Canal = ${canal}`);

// em 'tsconfig.json' ele coloca em "compilerOptions": "noEmitOnError": true, para não criar o arquivo JS. E false para criar.

// let nome: string = "Pedro"; // aqui não existe o esquema de módulos, a variável nome já foi declarada em outro arquivo.
// Eu poderia não redeclarar, ou seja, não usar o LET.

nome = "Pedro";
console.log(`Nome = ${nome}`);

(function() {
    let nome: string = "Pedro";
})()


// Nessa situação, não gera erro com o "noImplicitAny": true,

let qualquerCoisa;  // pq a variável foi declarada sem valor inicial, então, pode ser qualquer coisa. Any é atribuido implicitamente.
qualquerCoisa = 12;
qualquerCoisa = "Olá"; 