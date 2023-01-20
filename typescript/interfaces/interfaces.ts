
// Interfaces
// Muito parecido com o 'Alias'
// https://www.typescriptlang.org/docs/handbook/interfaces.html 

interface Humano {
    nome: string
    idade?: number         // atributo opcional usar o '?'.
    [prop: string]: any    // atributo dinâmico. Pode variar.
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log("Olá, " + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = "Joana"
}

const pessoa: Humano = {
    nome: "João",
    idade: 28,
    saudar(sobrenome: string) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
    }
}

saudarComOla(pessoa);
mudarNome(pessoa); // apenas muda o nome, não imprime nada no console.
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 28, xyz: true });
pessoa.saudar("Skywalser");


// Uma Classe que implementa uma Interface.
// A classe respeita a interface.

class Cliente implements Humano {
    nome: string = "";
    ultimaCompra: Date = new Date;  // posso colocar atributos a mais sem problemas.
    saudar(sobrenome: string) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome)
    }
}

const meuCliente = new Cliente();
meuCliente.nome = "Renan";
saudarComOla(meuCliente);
meuCliente.saudar("Bernhardt");
console.log(meuCliente.ultimaCompra);


// Interface da Função.

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia = function(base: number, exp: number): number {   // Math.pow(base, exp) OU 'base ** exp' // Array(exp).fill(base).reduce((t, a) => t * a)    
    return base ** exp  
}

let potencia2 = (base: number, exp: number): number => base ** exp; // com ARROW

console.log(potencia(5, 4));
console.log(potencia2(5, 4));

// Entre Classe e Classe usa 'extends'
// Entre Interface e Interface usar 'extends'
// Entre Classe e Interface usa 'implements'

// Herança

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void  // como é abstrata, não precisa ter corpo.
}

// Uso de Interface para estender o Object

interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2;
const y = 3;
const z = 5;

x.log();
y.log();
z.log();

const cli = {
    nome: "Pedro",
    toString() {
        return this.nome
    }
}
cli.log();