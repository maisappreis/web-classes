
const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

// Trasformando o SASS em CSS. 

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) // transformando o .scss em .css + tratamento de erro
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

// Copiar o HTML para a pasta 'build'. E então a página 'index.html' ficou estilizada com o arquivo .css dentro dela.

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}


module.exports.default = parallel(transformacaoCSS, copiarHTML);

