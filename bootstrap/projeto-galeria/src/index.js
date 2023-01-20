
// Escrevi todos os códigos da aula, porém eu não consigo fazer o Webpack funcionar com essas versões antigas.
// Ele não gera a pasta node_modules quando tento instalar as dependencias com 'npm i'
// E por isso, ele não roda o build 'npm run build'


// Arquivos SASS

import './scss/index.scss';

// Importa dependencias
// Quando não tem referencia de formato, o Webpack vai concluir que seja .js

import 'jquery';
import 'bootstrap';

// Meus arquivos JS

import './js/core/includes';
import './js/plugins/cityButtons';
