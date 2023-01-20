// os tipos são atribuidos sem que precise dizer no código, ela já faz isso de forma implícita.

// String

let nome = "Maisa";
console.log(nome);
//nome = 28; (ele vai ficar apontando erro, pq ele já aferiu como 'string')


// Number

let idade = 28;
//idade = "Maisa"; (ERRO)
idade = 28.5;
// O TS não faz diferenciação entre números INTEIROS ou com PONTO FLUTUANTE/reais (números com ponto)
console.log(idade);

// Boolean

let possuiHobbies = true;
/// possuiHobbies = 1; (ERRO)
console.log(possuiHobbies)

// Mas se eu fizer assim, eu terei um tipo dinâmico, ele não terá um tipo atribuido.
let minhaIdade;
minhaIdade = 28; // NÃO ATRIBUI que essa variável SEMPRE será um NUMBER,
console.log(typeof minhaIdade); // pode ser number
minhaIdade = "28";
console.log(typeof minhaIdade); // pode ser string


// Tipos Explícitos

let tuaIdade: any;
let suaIdade: number = 28;
let seuNome: string = "Maisa";
let tenhoHobbies: boolean = true;


console.log("...........ARRAY - TUPLAS - ENUM............")
// Também é inferido tipo para valores dentro de ARRAYs.

let hobbies = ["Correr", "Cozinhar", "Nadar"];
console.log(typeof hobbies[1]);
// hobbies = [100]; // Gera ERRO

// ARRAY TIPADO

let seusHobbies: any[] = ["Andar", 25, true];
let NumerosMega: number[] = [26, 25, 48];

// TUPLAS

let endereco: [string, number] = ["Avenida Principal", 99]; // será sempre um array com uma 'string' e um 'number'.

// ENUMS: valores pré-definidos.

enum Cor {
    Cinza,  // vai ser representado pelo 0
    Verde,  // vai ser representado pelo 1
    Azul,    // pelo 2
    Rosa = 100,
    Vermelha = 2,
    Preta = 100 // pode até repetir
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor); // 1

console.log(Cor.Azul, Cor.Cinza);
console.log(Cor.Rosa, Cor.Preta);


// Tipo ANY
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019};
console.log(carro);

// Funções

function retornaNome(): string {
    return nome
}

console.log(retornaNome());

function digaOi(): void {  // 'void' quer dizer vazio. Função que não retorna nada.
    console.log("Oi")
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2.89, 9));


const teste = function (a: number, b: number): boolean {
    return false
}

// Tipo Função. Uma tipagem da função.

let calculo; // declara variável
calculo = digaOi; // atribui variável à uma função.
calculo(); // chama a variavel que agora é uma função

let calcular: (numeroA: number, numeroB: number) => number; // determino com Arrow que o retorno é Number.
calculo = multiplicar;
console.log(calculo(5, 9));

// Objetos
// Também é atribuido tipo para os valores das chaves. Mesmo que eu não deixe explicíto.

let usuario: { nome: string, idade: number } = {
    nome: "Maria",
    idade: 23
}

usuario = {
    idade: 48,
    nome: "João"
}
// posso até mexer na ordem.


// Desafio

let funcionario: { 
    supervisores: string[],
    baterPonto: (horas: number) => string  // o nome do parâmentro não precisa ser respeitado.
} = {
    supervisores: ["João", "Maria", "Beatriz"],
    baterPonto(horario: number): string {
        if(horario <= 8 ) { 
            return "Ponto Normal"
        } else {
            return "Fora do horário"
        }
    }
}

console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// outra maneira de fazer o tipo...

type Funcionario = {  // isso é chamado de 'Alias'.
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario2: Funcionario = { 
    supervisores: ["Pedro", "Renan", "Carol"],
    baterPonto(horario: number): string {
        if(horario <= 8 ) { 
            return "Ponto Normal"
        } else {
            return "Fora do horário"
        }
    }
}

// Union Types - quando pode ser de um tipo OU de outro tipo.

let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);


// Checando tipos manualmente...

let valor = 30;

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

// Tipo NEVER
// Função nunca vai retornar, ou por estar em looping infinito ou quando termina em erro.
// Não é a ausência de retorno como no 'void'.

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) { // trim() tira espaços em branco. Se não tem nome, ou nome é vazio.
            falha("Precisa ter nome.")
        }
        if(this.preco <= 0) {
            falha("Preço inválido.")
        };
    }
};

produto.validarProduto();


// Tipo Null
// Não permite atribuir valor nulo.
// Isso pode ser desfeito se em 'tsconfig.json' eu descomentar e settar TRUE o "strictNullChecks": true,

let altura = 12;
// altura = null;

// Seria válido fazer assim:

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "Fulano",
    tel1: "4521322323",
    tel2: null
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

// Tipo Null as vezes assume como Tipo Any.

let podeSerNull = null; // any
podeSerNull = 12;
console.log(podeSerNull);
podeSerNull = "abc";
console.log(podeSerNull);


// Desafio

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 2563,
    depositar(valor: number) {    // é 'void' porque não retorna nada.
       this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["2515665626", "154595632"]
}

correntista.contaBancaria.depositar(3000);
console.log(correntista)
