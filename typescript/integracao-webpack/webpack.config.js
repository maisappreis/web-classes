const path = require("path"); // dependência do Node.
const CopyPlugin = require("copy-webpack-plugin");

// Objeto que será exportado representa a configuração do Webpack 

module.exports = {
    mode: "production",  // development
    entry: "./src/main.ts",
    output: {
        filename: "app.min.js",
        path: path.join(__dirname, "dist") // local do dá saída/output. 
    }, // "__dirname" dá o nome do diretório atual que está sendo acessado, dá o caminho base, e esse é juntado com o "dist".

    devServer: { // servidor
        static: {
            directory: path.join(__dirname, "dist"),
        },        
        port: 9000,
        compress: true // aqui seria o hot reload, faz reload automático.
    },

    plugins: [
        new CopyPlugin({
             patterns: [{ from: "public" }], // a pasta de saída será a mesma ali em cima, a pasta "dist".
         }),
    ],

    resolve: {  
        extensions: [ ".ts", ".js" ]  // ele espera arquivos '.js' então precisa resolver para '.ts'.
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader", // responsável por ler os arquivos ".ts"
            exclude: /node_module/
        }]
    }
}