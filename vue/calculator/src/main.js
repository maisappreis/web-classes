import Vue from "vue";
import App from "./App"; // todos os componentes da aplicação serão filhos deste componente.

new Vue({
    render(createElement) {
        return createElement(App)
        // render: h => h(App)     >> isso ai é a mesma coisa que a função render() acima.
    }
}).$mount("#app") // outra maneira de informar o elemento HTML que será monitorado.