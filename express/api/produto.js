
// o mais comum é fazer esse registro URL e função fora do módulo, como fizemos em usuario,
// mas pode ser feito aqui dentro do módulo também.

module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send("Produto > salvar > " + texto)
    };

    function obter(req, res) {
        res.send("Produto > obter > " + texto)
    };

    app.post("/produto", salvar);
    app.get("/produto", obter);

    return {salvar, obter}
}