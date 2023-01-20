// Decorator
// É uma Função, chamada em cima de uma Classe com o @
// Precisa descomentar em 'tsconfig.json' o "experimentalDecorators": true,
// https://www.typescriptlang.org/docs/handbook/decorators.html 

// @logarClasse
// @logarClasseSe
@decorator("Teste", 123)

class Eletrodomestico {
    constructor() {
        console.log("Novoo...")
    }
}

function logarClasse(constructor: Function) {
    console.log(constructor)
}


// No console do Browser, ele imprime:

// class Eletrodomestico {
//     constructor() {
//         console.log("Novoo...");
//     }
// }


// Função que retorna um Decorator, ou seja, uma Decorator Factory

function decoratorVazio(_: Function) {};

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio  // passando um Decorator ou outro conforme o tipo do parâmetro valor.
}

function decorator(a: string, b: number) {
    return function(_: Function): void {
        console.log(a + " " + b)
    }
}

// Alterando Constructor com Decorator de Classe

// @logarObjeto

class Eletrodomestico2 {
    constructor() {
        console.log("Novoo...")
    }
}

type Constructor = { new(...args: any[]): {} }; // Constructor mais genérico possível.

// Esse decorator será chamado apenas 1 vez, e vai substituir essa classe, por uma subclasse.
// Cria nova classe, que é uma subclasse daquilo que foi passado como parâmetro.

function logarObjeto(constructor: Constructor) {
    console.log("Carregado...")
    return class extends constructor {
        constructor(...args: any[]) {
            console.log("Antes...")
            super(...args)
            console.log("Depois...")
        }
    }
}

// new Eletrodomestico2();
// new Eletrodomestico2();
// new Eletrodomestico2();
// new Eletrodomestico2();
// new Eletrodomestico2();


// Adicionando Método com Decorator de Classe

interface Eletrodomestico3 {
    imprimir?(): void
}

@imprimivel

class Eletrodomestico3 {
    constructor() {
        console.log("Novoo...")
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function() {
        console.log(this)
    }
}

// (<any>new Eletrodomestico3()).imprimir();
const eletro = new Eletrodomestico3();
eletro.imprimir && eletro.imprimir();

// É possível aplicar multiplos Decorator em cima da Classe.

// Desafio Decorator

const usuarioLogado = {
    nome: "João Silva",
    email: "joao@gmail.com",
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado...")
    }
}

new MudancaAdministrativa().critico();

// criando o Decorator...

function perfilAdmin<T extends Constructor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão!")
            }
        }
    }
}

// Decorator de Método, e não de Classe.

class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10258.45);
cc.sacar(5000);
cc.sacar(5000);
cc.sacar(258);
console.log(cc.getSaldo());

// alguem pode alterar o saldo, que é privado, de forma mal intensionada.

// cc.getSaldo = function() {
//     return this["saldo"] + 7000
// }
// console.log(cc.getSaldo());

// Função para se proteger disso. Em cima de Object.freeze()

function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}


// Decorator de Atributo
// Essa função não permitirá saldo negativo.

function naoNegativo(alvo: any, nomeAtributo: string) {
    delete alvo[nomeAtributo];
    Object.defineProperty(alvo, nomeAtributo, {
        get: function(): any {
            return alvo["_" + nomeAtributo]
        },
        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error("Saldo Inválido")
            } else {
                alvo["_" + nomeAtributo] = valor
            }
        }
    })
}

// Decorator de Parâmentro de Método.

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`)
}