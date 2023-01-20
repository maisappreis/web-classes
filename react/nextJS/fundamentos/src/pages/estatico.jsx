import Layout from "../components/Layout";

// Geração Conteúdo Estático com o Next.js

// Para não gerar resultado diferentes do lado do Servidor e do lado do Cliente, uma vez que cada uma deles roda JS do seu lado,
// E que a pré-renderização do lado do servidor pode ser difenrent doq rodou no cliento, como acontece com o "Math.random", 
// se uma essa função, 'getStaticProps'.

// Após isso, dou o comando 'npm run build', e ele gera os conteúdos estáticos.
// Ai dou um 'npm start', e então, o meu 'Math.random()' não fica mais gerando número aleatórios quando atualizo a página.

// Essa função abaixo pode ser com ASYNC AWAIT.

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}