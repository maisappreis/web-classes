// Exercício 1

class Moto {
    public velocidade: number = 0;

    constructor(public nome: string) { // aqui entre aquilo que é dado como 'parâmetro' na hora de instanciar.

    }

    buzinar(): string {  // é 'public' por padrão, não colocar.
        return "Tooooooooot!!"
    }

    acelerar(delta: number): number {
        return this.velocidade = this.velocidade + delta
    }
}

const moto = new Moto("Ducati"); // apenas o nome foi colocado aqui como 'parâmetro', por isso, apenas isso vai dentro de 'constructor'.
console.log(moto.buzinar());
moto.acelerar(15);
console.log(moto.velocidade);

// Exercício 2

abstract class Objeto2D {
    public base: number = 0;
    public altura: number = 0;

    abstract area(): number;
} 
 
class Retangulo extends Objeto2D { // herança.

    area(): number {
       return this.base * this.altura
    }
}

const retangulo = new Retangulo;
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());

// Exercício 3

class Estagiario {
    private _primeiroNome: string = "";

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(valor: string) {
       if(valor.length >= 3) {
        this._primeiroNome = valor;
       } else {
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
