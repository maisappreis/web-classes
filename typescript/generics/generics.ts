// Generics
// ele te dá uma validação melhor do que o 'any', porque no 'any' qqr coisa poderia ser usada.
// https://www.typescriptlang.org/docs/handbook/generics.html 

// Sem generics...

function echo(objeto: any) {
    return objeto
}

console.log(echo("João").length);
console.log(echo(27).length); // não é possível ter o comprimento de um number, e msm assim não dá erro, pq o 'any' não detecta isso.
console.log(echo({ nome: "João", idade: 28 }));


// Com generics...

function echoMelhorado<T>(objeto: T): T { // <T> seria o tipo do genérico. Pode ser qqr coisa <H> <OLA>
    return objeto
}

console.log(echoMelhorado("João").length);
console.log(echoMelhorado<number>(27)); // o generic detecta que .length não pode, e MOSTRA ERRO. 
console.log(echoMelhorado({ nome: "João", idade: 28 }));


// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.6, 4.8]; // O Array é genético, mas estou específicando que receber apenas 'numbers'
avaliacoes.push(8.6);
// avaliacoes.push("9.4");
console.log(avaliacoes);


// Array com Generics

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Ana", "Bia", "Leo"]);
imprimir<{ nome: string, idade: number }>([
    { nome: "Fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 48 }
])

type Aluno = { nome: string, idade: number };
imprimir<Aluno>([
    { nome: "Fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 48 }
])


// Função com Generics

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma Coisa..."))

// Classe com Generics

abstract class OperacaoBinaria<T, R> {
    constructor(public operador1: T, public operador2: T) {      
    }
    abstract executar(): R
}

// console.log(new OperacaoBinaria("Bom ", " dia")).executar();
// console.log(new OperacaoBinaria(3, 7)).executar();
// console.log(new OperacaoBinaria(6, "Opa")).executar();
// console.log(new OperacaoBinaria({}, null")).executar();

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operador1 + this.operador2
    }
}

console.log(new SomaBinaria(3, 4).executar());


class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {  // vai retornar o tempo em milisegundos de uma data
        let { dia, mes, ano } = data; // retirando as info de dentro de Data.
        return new Date(`${mes}/${dia}/${ano}`).getTime()   // data no formato americano.
    }

    executar(): string {
        const t1 = this.getTime(this.operador1);
        const t2 = this.getTime(this.operador2);
        const diferenca = Math.abs(t1 - t2);      // 'abs' de absoluto
        const dia = 1000 * 60 * 60 * 24;        // quantidade de milisegundo em um dia (1 miliseg. é 1000, vezes 60 dá 1 min, vezes 60 dá 1 hora, vezes 24 horas )
        return `${Math.ceil(diferenca/dia)} dia(s)`   // 'Math.ceil' para arredondar.
    }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());


// Desafio usando o Constraints (restrições)

class Fila<T extends number | string > {  // Criamos uma classe genérica e usando Constraints.
    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(pessoa: T) {
        this.fila.push(pessoa)
    }

    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);  // mexe no array, detela 1
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }
}

// agora especificamos melhor os tipos...

const fila = new Fila<string>("Gui", "Bia", "Pedro", "Ana", "Leo");

fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.entrar("Rafael");
fila.imprimir();

const novaFila = new Fila<number>(1, 2, 3, 4, 5);
novaFila.imprimir();

// const outraFila = new Fila<boolean>(true, false); // ele não permitiria tipo 'boolean' pq não está especificado lá em cima.


// Desafio Mapa.

type Par<C, V> = { chave: C, valor: V}; // tipo Chave e Valor

class Mapa<C, V> {
    itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>) {
        const encontrado = this.obter(par.chave);
        if(encontrado) {
            encontrado.valor = par.valor;
        } else {
            this.itens.push(par);
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>();
    }

    imprimir() {
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Renan" });
mapa.colocar({ chave: 2, valor: "Maisa" });
mapa.colocar({ chave: 3, valor: "Derek" });
mapa.colocar({ chave: 4, valor: "Pedro" });
mapa.colocar({ chave: 4, valor: "Mirian" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();

