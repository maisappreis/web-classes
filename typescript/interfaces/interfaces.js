"use strict";
// Interfaces
// Muito parecido com o 'Alias'
// https://www.typescriptlang.org/docs/handbook/interfaces.html 
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 28,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa); // apenas muda o nome, não imprime nada no console.
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 28, xyz: true });
pessoa.saudar("Skywalser");
// Uma Classe que implementa uma Interface.
// A classe respeita a interface.
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date; // posso colocar atributos a mais sem problemas.
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Renan";
saudarComOla(meuCliente);
meuCliente.saudar("Bernhardt");
console.log(meuCliente.ultimaCompra);
let potencia = function (base, exp) {
    return Math.pow(base, exp);
};
let potencia2 = (base, exp) => Math.pow(base, exp); // com ARROW
console.log(potencia(5, 4));
console.log(potencia2(5, 4));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 5;
x.log();
y.log();
z.log();
const cli = {
    nome: "Pedro",
    toString() {
        return this.nome;
    }
};
cli.log();
