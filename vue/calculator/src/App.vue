
<template>
    <div id="app">
        <h1>Calculadora</h1>
        <MyCalculator />
    </div>
</template>

<script>
import MyCalculator from "./main/MyCalculator.vue";

export default {
    components: { MyCalculator }
}

</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", monospace;
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

</style>
