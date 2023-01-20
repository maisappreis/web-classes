"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(23, 3, 1994);
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir as ()
casamento.ano = 2017;
console.log(casamento);
// Versão melhorada.
class DataMelhorada {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioMelhorado = new DataMelhorada(23, 3, 1994);
console.log(aniversarioMelhorado.dia);
console.log(aniversarioMelhorado);
// Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
    // criando métodos
    resume() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off).`;
    }
}
const produto1 = new Produto("Laptop", 5692.45);
const produto2 = new Produto("Tablet", 456, 0.2);
console.log(produto1.resume());
console.log(produto2.resume());
// Public & Private & Protected
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50).fill(0).forEach(() => carro1.acelerar()); // isso faz o carro acelerar 50x.
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// É um: Herança
// Tem um: Composição
// Ferrari é um carro --> Herança
// Carro tem um volante --> Composição
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima); // chama o 'super' para que o construtor da classe Pai seja chamado.
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 340);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0; // o _ indica que é privado, é uma convensão.
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
// Atributos e Métodos Estáticos.
// Atributo estático está associado/pertence à Classe, e não à cada uma das novas instâncias criadas.
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// m1.PI = 4.20;
// console.log(m1.areaCirc(4));
// const m2 = new Matematica();
// console.log(m2.areaCirc(4));
// console.log(new Matematica().areaCirc(4)); 
console.log(Matematica.areaCirc(4)); // fica mais simples de acessar, não precisa criar instâncias.
// Classe Abstrata
// Tipo, objetos concretos por tras de conceitos abstratos, tipo, 'celular' é um conceito abstrato, mas é um objeto concreto.
// Perde a habilidade de ser instânciada.
// Serve para ser herdada, reusar código.
// Dentro da classe Abstrata eu posso ter métodos abstratos (inacabados) e métodos concretos.
class Calculo {
    constructor() {
        this.resultado = 0; // atributo protegido.
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let calculo1 = new Soma();
calculo1.executar(2, 5, 3, 6);
console.log(calculo1.getResultado());
let calculo2 = new Multiplicar();
calculo2.executar(2, 5, 3, 6);
console.log(calculo2.getResultado());
// Construtor Privado & Singleton
// Controle de como se instância um objeto a partir do momento em que o construtor é dado como 'private'.
// Singleton seria ter um único objeto instânciado.
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico();
console.log(Unico.getInstance().agora()); // o método chama uma instância criada.
// Somente Leitura.
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC"); // não se pode alterar os atributos, pq são apenas leitura.
// turboHelice.modelo = "DC-8";
// turboHelice.prefixo = "PT-DEF";
console.log(turboHelice);
