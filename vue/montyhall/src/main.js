import Vue from "vue";
import App from "./App";

new Vue({
    render: h => h(App)    
}).$mount("#app")



// render: h => h(App) 

// Isso igual a isso:

// render(createElement) {
//    return createElement(App)
// }