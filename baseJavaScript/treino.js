// Questões mais fodas Exercícios 1: 20 e 27.
// Questões mais fodas Exercícios 2: 
// Refazer diáriamente até acertar SEM VER por 3 dias consecutivos.

// Revisão de tudo. Olhar todas as aulas, e praticar aquilo que ainda não pratiquei. Parei em: aula 15, linha 226. 

// TREINAR:
// Destructuring (aula 5)
// Estrutura de repetição FOR/IN (aula 10)
// Callback (aula 13)
// Call e Aplly (aula 14)
// Função Factory (aula 14)
// Classe ()
// Função IIFE

// NÃO ENTENDO OU ENTENDO POUCO:
// THIS/modular.exports, Função Bind e SELF. (aula 12)
// Tratamento de erro: Try, Catch e Throw (aula 8)
// Prototype
// in arguments (aula 11)
// Getter & Setters (aula 15)

// DÙVIDAS:
// Não entendi o zero dos exercícios de .reduce





const notasAlunos = {
    Joao: [5.2, 6.9, 10],
    Maria: [9.9, 5.8, 8.7],
    Duda: [10, 10, 9.5]
}

const soma = notas => notas.reduce((acumulador, atual) => acumulador + atual, 0);
const media = notas => soma(notas) / notas.length;

function melhorEstudante(notasAlunos) {
    let alunosComNotas = Object.entries(notasAlunos).map(estudante => {
        const chave = 0;
        const valor = 1;

        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const alunosOrdenados = alunosComNotas.sort((a, b) => + b.media - a.media);
    const melhorAluno = alunosOrdenados[0];
    return melhorAluno;
}

console.log(melhorEstudante(notasAlunos))
