
// Esse arquivo vai ler o 'arquivo.json'.
// Ler um arquivo usando Node. Ter acesso à uma leitura de arquivo, ou escrever um arquivo do lado do servidor.
// Módulo de 'file system' é o responsável por ler e escrever. É um módulo Core, vem previamente instalado no Node.

const fs = require('fs')

const caminho = __dirname + '/arquivo.json';

// ler de forma SINCRONA... forma não muito interessante de trabalhar. Não recomendado.

const conteudo = fs.readFileSync(caminho, 'utf-8') // esse UFT-8 está ali no canto inferior direito, é o 'encoding'.
console.log(conteudo);

// ler de forma ASSINCRONA... forma mais interessante. Mais recomendado.

fs.readFile(caminho, 'utf-8', (err, conteudo) => { // Aqui tem 2 parâmentros, o primeiro é Erro, e o segundo Conteudo.
    const config = JSON.parse(conteudo);                           // só vai funcionar se esse 'config' for um objeto.
    console.log(`${config.db.host}:${config.db.port}`)
})

// Ao inves de receber como resposta o conteúdo, ele passa uma callback.
// E quanto tiver lido o arquivo, ele chama a callback pra você fazer os tratamentos que precisa em cima do arquivo.
// Manda callback, quando o arquivo é tiver carregado, ela vai ser disparada de volta, afeta a ordem da resposta.


const config = require('./arquivo.json');
console.log(config.db);  // { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }
// essa resposta veio antes da função de cima.


// Ler diretório.

fs.readdir(__dirname, (err, arquivos) => { // esse '__dirname' é uma constante do Node que representa o diretório atual.
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
}) 
// ele leu todos os arquivos da minha parta "node".