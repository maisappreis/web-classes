<template>
  <div id="app">
    <Contador :valorInicial="10" />
    <ContadorClasse :valorInicial="100" />
  </div>
</template>

<script lang="ts">
// https://br.vuejs.org/v2/guide/typescript.html 
// https://github.com/vuejs/vue-class-component 
// https://github.com/kaorun343/vue-property-decorator 

import { defineComponent } from 'vue';
import Contador from './componentes/Contador.vue';
import ContadorClasse from './componentes/ContadorClasse.vue';

export default defineComponent({
  name: 'App',
  components: {
    Contador,
    ContadorClasse
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
