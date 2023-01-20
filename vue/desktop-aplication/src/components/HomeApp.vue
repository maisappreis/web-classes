<template>
  <v-container fluid>
    <v-form>
      <v-file-input label="Selecione as legendas..." prepend-icon="mdi-message-text" 
      append-outer-icon="mdi-send" outlined multiple chips v-model="files" @click:append-outer="processSubtitles" />
    </v-form>
    <div class="pills">
      <PillApp
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron"; // para disparar evento da interface gráfica.
import PillApp from "./PillApp.vue";

export default {
  components: { PillApp },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(f => f.path);
      ipcRenderer.send("process-subtitle", paths); // Enviar para esse canal de comunicação um evento, parâmentros: ("nomeCanal", "nomeEvento")
      ipcRenderer.on ("process-subtitle", (event, resp) => { // resposta a ser recebida.
        this.groupedWords = resp; // a resposta será as palavras agrupadas.
      });
    }
  }
};
</script>

<style>

  .pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>