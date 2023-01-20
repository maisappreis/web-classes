
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"; // isso está em um servidor remoto da Cod3r.

const axios = require('axios'); // axios é um "client" http. Ele faz requisições pra obter algo que está remoto.


const chineses = funcionario => funcionario.pais === "China";  // isso é o método "filter".
const mulheres = funcionario => funcionario.genero === "F";    // isso é o método "filter".
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual  // isso é o método "reduce".
}


// Daqui pra baixo é como ele obtem a lista.

axios.get(url).then(response => {   // método "get" do protocolo http. Aqui ele vai obter o conteúdo do URL.
    const funcionarios = response.data
    // console.log(funcionarios)   

    // Mulher chinesa com menor salário:

    const funcionario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario); // por isso aqui ele chama "filter/filter/reduce".

    console.log(funcionario);
}) 


// SOBRE a o 'package.json'

// Deps & Scripts criar scripts dentro do arquivo packageJSON para poder executar a partir do terminal.
// E a partir do packageJSON você pode recriar a pasta 'node_modules'.

// PS C:\apps\aulasJavaScript\node\packageJSON> npm i
// Ele recriou a pasta 'node_modules' pelo terminal. 
// Esse comando funciona dentro da pasta onde está o 'package.json'.

// PS C:\apps\aulasJavaScript\node\packageJSON> npm start
// PS C:\apps\aulasJavaScript\node\packageJSON> npm run dev
// Com esse comando 'start' ou 'run dev' você roda/executa um script dentre de 'package.json'.
// No caso do 'dev' como ele não é um script pré definido pelo Node, é preciso colocar o 'run' na frente.

