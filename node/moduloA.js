
// EXPORTAÇÃO no Node.
// No Node, um arquivo representa um módulo.
// Usando Node como servidor, ele pode funcionar como apache, como servidor Web, prover página, prover vídeo, prover imagem, 
// gerar conteúdo dinâmico. Ou srrvir como API do seu sistema.
// Você organiza uma aplicação backend em Node em pastas e em arquivos(módulos).
// Tudo que está escrito dentro de um módulo, fica visível apenas dentro do módulo. 
// Para ficar visível fora, é preciso exportar.


// São 3 formas de exportar:

this.cumprimento = "Fala pessoal!"; // É um objeto. O atributo "cumprimento" foi criado dentro do objeto de forma dinâmica.

exports.bemVindo = "Bem Vindo ao Node!"; // É um objeto. O atributo "bemVindo" foi criado dentro do objeto de forma dinâmica.

module.exports.ateLogo = "Até Logo!"; // É um objeto. O atributo "ateLogo" foi criado dentro do objeto de forma dinâmica.


// Não posso ter dois "module.exports" escritos no mesmo módulo/arquivo.

console.log(module.exports); // imprime todo o objeto criado por "this", "exports" e "module.exports".

console.log(module.exports === this); // true
console.log(module.exports === exports); // true


