// Cria uma área de armazenamento, que vai conseguir compartilhar dados entre os componentes.
// Precisamos fazer o Header se comunicar com o Menu, para fazer o Menu aparecer e sumir qnd se clica no Toggle.

import Vue from "vue";
import Vuex from "vuex"; // Esse quem faz essa ligação entre componentes.
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null,
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if(!state.user) { // se o usuario não estiver settado.
                state.isMenuVisible = false;
                return // e retorna nada aqui, para não continuar a leitura do código.
            }
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible // se tiver verdadeiro, atribui falso, se tiver false, atribui verdadeiro.
            } else {                                       // ele fica alternando entre TRUE e FALSE.
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user) {
            state.user = user;
            if(user) {
                axios.defaults.headers.commom["Authorization"] = `bearer ${user.token}`;
                state.isMenuVisible = true;
            } else {
                delete axios.defaults.headers.commom["Authorization"];
                state.isMenuVisible = false;
            }
        }
    }
})