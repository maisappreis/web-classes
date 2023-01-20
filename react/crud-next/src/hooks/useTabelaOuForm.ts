import { useState } from "react";

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela"); // para mostra tabela ou formulario:

    const exibirTabela = () => setVisivel("tabela");
    const exibirFormulario = () => setVisivel("form");

    return {
        formularioVisivel: visivel === "form",
        tabelaVisivel: visivel === "tabela",
        exibirFormulario,
        exibirTabela
    }
}