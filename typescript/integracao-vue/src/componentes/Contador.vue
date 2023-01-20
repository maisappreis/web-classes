<template>
    <div>
        <h1>Contador</h1>
        <h2>{{ valor }}</h2>
        <button @Click="setValor(1)">+</button>
        <button @Click="setValor(-1)">-</button>
    </div>
  
</template>

<script lang="ts">
import Vue from 'vue';


const Contador = {
    props: {
        valorInicial: {
            type: Number
        }
    },
    data(): any {
        return {
            valor: this.valorInicial || 0
        }
    },
    methods: {
        setValor(delta: number) {
            this.valor += delta
        },
    },
}

export default Contador;

</script>

<style>

</style>