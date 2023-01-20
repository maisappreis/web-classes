// Mongoose pode criar um 'schema' para o MongoDB, que é um banco não relacional sem 'schema'.

const mongoose = require("mongoose"); // biblioteca OBM, modela objetos.
mongoose.connect("mongodb://localhost/knowledge_stats", { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = "ERRO! Não foi possível conectar com o MongoDB.";
        console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m"); // aplica background vermelho, msg, tira o background.
    })


