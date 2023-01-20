<template>
  <div class="calculator">
    <MyDisplay :value="displayValue" />
    <MyButton label="AC" triple @onCalcButtonClick="clearMemory" />
    <MyButton label="/" operation @onCalcButtonClick="setOperation" />
    <MyButton label="7" @onCalcButtonClick="addDigit" />
    <MyButton label="8" @onCalcButtonClick="addDigit" />
    <MyButton label="9" @onCalcButtonClick="addDigit" />
    <MyButton label="*" operation @onCalcButtonClick="setOperation" />
    <MyButton label="4" @onCalcButtonClick="addDigit" />
    <MyButton label="5" @onCalcButtonClick="addDigit" />
    <MyButton label="6" @onCalcButtonClick="addDigit" />
    <MyButton label="-" operation @onCalcButtonClick="setOperation" />
    <MyButton label="1" @onCalcButtonClick="addDigit" />
    <MyButton label="2" @onCalcButtonClick="addDigit" />
    <MyButton label="3" @onCalcButtonClick="addDigit" />
    <MyButton label="+" operation @onCalcButtonClick="setOperation" />
    <MyButton label="0" double @onCalcButtonClick="addDigit" />
    <MyButton label="." @onCalcButtonClick="addDigit" />
    <MyButton label="=" operation @onCalcButtonClick="setOperation" />
  </div>
</template>

<script>
import MyDisplay from "../components/MyDisplay.vue";
import MyButton from "../components/MyButton.vue";

export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: { MyButton, MyDisplay },
  methods: {
    clearMemory() {
      // essa função está fazendo o objeto voltar para o estado inicial.
      Object.assign(this.$data, this.$options.data()); // estou atribuindo no 'this.$data', o estado inicial do objeto, que é 'this.$options.data()'
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation; // que remete a 'operation'.

        try {
          // no índice 0 armazena o resultado da operação.
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory();
            return;
          }
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0; // e zera o índice 1 para estar pronta para uma segunda operação.

        this.displayValue = this.values[0]; // display mostra o valor no índice 0, ou seja, o resultado.
        this.operation = equals ? null : operation; // se a operação for '=', não faz nada, senão, setta próxima operação.
        this.current = equals ? 0 : 1; // se clicar em '=' edita índice 0, senão, edita indice 1.
        this.clearDisplay = !equals; // limpa display se for diferente de equals.
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        // para não permitir 2 pontos no display.
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay; // limpa display se display tiver zero, ou se 'clearDisplay' estiver TRUE.
      const currentValue = clearDisplay ? "" : this.displayValue; // valor atual é 0 se o 'clearDisplay' for TRUE, senão, o valor no display.
      const displayValue = currentValue + n; // concatena o valor no display, com qqr 'n' adicionado.

      this.displayValue = displayValue;
      this.clearDisplay = false;
      this.values[this.current] = displayValue;
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>