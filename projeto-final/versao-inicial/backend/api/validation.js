
// Fazer validações antes do usuário submeter o formulário.

module.exports = app => {
    function existsOrError(value, msg) { // se o valor existe, está OK, senão, dá erro.
        if(!value) throw msg;  // '!value' é TRUE. Ou seja, Não Valor === Não existe valor. Lança 'msg' de ERRO.
        if(Array.isArray(value) && value.length === 0) throw msg;   // se o valor for um array E for um valor vazio, ou seja, comprimento 0. Então ERRO.
        if(typeof value === "string" && !value.trim()) throw msg; // se for uma string e for apenas de espaços em branco, não existe, ERRO.
    }
    
    function notExistsOrError(value, msg) { // se o valor não existe, está OK, se existe, dá erro.
        try {
            existsOrError(value, msg) // se não deu erro aqui, porque existe, algo está errado.
        } catch(msg) {
            return      // se o valor não existe, cai no 'catch' e está OKAY, posso apenas retornar.
        }
        throw msg  // se o valor existe, dá erro, e eu lanço a msg de erro aqui.
    }
    
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}

