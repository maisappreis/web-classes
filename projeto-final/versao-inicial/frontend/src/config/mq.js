
// Melhorando a responsividade da página usando VUE Media Query.
// Define os breakpoints.

import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
    breakpoints: {
        xs: 576,        // tela Extra Small
        sm: 768,        // tela Small
        md: 960,        // tela Medium
        lg: 1140,       // tela Large
        xl: Infinity    // tela Extra Large
    }
});

