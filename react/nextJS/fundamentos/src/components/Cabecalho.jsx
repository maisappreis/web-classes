
// as 'props' são apenas leitura, não se pode editar.

export default function Cabecalho(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}