// Função Factory. Fabrica objetos. O objeto é colocado após o return. "return { }".
// Com Factory você pode criar vários objetos usando apenas uma única função.
// Classe versus Factory. A Classe no JS é como uma função, mas escrita de forma diferente.
// Função IIFE. Uma função auto invocada. Função dentro de parênteses. Dentro dela, toda variável será apenas local.
// Call & Apply. (linha 98) Formas de chamar uma função que é ligada a um objeto.

// -----------------------------------------------------------------------------------------

/* Função Factory. */ console.log("Função Factory....");
// É uma função que retorna um objeto. Fabrica uma instancia de objeto.
// Quando você tem vários objetos para criar, pra não ficar repetindo, usar a Factory.


// Factory Simples. É uma função retornando objeto.

function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"    // No "return" se coloca um objeto entre {}.
    }
}
console.log(criarPessoa()); // Criou apenas 1 objeto. { nome: 'Ana', sobrenome: 'Silva' }

// Outra forma da Factory.

function criarProduto(nome, preco) {
    return {
        nome,         // Aqui não é necessário colocar o : mais o valor. Porque estes atributos estão lá como parâmentros da função.
        preco,
        desconto: 0.1    // Como "desconto" não está como parâmentro, ele precisa ser colocado do jeito tradicional aqui.
    }
}
console.log(criarProduto("Notebook", 3499.99));
console.log(criarProduto("Smartphone", 1999.99));
console.log(criarProduto("Tablet", 860.99));

// Assim é possível gerar vários objetos. Criou 3 objetos usando a mesma função.


// Classe versus Factory.

class pessoaY {
    constructor(nome) {    // Esse "constructor" serve para iniciar as variáveis.
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)   // precisa do "this" aqui para ele procurar o nome fora do bloco.
    }
}
const p1 = new pessoaY("Maisa");
p1.falar();
const p2 = new pessoaY("Renan");
p2.falar();

// Outra forma de fazer.
// A vantagem dessa abaixo é que ela funcionaria no browser, porque não tem o "this".
// No browser o "this" nem sempre vai apontar para aquilo que você espera.

const pessoaZ = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = pessoaZ("João");
p3.falar();


// Transformando a Factory em Função Construtora.
// Palavra Classe>Function | atributo do Constructor>Parâmentro.

function pessoaA(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`) // Sem esse "this" aqui, não teria como alterar o "nome". Porque ele não existiria fora dessa função.
    }
}

const p4 = new pessoaA("Izabel");
p4.falar();

// Função IIFE - Immediately Invoked Function Expression.
// É uma função auto invodaca. Usada para fugir do escopo global.
// É mais util dentro do browser, porque no Node cada arquivo tem seu escopo.

(function() {
    console.log("Será executada na hora!");
    console.log("Foge no escopo mais abrangente!")
})()

// Basicamente colocar uma função dentro de (function);
// E finalizar ela colocando os (), para invoca-la.
// Qualquer variável criada aqui dentro, inclusive o "var", estará disponível apenas dentro dessa função.


// Call & Apply.
// São duas formas de chamar uma função.

function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4588.00,
    desc: 0.15,
    getPreco        // ele vai criar um atributo a este objeto, que remeterá a função dele.
};

console.log(getPreco()); // dá NaN, porque vai direto pra função, e no contexto da função não existe preço definido.
// global.preco = 20;
// global.desc = 0.1; // Colocando essas 2 declarações acima, a chamada feita ali funcionaria.

console.log(produto.getPreco());

// Agora com o CALL e com APPLY.

const carroX = { preco: 59960, desc: 0.20 };

console.log(getPreco.call(carroX));
console.log(getPreco.apply(carroX));

const carroY = { preco: 59960, desc: 0.20 };

console.log(getPreco.call(carroY, 0.20, "R$"));  // no caso aqui, dentro dos parâmentros está: "(objeto, imposto, moeda)".
console.log(getPreco.apply(carroY, [0.20, "R$"])); // que seriam os parâmentros da função "getPreco".
console.log(getPreco.apply(global, [0.20, "R$"])); // Era pra esse funcionar, mas não achei o problema aqui.