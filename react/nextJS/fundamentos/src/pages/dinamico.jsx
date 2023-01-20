import Layout from "../components/Layout";

// Geração Conteúdo Estático com o Next.js

// Agora vamos fazer com que o número do 'Math.random()' continue se modificando de forma aleatória.

// Após isso, dou o comando 'npm run build', e ele agora gera conteúdo dinâmico.
// Ai dou um 'npm start', e então, o meu 'Math.random()' volta a gerar números aleatórios quando atualizo a página.

// Essa função abaixo pode ser com ASYNC AWAIT.

export function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico(props) {
    return (
        <Layout titulo="Conteúdo Dinâmico">
            <div>{props.numero}</div>
        </Layout>
    )
}