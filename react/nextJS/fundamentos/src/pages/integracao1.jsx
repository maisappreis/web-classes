import Layout from "../components/Layout";
import { useState } from "react";

// Vamos acessar as informações que estão no BACKEND, ou seja, o arquivo JSON.
// Para isso, vamos trabalhar com ASSINCRONISMO, poderia ser usando AXIOS, mas vamos usar o FETCH aqui.

export default function Integracao() {

    const [codigo, setCodigo] = useState(1); // estado inicial do código será 1.
    const [cliente, setCliente] = useState({}); // criando um ESTADO, passando para ele um objeto vazio de inicio.

    // OU USANDO APENAS O FETCH, com o método .then() da Promise.

    //function obterCliente() {
        //fetch(`http://localhost:3000/api/clientes/${codigo}`) // isso acontece de forma ASSINCRONA. Cada novo .then() retorna uma 'new Promise'
            //.then(resp => resp.json()) // qnd clicar, ele vai obter o cliente.
            //.then(dados => setCliente(dados)) //  quando o cliente for obtido, ele chama 'setCliente', e vai alterar o estado, que por hora, é um objeto vazio.
   // }

   // OU USANDO O ASYNC AWAIT junto com FETCH, sem o then(), pq aqui não é mais uma Promise.

   async function obterCliente() { // aqui vc trata o código como se fosse SINCRONO, mas não é.
       const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`); // vc faz a chamada e o AWAIT diz para esperar a finalização, para depois ir para proxima linha.
       const dados = await resp.json();
       setCliente(dados);
   }

// esse 'setCodigo' que é responsável por tornal o código alteravel, com base em e(evento do click)
// o 'input' é ligado ao estado interno de um componente.

    return ( 
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <div>
                <ul>
                    <li>Código: {cliente.id}</li>
                    <li>Nome: {cliente.nome}</li>
                    <li>Email: {cliente.email}</li>
                </ul>
            </div>
        </Layout>

    )
}