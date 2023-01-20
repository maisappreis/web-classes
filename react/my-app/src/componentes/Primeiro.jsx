
// Esse arquivo poderia ser apenas .js também, não necessariamento .jsx
// Na hora de importar, não precisa colocar a extensão, pq ele já entende que seja .js ou .jsx

import React from "react";

// Isso aqui <h1>Primeiro</h1> é .jsx - E por isso, precisa importar o React.
// Isso é um componente funcional, baseado em função. Essa função renderiza parte da sua página.

export default function() {
    return <h1>Primeiro</h1>
}

// export default () => <h1>Primeiro</h1>
// mesmo resultado com função Arrow.