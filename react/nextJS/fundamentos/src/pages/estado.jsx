import Layout from "../components/Layout";
import { useState } from "react"; // useState() Função dentro de React Hooks para ter ESTADO INTERNO dentro de Componente Funcional.

// Componente com Estado Interno - NOTE: Não foi preciso usar a CLASSE, acho que isso é uma atualização nova.
// É necessário criar o estado para que a interface gráfica (aquilo que aparece na página do browser) se modifique.

export default function Estado() {

    // const state = useState(0); // Cria o estado com essa função do React. Esse 'state' é uma ARRAY de 2 posições [valor, função()].
    // Substituindo o anterior por uma sentenca usando Destructuring.

    const [numero, setNumero] = useState(0); // Diretamente já defino os valores dos índices 0 e 1 do meu ARRAY. Sem precisar das variáveis abaixo. Função dentro de React Hooks.

    // let numero = state[0]; // índice 0 do array, o próprio número na <div>
    // let incrementarNumero = state[1]; // índice 1 do array, a função que será responsável por incrementar o número, no <button>.

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}