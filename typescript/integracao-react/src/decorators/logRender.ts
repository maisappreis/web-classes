// objeto para renderizar usando o Decorator.

type Componente = {
    new(...args: any[]): {
        render(): any      // está referenciando o render() em "Contador.tsx"
    }
}

export default function logRender<C extends Componente>(componente: C) {
    return class extends componente {
        render() {
            console.log("Renderizando o componente...");
            const r: any = super.render(); // resultado do render() armazenado em 'r'.
            console.log("Renderização concluída")
            return r
        }
    }
}