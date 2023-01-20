
const gulp = require('gulp');
const {series} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');



function transformacaoJS(callback) {
    gulp.src('src/**/*.js') // filtar arquivos dentro de 'src' e que são '.js'
        .pipe(babel({   // Pegando o código JavaScript, e convertendo para uma versão mais compatível para os browser suportarem.
            comments: false,  // para vir sem comentários.
            presets: ["env"], // vai pegar o JavaScript mais novo possível.
        }))
        .pipe(uglify()) // ele vai minificar o código, minimilizar ele, tudo em uma única linha e sem espaços.
        .pipe(concat('codigo.min.js')) // pega todos os arquivos que já foram convertidos, minificados, e vai concatenar em um arquivo com aquele nome ali.
        .pipe(gulp.dest('build')) // pasta de destino.

        // .on('error', err => console.log(err)) // poderia colocar isso entre os '.pipe()' para detectar erro.

    return callback()
}

exports.default = series(transformacaoJS);