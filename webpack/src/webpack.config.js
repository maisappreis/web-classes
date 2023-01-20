
// Esse arquivo está com o nome padrão de um arquivo 'webpack'.
// É um arquivo que será interpretado pelo Node, então dentro dele será usado a Sintaxe que o Node entende, o sistema de módulos.

const TerserPlugin = require('terser-webpack-plugin');
const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCSSAssetsPlugin = ('optimize-css-assets-webpack-plugin');

// vai exportar um objeto que representa toda a configuração do meu script do Webpack.

module.exports = {
    mode: modoDev ? "development" : "production",           // primeiro será a partir do modo de desenvolvimento.
    entry: "./src/index.js",        // aqui é onde está a minha entrada.
    output: {
        filename: "index.js",
        path: __dirname + "/public"  // '__dirname' variavel de ambiente do Node. Fornece o caminho absoluto do diretório do módulo atual, que contém o arquivo em execução no momento, que também é semelhante ao path.dirname() do nome do arquivo.
    }, // dirname aponta para o 'raiz', que seria a pasta 'webpack'.
    devServer: {
        contentBase: "./public",
        post: 9000
    },
    optimization: {
        minimizer: [
            new optimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{                 // puglis que serão adicionados
            test: /\.s?[ac]ss$/,  // encontra os arquivos .css .scss .sass
            use: [
                miniCssExtractPlugin.loader,              
                // 'style-loader',   // adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader',      // interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}


// webpack 4 doesn’t need a configuration file by default!
// Webpack 4 there is no need to define the entry point: it will take ./src/index.js as the default!


// Comandos:
// npm start
// npm run build

// Não funcionaram:
// PS C:\apps\aulasWeb\webpack> (npm start) -and (node ./dist/main.js)
// PS C:\apps\aulasWeb\webpack> npm start -and node public/index.js

// Não consigo fazer ele criar a pasta 'public' com o 'index.js' dentro dela.





