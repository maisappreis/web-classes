
import React from 'react'; // isso é quem chama as função do React, chama inclusive a extensão do JavaScript.
import ReactDOM from 'react-dom'; // essa é a parte do React que conversa com a página, conversa com a DOM.

// Para renderizar dentro da página.
// Vai jogar o conteúdo para dentro da página, dentro da 'div' que estão dentro de 'index.html'. Essa 'div' tem um id=root

// Todos os componentes personalizados, ou seja, criados por mim, precisam começar com letra MAIUSCULA. É padrão do React.

// import BomDia from './componentes/BomDia'; // esse 'Primeiro' precisa ser arquivo com a primeira letra maiuscula.
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'; // como eu usei o 'export default' lá, eu poderia agora, não envolver com {}, não usando o 'destructuring'.
// import Saudacao from './componentes/Saudacao';
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

// para importar os componentes multiplos, usar o operador 'destructuring' {}

ReactDOM.render(
    <div>
        <Pai nome="Maisa" sobrenome="Pierini Preis">
            <Filho nome="Pedro" />
            <Filho nome="Joana" sobrenome="Silva" />
            <Filho nome="Maitê" sobrenome="Silva" />
        </Pai>
    </div>
    , document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         {/* <BomDia nome="Renan" /> */}
//         <BoaTarde nome="Maisa" />
//         <BoaNoite nome="Duff" />
//     </div>
// , document.getElementById('root'));


// <BomDia></BomDia> ou <BomDia /> pode ser assim tmb, mas precisa fechar.

// ReactDOM.render(<h1>React</h1>, document.getElementById('root'));

// NOTE: tem um texto que parece HTML, como parâmetro de uma função JavaScript. O JS não suporta isso, isso não é JS puro.
// Isso é uma sintáxe do Reack: JSX, JS extendido. Mas ali não é HTML, é o JS extendido, que será substituido/convertido (transpile).
// Vai ser parecido com isso $('<h1>).html('React');

// Eu poderia colocar ele dentro de uma variável.

// const elemento = <h1>React</h1>;


// OUTRA MANEIRA, por usar o 'export default'

// import Multi from './componentes/Multiplos';

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Maisa" />
//         <Multi.BoaNoite nome="Duff" />
//     </div>
// , document.getElementById('root'));
