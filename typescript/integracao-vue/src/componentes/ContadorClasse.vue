<!-- <template>
  <div>
    <h1>Contador (Classe)</h1>
    <h2>{{ valor }}</h2>
    <h3>{{ getParOuImpar() }}</h3>
    <h3>{{ parOuImpar }}</h3>
    <button @Click="setValor(1)">+</button>
    <button @Click="setValor(-1)">-</button>
  </div>
</template>

<script lang="ts">
// import { Vue, Component, Prop } from "vue-property-decorator";
import { Vue, Options, Prop } from "vue-class-component";

// 'Prop' é decorator de Atributo.
// 'Component' é decorator de Classe.

// @Component
@Options
export default class ContadorClasse extends Vue {
    @Prop(Number) private readonly valorInicial?: number

    private valor: number = this.valorInicial || 0

    public setValor(delta: number) {
        this.valor += delta
    }

    public getParOuImpar(): string {  // chamando uma função()
        return this.valor % 2 === 0 ? "Par" : "Impar"
    }

    public get parOuImpar(): string {  // ou como propriedade computada.
        return this.valor % 2 === 0 ? "Par" : "Impar"
    }

}
</script>

<style>

</style>