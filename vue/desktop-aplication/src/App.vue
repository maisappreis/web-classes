<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HomeApp />
    </v-main>
  </v-app>
</template>

<script>
import HomeApp from "./components/HomeApp"

export default {
  name: "App",

  components: {
    HomeApp
  },

  data: () => ({
    //
  }),
};
</script>
