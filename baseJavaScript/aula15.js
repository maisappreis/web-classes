// OBJETO
// Antes: Procedual, foco no procedimento, processamento. Foco em funções que manipulavam dados.
// Depois com a Orientação à Objeto. Você tem dados, e dentro destes dados, você tem funções.
// O objeto passou a ser a figura central. A função pertence ao objeto.

// new Object (linha 34). Construindo objetos.
// Formas Criar Objetos: 1) Notação literal; 2) Usando "new"; 3) Função construtora, mais "new"; 4) Função Factory; 5) Object.create; 6) JSON
// Getter/Setters (linha 162). "get" e "set" são funções que acessam valores, com intesão de validação, processamento, antes de devolver. Usa "_" por convensão.
// Funções importantes de Object. (linha 180)
// Herança. (linha 226)
// Colocando restriçoes nos Objetos. (linha 395)
// JSON vs Objeto (linha 430)
// Classe (linha 444)

// Procedural
// processamento(valor1, valor2, valor3)

// Orientado a Objeto
/*objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){

    }
}*/

// Princípios:
// 1. Abstração. (saber como traduzir o objeto do mundo real para o software)
// 2. Encapsulamento. (quanto menos os objetos dependerem uns dos outros, melhor. Encapsular)
// 3. Herança. (objeto herda atributos e comportamentos de um objeto "pai")
// 4. Polimorfismo. (multiplas formas)


// Coleção dinâmica de pares chave/valor.
const produto = new Object // função NEW construtora
produto.nome = "Cadeira"
produto["marca produto"] = "Genérica"
produto.marca = "Adidas"
produto.preco = 220

console.log(produto);
delete produto["marca produto"];
delete produto.preco;
console.log(produto);

// Objeto dentro de Objeto. Um Array de objetos. E pode ter função dentro do objeto.
const carro = {
    modelo: "A4",
    valor: 890000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABS",
            numero: 1235
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 24
    }, {
        nome: "Ana",
        idade: 42
    }]
    //calcularValorSeguro: function() {
    //..

}

// Formas de acessar os objetos:
carro.proprietario.endereco.numero = 1000;
carro["proprietario"]['endereco']['logradouro'] = "Av. Abc";
console.log(carro);
console.log(carro.condutores);

// FORMAS de CRIAR Objetos:
// 1) Notação literal; 2) Usando "new"; 3) Função construtora, mais "new"; 4) Função Factory; 5) Object.create; 6) JSON

// Notação literal.
const obj1 = {}
console.log(obj1)

// Object em JS: Usando "new".
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2);

// Funções construtoras. Usa o "new" também, é a mesma da anterior.
function produto1(nome, preco, desc) {
    this.nome = nome                   // Usar o "this" expõe o nome para fora do objeto/função. Não encapsulamento.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto1("Caneta", 7.99, 0.15)
const p2 = new produto1("Lapis", 1.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory.
// Retorna o objeto.
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario("João", 7900, 4);
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna/cria objetos: o JSON. Converte o TEXTO em variável.
const fromJSON = JSON.parse('{"info": "Eu sou um JSON!"}')
console.log(fromJSON.info); // Eu sou um JSON!

// Não se pode alterar o objeto com o "const", mas os atribuitos deste objetos podem variar e ser alterados sim.

const pessoaX = Object.freeze({ nome: "João" }) // vai "congelar" a informação, não será possível nem alterar os atributos. Não altera, não adiciona atributos, não deleta. Congela.
console.log(pessoaX)

// Notação Literal

const a = 1
const b = 2
const c = 3

const oobj1 = { a: a, b: b, c: c };
const oobj2 = { a, b, c };
console.log(oobj1, oobj2); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAtr = "nota";
const valorAtr = 7.96;

const oobj3 = {};
oobj3[nomeAtr] = valorAtr;
console.log(oobj3); // { nota: 7.96 }

const oobj4 = { [nomeAtr]: valorAtr }
console.log(oobj4) // { nota: 7.96 }

// Duas formas de colocar a função dentro de um objeto:

const oobj5 = {
    funcao1: function () {
        //....
    },
    funcao2() {
        //.....
    }
}
console.log(oobj5)


// Getter/Setters -> "get" e "set" são funções que acessam valores, com intesão de validação, processamento, antes de devolver.
// Isso aumenta o nível de encapsulamento.
console.log("----------------------Getter & Setters-----------------------")

const sequencia = {
    _valorY: 1,   // Esse _ é uma converção, ela diz: "Sempre acesse essa variável a partir do métedo GET/SET". Acessada apenas internamente dentro deste objeto.
    get valorY() { return this._valorY++ },
    set valorY(valorY) {
        if (valorY > this._valorY) {  // Set está fazendo uma validação.
            this._valorY = valorY
        }
    }
}
console.log(sequencia.valorY, sequencia.valorY); // 1 2
sequencia.valorY = 1000;
console.log(sequencia.valorY, sequencia.valorY); // 1000 1001


// Funções importantes de Object.
console.log("----------------------Funções importantes de Object-----------------------")

const aluno = {
    nome: "Maisa",
    idade: 28,
    peso: 65
}

console.log(Object.keys(aluno)); // [ 'nome', 'idade', 'peso' ] Acessa Chaves.
console.log(Object.values(aluno)); // [ 'Maisa', 28, 65 ] Acessa Valores.
console.log(Object.entries(aluno)); // [ [ 'nome', 'Maisa' ], [ 'idade', 28 ], [ 'peso', 65 ] ] Acessa Entradas.

Object.entries(aluno).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}) // e[0] = chave | e[1] = valor

