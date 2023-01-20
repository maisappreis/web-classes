class Data {
    dia: number; // são atributos públicos por padrão.
    mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
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
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {

    }
}

const aniversarioMelhorado = new DataMelhorada(23, 3, 1994);
console.log(aniversarioMelhorado.dia);
console.log(aniversarioMelhorado);

// Desafio

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {

    }

    precoComDesconto(): number {
        return this.preco - (this.preco * this.desconto)
    }

    // criando métodos
    public resume(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off).`
    }
}

const produto1 = new Produto("Laptop", 5692.45);
const produto2 = new Produto("Tablet", 456, 0.2);
console.log(produto1.resume());
console.log(produto2.resume());


// Public & Private & Protected

class Carro {  // apenas a classe Carro pode mexer, alterar um atributo privado.
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    protected alterarVelocidade(delta: number): number {    // o método 'protected', diferente do 'private' pode ser transferido por herança.
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual
    }
    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
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


class Ferrari extends Carro { // O objetivo da Herança aqui é reutilizar código.
    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima) // chama o 'super' para que o construtor da classe Pai seja chamado.
    }

    public acelerar(): number {    // consegue acessar os métodos da Classe Carro se lá estiver como 'protected' ou 'public'.
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    
}
}

const f40 = new Ferrari("F40", 340);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());


// Getters & Setters

class Pessoa {
    private _idade: number = 0; // o _ indica que é privado, é uma convensão.

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <=120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);


// Atributos e Métodos Estáticos.
// Atributo estático está associado/pertence à Classe, e não à cada uma das novas instâncias criadas.

class Matematica {
    static PI: number = 3.1416;

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

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

abstract class Calculo {
    protected resultado: number = 0; // atributo protegido.

    abstract executar(...numeros: number[]): void; // método abstrato.

    getResultado(): number { // método concreto.
        return this.resultado
    }
}

class Soma extends Calculo { // herança.
    executar(...numeros: number[]): void { // aqui, o método abstrato precisa ser executado.
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}

class Multiplicar extends Calculo { // herança.
    executar(...numeros: number[]): void {
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
    private static instance: Unico = new Unico;
    private constructor() {}

    static getInstance(): Unico {  // está retornando uma instância de Unico - Singleton.
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

// const errado = new Unico();
console.log(Unico.getInstance().agora()); // o método chama uma instância criada.


// Somente Leitura.
class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) { // setta só uma vez, sem precisar mudar depois.
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC"); // não se pode alterar os atributos, pq são apenas leitura.
// turboHelice.modelo = "DC-8";
// turboHelice.prefixo = "PT-DEF";
console.log(turboHelice);