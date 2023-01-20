import React, { Component } from "react";
import ContadorValor from "./ContadorValor";
import logRender from "../decorators/logRender"; // precisa ativer em "tsconfig" >>> "experimentalDecorators": true

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState { // interface do estado do contador.
    valor: number
}

// Esse componante terá um ESTADO.

@logRender
export default class Contador extends Component<IContadorProps, IContadorState> { // tipo Generics.

    public state = { valor: this.props.valorInicial || 0 } // o State é por padrão, público. Se não estiver settado, será 0.

    private setValor  = (delta: number) => { // usando Arrow para garantir o valor do "this".
        this.setState({
            valor: this.state.valor + delta // alterando o valor do estado.
        })
    }

    render() {
        return (
            <div>
                <ContadorValor contador={this.state.valor} /> 
                <button onClick={() => this.setValor(10)}>+</button>
                <button onClick={() => this.setValor(-10)}>-</button>
            </div>
        )
    }
}