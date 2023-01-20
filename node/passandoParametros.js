
// Passando Parâmetros entre Módulos.
// Se um módulo/arquivo retorna uma função, você pode invocar essa função passando os parâmentros, e o que estiver dentro será executado.


module.exports = function(...nomes) {  // parâmentro variável, posso passar quantos 'nomes' eu quiser.
    return nomes.map(nome => `Boa semana, ${nome}!`)
}