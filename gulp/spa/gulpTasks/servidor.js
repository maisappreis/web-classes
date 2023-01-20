
// Servidor usado em Desenvolvimento, não em Produção.
// Vai ajudar o fluxo de desenvolvimento.
// Todos arquivo que foi atualizado, o servidor é restartado, e ele atualiza automaticamente.

const { watch } = require('gulp');
const gulp = require('gulp');
const webserver = require('gulp-webserver');

function servidor() {
    return gulp.src('build') // ele vai ficar olhando para a pasta 'build'
    .pipe(webserver({
        port: 8080,    // a porta
        open: true,     // se quer que abra o browser
        livereload: true,
    }))
}

// Essa função monitora todos os arquivos, e qualquer alteração do código, ele já faz a atualização da página.

function monitorarArquivos(callback) {
   watch('src/**/*.html', () => gulp.series('appHTML')())
   watch('src/**/*.scss', () => gulp.series('appCSS')())
   watch('src/**/*.js', () => gulp.series('appJS')())
   watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

   return callback()
}


module.exports = {
     monitorarArquivos,
     servidor
}