// Frameworks Web
// Express.js - possibilita criar aplicações para os web services da aplicação - backend | Muito usado em Node.
// Existe framework para frontEnd e frameworks para backEnd
// A biblioteca ela é pronta, tem um conjunto de funcionalidades prontas para serem usadas, 
// Diferente de um framework, ele é algo que estrutura sua aplicação, um arcabolso para desenvolver a aplicação. Constroi a aplicação em cima dele.

// Padrão Middleware. Muito presente no Node.
// Padrão Chain of reponsability
// Por exemplo, ao inves de ter um função executando um processo X com passo A, B e C dentro dessa função.
// Agora eu tenho 3 funções para executar o processo X, cada uma fazendo um dos passos A, B e C. 
// Sem haver uma dependencia do passo anterior ou seguinte. Pode ter um função next() para chamar o próximo ou nao.
// Assim é melhor para reutilizição destes passos.

// MIDDLEWARE PATTERN (Chain of Responsability)
// No Express o Middle vai ter 3 parâmentos: request (requisição), response (resposta) e next().


const passo1 = (ctx, next) => {  // 'ctx' de contexto, um objeto que vai sendo passado de uma passo para o outro, de um middleware para o outro
    ctx.valor1 = 'mid1'          // criou um atributo para o objeto.
    next()         // função que chama o próximo passo.
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3';  // Aqui ele não queria um próximo passo, e por isso não incluiu a função next().


const exec = (ctx, ...middlewares) => { // recebe de parâmentro o contexto, mais um conjunto de funções middlewares. Vai deixar tudo dentro de um array.
    const execPasso = indice => {    // ele vai pegar o índice, e procurar o elemento dentro desse array de middlewares.
        middlewares && indice < middlewares.length  &&  // para não executar um método que está fora do array.
            middlewares[indice](ctx, () => execPasso(indice + 1))  // aqui vai chamar a função de parâmetro contexto. Ele vai executando de índice em índice, até chegar no final do comprimento do array.
    }
    execPasso(0) // inciando no índice 0
}

const ctx = {};
exec(ctx, passo1, passo2, passo3);

// Esse "...middlewares" são o "passo1, passo2, passo3", que ele vai juntar em um array, e dar a ele um índice.

console.log(ctx);

// Você pode trocar a ordem dos passos, pode não chamar algum deles, 






