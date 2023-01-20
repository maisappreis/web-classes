import React from "react";

interface IContadorValorProps {
    contador: number
}

// componente funcional, sem estado.

export default (props: IContadorValorProps) => {
    return (
        <p>{props.contador}</p>
    )
}