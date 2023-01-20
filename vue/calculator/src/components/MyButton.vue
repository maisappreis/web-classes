<template>
  <button class="button" :class="{ double, triple, operation }" @click="$emit('onCalcButtonClick', label)">
    {{ label }}
  </button>
</template>

<!-- @click="$emit("nomeCriadoPorMim", label do botão)" isso vai emitir um evento de click, disparar evento. -->

<script>
export default {
  props: { // propriedades, parâmentros do botão.
    label: {},
    operation: { type: Boolean }, // se eu não passar o parâmentro é FALSE, se eu passar, é TRUE
    double: { type: Boolean },
    triple: { type: Boolean}
  }
}
</script>

<style>

/*// :pseudo-class
  // ::pseudo-elements */

:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}

.button.operation:active {
  background-color: #fa8231cc;
}

</style>