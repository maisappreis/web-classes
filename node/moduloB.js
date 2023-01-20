
// EXPORTAÇÃO no Node.
// Maneira clássica de criar objeto e já exportá-lo seria:
// O jeito tradicional precisa usar o "module.exports".

module.exports = {
    bomDia: "Bom dia",
    boaNoite() {
        return "Boa Noite"
    }
}

let a = 2; // isso é visível apenas dentro do módulo.