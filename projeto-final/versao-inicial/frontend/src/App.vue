<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header
      title="Cod3r - Base de Conhecimento"
      :hideToggle="!user"
      :hideUserDropdown="!user"
    />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<!-- :class="{'hide-menu' : !isMenuVisible}" - Aplicar a classe CSS 'hide-menu' se o menu não estiver vazio -->

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex"; // vai ser responsável por mapear um atributo da Store dentro do meu componente.
import Header from "./components/template/Header.vue"; // eu poderia colocar @ no lugar do ponto ali, o @ seria a pasta raiz = src.
import Menu from "./components/template/Menu.vue";
import Content from "./components/template/Content.vue";
import Footer from "./components/template/Footer.vue";
import Loading from "./components/template/Loading.vue";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer, Loading },
  computed: mapState(["isMenuVisible", "user"]),
  data: function () {
    return {
      validatingToken: true,
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null); // inicalmente setta usuário para nulo.

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "auth" }); // isso significa voltando/navegando para tela de autenticação.
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);
      if (res.data) {
        this.$store.commit("setUser", userData); // quando o usuário consegue se logar.

        if (this.$mq === "xs" || this.$mq === "sm") {
          // se tela extra pequena ou pequena
          this.$store.commit("toggleMenu", false); // ele fechará o Menu automaticamente..
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    },    
  },
  created() {
      this.validateToken();
    },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

/* para suavizar as fontes */

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px; /* Header, Content e Footer */
  grid-template-columns: 300px 1fr; /* Menu e o resto */
  grid-template-areas: "header header" "menu content" "menu footer";
}

#app.hide-menu {
  grid-template-areas: "header header" "content content" "footer footer";
}
</style>