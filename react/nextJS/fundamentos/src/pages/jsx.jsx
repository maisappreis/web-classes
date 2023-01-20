
// Fora do 'return' eu tenho um código de JavaScript puro, diferente do que tenho dentro do 'return', que é o JS extendido.
// Eu não posso colocar JS puro dentro de return, exceto que esteja entre chaves {}.

import Layout from "../components/Layout";

export default function Jsx() {
    const a = 2;
    const b = 5;
    console.log(a * b);

    const objeto = {nome: "Maisa", ideda: 28 };
    const titulo = <h1>Integração entre JS e JSX</h1>

    function subtitulo() {
        return <h2>Posso chamar dentro do return variáveis, retornar arrays e invocar funções.</h2>
    }

    return (
        <Layout titulo="Entendendo JSX/React">
            <div>
            {titulo}  
            {subtitulo()}
            <h4>{"isso é nota".toUpperCase()}</h4> 
            <h4>{a * b}</h4>

            <p>
                {JSON.stringify({objeto})}
            </p>
        </div>

        </Layout>
        
    )
}