
// Estrutura inteira do 'build'.

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function appHTML() {
    return gulp.src('src/**/*.html') // minificar html e jogar dentro da pasta 'build'.
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

// Jogou o SASS convertido para CSS para dentro da pasta 'build'

function appCSS() {
    return gulp.src('src/assets/sass/index.scss') 
        .pipe(sass().on('error', sass.logError))        // converteu SASS para CSS
        .pipe(uglifycss({ "uglyComments": true }))      // deixou o arquivo todo em 1 linha e sem espaços
        .pipe(concat('app.min.css'))                    // concatenou
        .pipe(gulp.dest('build/assets/css'))            // pasta de destino
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML);
gulp.task('appCSS', appCSS);
gulp.task('appJS', appJS);
gulp.task('appIMG', appIMG);

// Exportando todas as funções acima:

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}