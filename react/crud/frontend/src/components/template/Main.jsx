// Vai ter a refenrencia do Principal e do Header, porque meu header vai ficar mudando.

import './Main.css';
import React from 'react';
import Header from './Header';

const Main = props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

export default Main;

// Header {...props} >> com isso, as propriedades de 'main' vão ser copiadas para o 'header'.
// esse React.Fragment não gera um elemento HTML na hora de renderizar a página
// por isso, o 'header' e o 'main' estarão disponíveis diretamente, sem nada envolvendo eles.