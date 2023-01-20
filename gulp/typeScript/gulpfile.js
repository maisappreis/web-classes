
const {series} = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

// Transformação TypeScript em JavaSript.

function transformacaoTS() {
    return tsProject.src() // 'src' é o código fonte. src = source code.
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS);