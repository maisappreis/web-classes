import Vue from "vue";
import App from "./App";
import store from "./config/store";
import router from "./config/router";

import "./config/bootstrap";
import "./config/msgs";
import "./config/axios";
import "./config/mq";
import "font-awesome/css/font-awesome.css";



Vue.config.productionTip = false

// TEMPORÁRIO!
// require("axios").default.headers.commom["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1haXNhIFBpZXJpbmkgUHJlaXMiLCJlbWFpbCI6Im1haXNhcGllcmluaXByZWlzQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU0ODI2ODcsImV4cCI6MTY1NTc0MTg4N30.70xs61aXHnfSOT1C2UoLBr0w5zQQ4NyT6_5ihYnFGiI"

new Vue({
  store,              // colocar dentro da instância.
  router,
  render: h => h(App)
}).$mount('#app')

