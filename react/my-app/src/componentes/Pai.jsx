
// COMPONENTES PAI E FILHO

import React from "react";
// import Filho from "./Filho";
import { childrenWithProps } from "../utils/utils";


export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        {/* <Filho nome="Renan" sobrenome={props.sobrenome} />
        <Filho {...props} />
        <Filho {...props} nome="Joana" /> */}
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, { ...props, ...props.children.props })} */}
        
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props, ...child.props })
        })} */}

        {childrenWithProps(props)}
        
    </ul> 
</div>

// O Filho herda o 'sobrenome' do Pai, isto é, pega um parâmentro do Pai e setta para o Filho.