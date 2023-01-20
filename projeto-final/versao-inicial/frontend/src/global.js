import Vue from "vue";

export const userKey = "__knowledge_user"; // para armazenar os dados de login do usuário;
export const baseApiUrl = "http://localhost:3000"; // aqui é onde ficará a URL de fato, o dominio real.
//Qnd for gerar o 'build' de produção. Porta do backend.

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data})
    } else if (typeof e === "string") {
        Vue.toasted.global.defaultError({ msg : e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }

// No console:
// localStorage.__knowledge_use
// para pegar o token