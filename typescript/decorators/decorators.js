"use strict";
// Decorator
// É uma Função, chamada em cima de uma Classe com o @
// Precisa descomentar em 'tsconfig.json' o "experimentalDecorators": true,
// https://www.typescriptlang.org/docs/handbook/decorators.html 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logarClasse
// @logarClasseSe
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("Novoo...");
    }
};
Eletrodomestico = __decorate([
    decorator("Teste", 123)
], Eletrodomestico);
function logarClasse(constructor) {
    console.log(constructor);
}
// No console do Browser, ele imprime:
// class Eletrodomestico {
//     constructor() {
//         console.log("Novoo...");
//     }
// }
// Função que retorna um Decorator, ou seja, uma Decorator Factory
function decoratorVazio(_) { }
;
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio; // passando um Decorator ou outro conforme o tipo do parâmetro valor.
}
function decorator(a, b) {
    return function (_) {
        console.log(a + " " + b);
    };
}
// Alterando Constructor com Decorator de Classe
// @logarObjeto
class Eletrodomestico2 {
    constructor() {
        console.log("Novoo...");
    }
}
// Esse decorator será chamado apenas 1 vez, e vai substituir essa classe, por uma subclasse.
// Cria nova classe, que é uma subclasse daquilo que foi passado como parâmetro.
function logarObjeto(constructor) {
    console.log("Carregado...");
    return class extends constructor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
let Eletrodomestico3 = class Eletrodomestico3 {
    constructor() {
        console.log("Novoo...");
    }
};
Eletrodomestico3 = __decorate([
    imprimivel
], Eletrodomestico3);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
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
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado...");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
// criando o Decorator...
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão!");
            }
        }
    };
}
// Decorator de Método, e não de Classe.
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
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
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
// Decorator de Atributo
// Essa função não permitirá saldo negativo.
function naoNegativo(alvo, nomeAtributo) {
    delete alvo[nomeAtributo];
    Object.defineProperty(alvo, nomeAtributo, {
        get: function () {
            return alvo["_" + nomeAtributo];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            }
            else {
                alvo["_" + nomeAtributo] = valor;
            }
        }
    });
}
// Decorator de Parâmentro de Método.
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