// Usando o DESTRUCTURING

/*Object.entries(aluno).forEach([chave, valor] => {
    console.log(`${chave}: ${valor}`)
}) */

Object.defineProperty(aluno, "dataNascimento", { // feito para adicionar um atributo a um objeto já existente.
    enumerable: true,
    writable: false,
    value: "23/03/1994"
})
aluno.dataNascimento = "23/05/1994"; // Ele não altera data porque "writebla: false."
console.log(aluno.dataNascimento) // 23/03/1994
console.log(Object.keys(aluno)) // Ele enumera a data de nascimento porque "enumerable: true". >> [ 'nome', 'idade', 'peso', 'dataNascimento' ]


// Object.assign (ECMAScript 2015). Transfere outro objetos para dentro de um objeto de destino.
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }    // valor de "a" será sobreescrito, vale o ultimo.
const obJ = Object.assign(destino, o1, o2) // Ele joga todos os objetos "o1 e o2", para dentro do objeto "destino".
console.log(destino); // { a: 4, b: 2, c: 3 }

Object.freeze(obJ);
obJ.c = 1234;        // Congela, não faz a alteração.
console.log(obJ) //{ a: 4, b: 2, c: 3 }


// HERANÇA.
// Ela evita o copia e cola de código repetidos. Reuso de códigos.
// Entre herança e composição. Priorize a COMPOSIÇÃO, é mais flexível.
// O conceito de protótipo é ([Prototype]), que é diferente da função "prototype".

const ferrari = {
    modelo: 'A74',
    velMax: 324
}

const volvo = {
    modelo: 'S67',
    velMax: 200
}

console.log(ferrari.__proto__); // Com esse "__proto__" consigo acessar o protótipo deste objeto, o objeto pai. 
console.log(ferrari.__proto__ === Object.prototype); // Ele vai procurar o atributo dentro de toda a cadeira de objetos, no "pai", no "avo", "bizavo". Que é o mais acima.
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // aqui ele pergunta se existe um protótipo acima dele, de mais mais alto nível na hierarquia. NULL.
console.log(Object.prototype.__proto__ === null);  // TRUE
console.log(ferrari.prototype); // Undefined, pq esse "__proto__" é diferente de "prototype".

// Cadeia de protótipos (Prototype Chain)

Object.prototype.atr0 = "0"; // sentença de teste. Não faça isso. Porque isso é global. Esse é o protótipo pai de todos os objetos do código.

const ano = { atr1: 'A' };
const pai = { __proto__: ano, atr2: 'B', atr3: 'X' };
const filho = { __proto__: pai, atr3: 'C' };
console.log(filho.atr1)         // eu chamo o "filho", mas ele acha o atributo lá em "avô".
console.log(filho.atr0);    // ele procura acima do "avô", que seria no "Object.prototype".
console.log(filho.atr3);   // sombreamento, sobre escrita.

const meuCarro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

const ferrarI = {
    modelo: 'A31',
    velMax: 321,   // shadowing. Essa velocidade maxima vai sombrear a "velMax" da função "meuCarro"
}

const volvO = {
    modelo: 'S234',
    status() {
        return `${this.modelo}: ${super.status()}` // o super é para chamar o método do meu protótipo.
    }
}

// agora ele estabelece a relação entre ferrari e carro, e entre volvo e carro. Estabelece a relação de protótipo.

Object.setPrototypeOf(ferrarI, meuCarro); // também posso usar o "__proto__" para estabelecer essa relação.
Object.setPrototypeOf(volvO, meuCarro);

console.log(ferrarI);
console.log(volvO);

volvO.acelerarMais(100);
console.log(volvO.status());

ferrarI.acelerarMais(300);
console.log(ferrarI.status());

// Agora usando o ".create".

const paI = { nome: 'Pedro', corCabelo: 'castanho' };

const filha1 = Object.create(paI);
filha1.nome = 'Ana';
console.log(filha1.corCabelo) // ele pega a cor do cabelo do objeto pai.

