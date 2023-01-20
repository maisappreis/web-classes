import React from "react";
import './Button.css';

// Aqui vai criar um componentes funcional, ou seja, sem estado.
// Quando mais componentes sem estado, melhor será para a aplicação.
// Mas eventualmente, vai precisar de componentes com estado, eles são mais difíceis de manter, eles variam, 


// Dentro das crases, dentro da template string, ele vai colocar código JavaScript puro.
// se a propriedade 'props' estiver definida, ele vai aplicar a classe 'operatirion', senão, coloca vazio.

// export default props =>
//     <button className={`
//         button
//         ${props.operation ? "operation" : ""} 
//         ${props.double ? "double" : ""}
//         ${props.triple ? "triple" : ""}
//     `}>
//         {props.label}
//     </button>

// De outra forma:

export default props => {
    let classes = "button ";
    classes += props.operation ? "operation" : "";
    classes += props.double ? "double" : "";
    classes += props.triple ? "triple" : "";

    // função 'onClick' para pegar o conteúdo do botão quando clicado nele.
    return (
        <button 
             onClick={e => props.click && props.click(props.label)}
             className={classes}>
             {props.label}
        </button>
    )
}