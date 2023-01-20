"use strict";
// Exercício 1
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        return "Tooooooooot!!";
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto("Ducati"); // apenas o nome foi colocado aqui como 'parâmetro', por isso, apenas isso vai dentro de 'constructor'.
console.log(moto.buzinar());
moto.acelerar(15);
console.log(moto.velocidade);
// Exercício 2
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo;
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario1 = new Estagiario;
estagiario1.primeiroNome = "Alberto";
console.log(estagiario1);
const estagiario2 = new Estagiario;
estagiario2.primeiroNome = "Re";
console.log(estagiario2);
