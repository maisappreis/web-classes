
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

// Deste modo <Cabecalho />, eu importo um componente. Mas não é invocando aquela função Cabecalho(), é colocando desse formato HTML.
// Formato HTML, mas na verdade, é um elemento JSX.
// O objetivo disso, é ter o reuso, por isso é bom manter Funções Nomeadas, e não anônimas.

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprendendo Next.js na prática." />
        </Layout>        
    )
}

// Para retornar mais de um elemento JSX, é necessário envolve-los com <>Elementos JSX</>

// <>
//    <Cabecalho />
//    <Cabecalho />
// </>