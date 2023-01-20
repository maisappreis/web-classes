
// COMPONENTE DE CLASSE

import React, { Component } from "react";


// Aqui, usando 'this.props' eu acesso as propriedades que foram passadas.

export default class Saudacao extends Component {

    // 'state' ao inves de 'props' para poder ser 'onChange' e não 'read-only'.

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    // Para não precisar chamar uma função ARROW lá em baixo no 'onChange' >>> onChange={e => this.setTipo(e)}
    // Ele faz uma função Construtora aqui em cima, para usar o 'bind' e fazer o 'this' apontar de fato para 'Saudacao'.
    // Pq senão ele aponta para outra coisa.

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this);
        this.setNome = this.setNome.bind(this);
    }

    // Função para receber o evento.    
    setTipo(e) {
        this.setState({tipo: e.target.value}) // função responsavel por alterar o estado. O componente só é atualizado, qnd o estado muda.
        // this.props.tipo = e.target.value // não pode ser 'state' aqui também.
        // console.log(e.target.value) // isso só mostra o valor no console do browser. Evento sendo capturado.
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    // Função para renderizar o componente.
    // Essas 'props' são do tipo apenas leitura, não se pode alterar as propriedades. 
    // Ai que entra o 'state', esse pode ser alterado, o 'props' não.
    render() {
        const { tipo, nome } = this.state // usar destructuring para tirar os 2 atributos de dentro de 'props'. Tipo seria o tipo de saudação, bom dia, boa tarde, boa noite, e nome, o nome de quem estamos saudando.
        return (                          // era 'this.props', agora precisa ser 'this.state'
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/> {/* qnd o evento acontece, ele dispara a função 'setTipo' */}
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}

