
// Componente baseado em Função, não em Classe.

// Posso acessar isso no endereço abaixo, ou seja, o Next.js foca em não precisar configurar as coisas.
// Isso por causa das convenções, então criar um arquivo dentro de "pages", automaticamente tenho acesso a ele pelo mesmo caminho das pastas.
// http://localhost:3000/teste

// Vai ser criado e exportado um componente normalmente em React, mas com a vantagem de ter esse componente associado a uma URL.
// {{}} isso representa um objeto dentro do um elemento JS.

import Navegador from '../components/Navegador';

export default function Inicio() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh"
        }}>
            {/* <h1>Fundamentos de Next.js & React</h1>
            <h2>Vamos estudar esse framework</h2> */}

            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="#c200c5"/>
            <Navegador texto="Integração com API #01" destino="/integracao1" cor="#ff7b00"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"/>
            <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="green"/>
        </div>
    )
}

// destino="/navegacao"
// Foi para pasta 'navegacao' mesmo não referenciando "/navegacao/index.jsx" porque está dentro de um arquivo 'index.jsx'