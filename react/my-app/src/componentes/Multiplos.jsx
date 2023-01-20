
// EXPORTANDO COMPONENTES MULTIPLOS

import React from "react";

// quando coloca 'export default', geralmente se coloca a função anônima, ou seja, não coloca 'const nome', nem 'let nome'

// E para exportar multiplos componentes, precisa colocar apenas 'export', com o nome da variável. Cada um deles é um componente.

export const BoaTarde = props => <h1>Boa Tarde, {props.nome}!</h1>;

export const BoaNoite = props => <h1>Boa Noite, {props.nome}!</h1>;

// Eu também posso usar o 'default' para exportar os 2 como objetos.

export default { BoaTarde, BoaNoite };