// https://www.typescriptlang.org/docs/handbook/gulp.html 

const { series, parallel, src, dest } = require("gulp");
const del = require("del");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

function limparDist() { // limpa/deleta a pasta 'dist' após chamar o build, se ela existir.
    return del(["dist"])
}

function copiarHTML() {
    return src("public/**/*")
        .pipe(dest("dist")) // copia da pasta 'public' para a pasta de destino: 'dist'.
}

function gerarJS() {
    return browserify({
        basedir: ".",
        entries: ["src/main.ts"]  // arquivos de entrada.
    })
        .plugin(tsify) // vai ler o Typescript
        .bundle()
        .pipe(source("app.js"))
        .pipe(dest("dist"))
}

function gerarJSProducao() {
    return src("dist/app.js")
        .pipe(rename("app.min.js"))
        .pipe(uglify())
        .pipe(dest("dist"))
}

exports.default = series(
    limparDist,
    parallel(gerarJS, copiarHTML),
    gerarJSProducao
)