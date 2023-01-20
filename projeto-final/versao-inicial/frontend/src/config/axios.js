import axios from "axios";

// Vai gerar mensagens de erro.

const success = res => res; // se for sucesso nada acontece.
const error = err => {
    if(401 === err.response.status) {
        window.location = "/"   // se der esse erro 401 ele voltar para a página de Login da aplicação.
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)