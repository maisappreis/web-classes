
// O Gulp executa uma serie de funções, que são uma série de tarefas, que vão automatizar os precessos dentro da sua aplicação.
// Essas tarefas podem ser sequenciais, ou até de forma paralela, sem dependencia entre elas.

// Objetivo da aula: copiar todos os arquivos da pasta A, para uma pasta B.

const gulp = require('gulp');
const { series, parallel } = require('gulp');

// const series = gulp.series;  // 'series' está dentro de 'Gulp'. Series seria tarefas sequenciais.
// const { series } = require('gulp'); // outra possibilidade de chamar o 'series'.

const antes1 = callback => {
    console.log('Tarefa Antes 2!')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes 2!')
    return callback()
}

function copiar(callback) { // a callback é chamada qnd se encerra uma tarefa, para o Gulp saber que ela foi encerrada.
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // outra maneira de copiar todos: 'gulp.src('pastaA/**/*.txt)'
        .pipe(gulp.dest('pastaB'))
        // .pipe(imagemPelaMetade()) // para aplicar transformações nos arquivos de entrada.
        // .pipe(imagemPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim!')
    return callback()
}

module.exports.default = series( // função copiar será executada em série.
    parallel(antes1, antes2),
    copiar,
    fim,
)

// Ele espera que dentro da pasta tenha um arquivo 'gulpfile.js'.