const filha2 = Object.create(paI, {
    nome: { value: "Bia", writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?   // essa função retorna se os atributos vieram ou não por herança. Se retorna TRUE, pertence ao próprio objeto, senão, herança.
        console.log(key) : console.log(`Por herança: ${key}`)
}

//--------------

function meuObjeto() { }
console.log(meuObjeto.prototype)

const object1 = new meuObjeto;
const object2 = new meuObjeto;

console.log(object1.__proto__ === object2.__proto__)    // TRUE
console.log(meuObjeto.prototype === object1.__proto__) // TRUE
// todos os objetos criados a partir de uma mesma função construtoram apontam para o mesmo protótipo

meuObjeto.prototype.nome = "Anônimo";
meuObjeto.prototype.falar = function () {
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}
object1.falar()

object2.nome = "Rafael";
object2.falar()

const object3 = {}
object3.__proto__ = meuObjeto.prototype; // Isso muda a refentencia, "__proto__" não vai apontar para "Object Prototype", mas agora para "meuObjeto.prototype."
object3.nome = "Objeto 3"
object3.falar()

// Resumindo..
console.log((new meuObjeto).__proto__ === meuObjeto.prototype); // true
console.log(meuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype);  // true
console.log(Object.prototype.__proto__ === null); // porque depois dele não há mais nada na cadeia de protótipo. O atributo existe, mas não aponta para nada.


// Ainda sobre Herança
console.log(typeof String); // function
console.log(typeof Array); // function
console.log(typeof Object); // function

// e toda função tem um atributo chamado ".prototype"

String.prototype.reverse = function () {
    return this.split('').reverse().join('')  // aqui o "this" se refere à String
}
console.log('Maisa Pierini Preis'.reverse())

Array.prototype.first = function () {
    return this[0]                     // aqui o "this" se refere ao Arary
}
console.log([5, 6, 1, 7, 9, 1].first())
console.log(['k', 'u', 'q'].first())

// esse caso aqui tem efeito colateral

String.prototype.toString = function () {
    return `Lascou tudo`
}
console.log("Meu nome é Maisa".reverse()) // ele inverteu o "lascou tudo" e não o "Meu nome é Maisa".
// Não substitua comportamentos que já existam de forma global.

// Sobre o operador NEW.

function aula(nome, videoId) {
    this.nome = nome;
    this.videoId = videoId
}
const aula1 = new aula('Bem Vindo', 316);
const aula2 = new aula('Até Breve', 546);
console.log(aula1, aula2);

// simulando o new, sem usar o new, por meio de uma função. Gera os mesmos resultados.

function novo(f, ...params) {
    const oObjeto = {}
    oObjeto.__proto__ = f.prototype
    f.apply(oObjeto, params)
    return oObjeto
}

const aula3 = novo(aula, 'Bem Vindo', 316);
const aula4 = novo(aula, 'Até breve', 546);
console.log(aula3, aula4)


// Colocando restriçoes nos Objetos.
// Para das mais restrições a toda a flexibilidade que o JS proporciona.

// Object.preventExtensions
// previne que o objeto seja extendido, não podendo adicionar novos atributos. Pode deletar atributos, pode alterar dados..

const produto2 = Object.preventExtensions({
    nome: 'Caneta', preco: 1.66, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto2)) // testa se ele é, ou não, extensével.

produto2.nome = 'Borracha'; // Pode alterar atributos.
produto2.descricao = 'Borracha escolar branca'; // Não adicionou novo atributo.
delete produto2.tag; // Pode deletar.
console.log(produto2)

// Object.seal
// Serve para selar objetos. Não adiciona novos atributos, não deleta atributos, mas deixa alterar atributos.

const pessoa1 = { nome: 'Maisa', idade: '28' };
Object.seal(pessoa1);
console.log('Selado:', Object.isSealed(pessoa1)); // testa se está selado.

pessoa1.sobrenome = 'Pierini'; // não adiciona.
delete pessoa1.nome; // não deleta.
pessoa1.idade = 24; // deixa alterar.
console.log(pessoa1)

// Object.freeze
// Seria o selado, mas sem conseguir alterar os valores dos atributos. Valores constantes.
// Não altera, não adiciona, não deleta.


// JSON vs Objeto.
// Formato textual, diferente da notação literal de objeto.
// Mas o nome é JavaScript Object Notation.
// Mais usado no mercado hoje, pela interoperabilidade entre sistemas. Você consegue ler ele em várias linguagens.


// Objeto para JSON
const objX = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(objX)) // gera no formato textural {"a":1,"b":2,"c":3} . Note que ele não executa a função soma.

// JSON para Objeto
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}')); // Precisa ser exatamente deste formato. Aspas simples no todo, e aspas duplas dentro.
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')); // pode colocar string, boolean, objetos e arrays.


// Classe.
// Trabalhando com o React precisará usar a Classe.
// É uma função. Quando a classe é instânciada, será transformada em uma função construtora.
// o "constructor()" dá os parâmentros da função.

class lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}    

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new lancamento('Salário', 4500);
const contaDeLuz = new lancamento('Luz', -220);

const contas = new cicloFinanceiro(6, 2022);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());

// Classe com Herança.

class avO {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pAi extends avO { // No ambito da Classe, você usa "extends" para referenciar o protótipo, para linkar essa conecxão de 'parentesco'.
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)  // o "super" é para intancia a função construtora da super classe, ele linka com a classe na hierarquia acima dele, no caso aqui "AVO".
        this.profissao = profissao
    }
}

class filhO extends pAi {
    constructor() {
        super('Silva')
    }
}
const filhoX = new filhO
console.log(filhoX)
