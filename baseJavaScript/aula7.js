// Sobre o .this
// O ".this" é exatamente igual a "module.exports"
// A atribuição "global" dentro do Node equivale a "Window" dentro do browser/navegador.
// No Node cada arquivo é um módulo diferente. Já na Web é tudo um arquivo só, disputando escopo global.
// Node é para BackEnd. E browser é para FrontEnd.


let a = 3; // essa variável fica local, não é exportada.

console.log(global.a); // vai retornar undefined porque foi usado o LET.

global.b = 123;

this.c = 456; // esse "this.c" significa que vai exportar esse arquivo para fora.
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c); // retornou o this.c
console.log(module.exports === this); // retorna true.
console.log(module.exports); // { c: 456, d: false, e: 'teste' } Retornam tudo que está com o "this."
console.log(this); // { c: 456, d: false, e: 'teste' } Retornam tudo que está com o "this."

// Nesse caso do module.exports é mais comum representar assim:
module.exports = {e: 15, f: false, g: "teste"};


// quando se cria uma variável sem VAR ou LET, ela vai para o escopo global. Exemplo:
abc = 55;
console.log(global.abc);


// NÃO FAZER isso!! Isso pode subscrever variáveis e gerar muitos problemas.