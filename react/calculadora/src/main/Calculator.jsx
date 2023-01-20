import React, { Component } from "react";
import './Calculator.css';

import Button from "../components/Button";
import Display from "../components/Display";

// Aqui vamos fazer a calculadora calcular de fato.

const initialState = {
    displayValue: "0",  // valor no display.
    clearDisplay: false,  // variável que determina se o display será limpo ou não.
    operation: null,  // variavel que vai armazenar a operação.
    values: [0, 0], // array que armazenará os 2 valores.
    current: 0  // vai dizer qual valor está sendo manipulado no momento, se será o valor de índice 0 do array, ou o valor de índice 1.
}

// No React, dentro do .jsx, usar 'className', e não apenas 'class' como é de costume.

export default class Calculator extends Component {

    state = {...initialState}; // aqui ele cria um clone do objeto 'initialState'.

    // Quando clicado em 'AC' na calculadora.
    clearMemory() {
        this.setState({ ...initialState });
        //console.log("Limpar")
    }

    // Quando clicado nos operadores +-/*
    setOperation(operation) {
        if(this.state.current === 0) { // se o índice do array for o 0
            this.setState({ operation, current: 1, clearDisplay: true }) // em 'operation', mude o índice para 1, e limpe o display.
        } else {
            const equals = operation === '='; // caso seja clicado no '='
            const currentOperation = this.state.operation; // caso seja feita uma segunda operação em sequencia. Tipo, clicar no + duas vezes.

            const values = [...this.state.values]; // cria um clone de 'values'
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`); // vai fazer o calculo do valor em cima da função 'eval()', poderia ser um 'swicth', mas o código ficaria grande. Também poderia ser 'if else'. O eval() vai gerar uma advertencia.
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
            } catch(e) {
                values[0] = this.state.values[0];
            }
            
            values[1] = 0; // o resultado da operação vai ficar armazenado no índice 0, e o índice 1 será zerado.

            this.setState({
                displayValue: values[0], // o resultado 'values[0]', será exibido no display 'displayValue'
                operation: equals ? null : operation, // se clicou no '=' finalizou, e se clicou em outro operador, voltar pra fazer a operação.
                current: equals ? 0 : 1, // se clicou no '=', vai mexer no índice 0, senão, no índice 1
            })
        }
        // console.log(operation)
    }

    // Quando clicado em qualquer botão.
    addDigit(n) {
        if(n ==='.' && this.state.displayValue.includes('.')) { // regra para proibir que sejam adicionados 2 pontos na calculadora.
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay; // limpar display qnd tiver um '0', e qnd 'clearDisplay' estiver como 'true'.
        const currentValue = clearDisplay ? '' : this.state.displayValue; // se 'clearDisplay' igual 'true', pega vazio, senão, pega o valor. 
        const displayValue = currentValue + n; // pega o novo valor.
        this.setState({ displayValue, clearDisplay: false })

        // agora, manipulando o Array 'values: [0, 0]'

        if(n !== '.') {
            const i = this.state.current; // esse 'i' está manipulando o índice, que pode ser o índice 0 ou 1.
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values]; // clonou para um novo Array.
            values[i] = newValue;
            this.setState({ values }); // adiciona o Array no ESTADO do meu objeto. E ai substitui o 'values: [0, 0]'
            // console.log(values);
        }

        // console.log(n)
    }

    render() {
        const addDigit = n => this.addDigit(n); // esse 'this' representa o elemento atual.
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" click={setOperation} operation />
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation />
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation />
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation />
                <Button label="0" click={addDigit} double />
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation />
            </div>
        )
    }
}