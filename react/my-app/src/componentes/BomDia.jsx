
// COMPONENTES COMO PARÂMENTRO

import React, { Fragment } from "react";

// export default () => <h1>Bom dia, Maisa!</h1>

// Por padrão, 'props' como parâmentro, de propriedade. 

// export default props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1> 
//         <h2>Até breve!</h2>
//     </div>

// export default props => 
//     <Fragment>
//         <h1>Bom dia, {props.nome}!</h1> 
//         <h2>Até breve!</h2>
//     </Fragment>

// Você pode envolver os elementos dentro de uma 'div' quando foi mais de um.
// Mas caso você não queria que essa 'div' apareça no seu HTML, então você envolve com 'React.Fragment', ou apenas 'Fragment', se importar ele.
// que ai, esses h1 e h2 ficam direto dentro do 'body' raiz (root).

// OU ainda, posso colocar dentro de [], dentro de um array.

export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>    
]