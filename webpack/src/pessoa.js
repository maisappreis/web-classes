
// No NODE:
// Importar: require()
// Exportar: module.exports(), exports()

// Nativo do JavaScript (ECMA):
// Importar: import
// Exportar: export default


// Forma nativa de exportar no JavaScript

import './modulos/moduloA';

export default class Pessoa {
    cumprimentar() {
        return 'Bom dia'
    }
}