// Tratamento de erro: Try, Catch e Throw.
// Usar o "try" em algum código que você acha que pode dar erro, que ai ele "tenta", se não deu, o "catch" irá "capturar" o erro.
// O erro capturado é "lançado" no "throw" para ser tratado.
// E ainda pode haver o "finally", que mesmo depois de tratado, chama o final. Ele chama o "finally" mesmo se não deu erro.

let name = "ERRO: 1548"
let message = "Ocorreu um erro!"


function tratarErroELancar(erro) {
    // throw new Error(".....");
    // throw 10;
    // throw true;
    // throw "Mensagem de Erro";
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function gritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + nome)
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome: "Roberto "};
gritando(obj);