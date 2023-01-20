
// No NODE:
// Importar: require()
// Exportar: module.exports(), exports()

// Nativo do JavaScript (ECMA):
// Importar: import
// Exportar: export default


// Forma nativa de exportar no JavaScript

import Pessoa from './pessoa';

import './assets';

const atendente = new Pessoa;
console.log(atendente.cumprimentar());