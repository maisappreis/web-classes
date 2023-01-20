// Configurando as dependências do "vue-toasted". API que manda mensagem.

import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
    iconPack: "fontawesome",  // para usar a biblioteca de ícones do Font Awesome.
    duration: 3000     // duração da msg de 3 segundos.
});

// Mensagem de Sucesso é padrão para todas as operações.

Vue.toasted.register(
    "defaultSuccess",
    payload => !payload.msg ? "Operação realizada com sucesso!" : payload.msg,
    { type: "success", icon: "check" }
);

// Mensagem de Erro específicas. O restante dessa função está em 'global.js'.

Vue.toasted.register(
    "defaultError",
    payload => !payload.msg ? "Ops.. Erro inesperado." : payload.msg,
    { type: "error", icon: "times"}
);