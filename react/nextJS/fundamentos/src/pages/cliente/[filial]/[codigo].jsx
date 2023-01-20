import Layout from "../../../components/Layout";
import { useRouter } from "next/router"; // isso vai me ajudar a ter acesso ao código.

// Navegação Dinâmica.
// Usando o nome [codigo].jsx faz com que a nagegação seja dinâmica, ou seja, esse [codigo] pode ser um número, uma string.
// Isso graças aos conchetes []

export default function ClientePorCodigo() {
    const router = useRouter();

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}