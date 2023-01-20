
export default function handler(req, res) {
//     res.status(200).send() // colocar .send() para o app Postman pegar.

    if(req.method === "GET") { // se o método da requisição for GET
        handleGet(req, res) // status da resposta 200 (sucesso), GET o JSON, que é aquele objeto ali em baixo.
    } else {
        res.status(405).send() // se o metodo não for GET, o status da requisição vai ser 405 (Method Not Allowed). Send() envia para o Postman.
    }
}

function handleGet(req, res) {
    res.status(200).json({ // status da resposta 200 (sucesso), o JSON é aquele objeto ali.
        id: 3,
        nome: "Maisa",
        idade: 28
    })
}