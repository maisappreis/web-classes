"use strict";
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
console.log(possuiHobbies);
// Mas se eu fizer assim, eu terei um tipo dinâmico, ele não terá um tipo atribuido.
let minhaIdade;
minhaIdade = 28; // NÃO ATRIBUI que essa variável SEMPRE será um NUMBER,
console.log(typeof minhaIdade); // pode ser number
minhaIdade = "28";
console.log(typeof minhaIdade); // pode ser string
// Tipos Explícitos
let tuaIdade;
let suaIdade = 28;
let seuNome = "Maisa";
let tenhoHobbies = true;
console.log("...........ARRAY - TUPLAS - ENUM............");
// Também é inferido tipo para valores dentro de ARRAYs.
let hobbies = ["Correr", "Cozinhar", "Nadar"];
console.log(typeof hobbies[1]);
// hobbies = [100]; // Gera ERRO
// ARRAY TIPADO
let seusHobbies = ["Andar", 25, true];
let NumerosMega = [26, 25, 48];
// TUPLAS
let endereco = ["Avenida Principal", 99]; // será sempre um array com uma 'string' e um 'number'.
// ENUMS: valores pré-definidos.
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Rosa"] = 100] = "Rosa";
    Cor[Cor["Vermelha"] = 2] = "Vermelha";
    Cor[Cor["Preta"] = 100] = "Preta"; // pode até repetir
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor); // 1
console.log(Cor.Azul, Cor.Cinza);
console.log(Cor.Rosa, Cor.Preta);
// Tipo ANY
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// Funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.89, 9));
const teste = function (a, b) {
    return false;
};
// Tipo Função. Uma tipagem da função.
let calculo; // declara variável
calculo = digaOi; // atribui variável à uma função.
calculo(); // chama a variavel que agora é uma função
let calcular; // determino com Arrow que o retorno é Number.
calculo = multiplicar;
console.log(calculo(5, 9));
// Objetos
// Também é atribuido tipo para os valores das chaves. Mesmo que eu não deixe explicíto.
let usuario = {
    nome: "Maria",
    idade: 23
};
usuario = {
    idade: 48,
    nome: "João"
};
// posso até mexer na ordem.
// Desafio
let funcionario = {
    supervisores: ["João", "Maria", "Beatriz"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ["Pedro", "Renan", "Carol"],
    baterPonto(horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
// Union Types - quando pode ser de um tipo OU de outro tipo.
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
// Checando tipos manualmente...
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// Tipo NEVER
// Função nunca vai retornar, ou por estar em looping infinito ou quando termina em erro.
// Não é a ausência de retorno como no 'void'.
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) { // trim() tira espaços em branco. Se não tem nome, ou nome é vazio.
            falha("Precisa ter nome.");
        }
        if (this.preco <= 0) {
            falha("Preço inválido.");
        }
        ;
    }
};
produto.validarProduto();
// Tipo Null
// Não permite atribuir valor nulo.
// Isso pode ser desfeito se em 'tsconfig.json' eu descomentar e settar TRUE o "strictNullChecks": true,
let altura = 12;
// altura = null;
// Seria válido fazer assim:
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulano",
    tel1: "4521322323",
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
// Tipo Null as vezes assume como Tipo Any.
let podeSerNull = null; // any
podeSerNull = 12;
console.log(podeSerNull);
podeSerNull = "abc";
console.log(podeSerNull);
let contaBancaria = {
    saldo: 2563,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["2515665626", "154595632"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
