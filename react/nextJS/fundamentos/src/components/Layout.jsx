import Link from "next/link";
import styles from "../styles/Layout.module.css";

// Criando essa estrutura do Layout, eu posso reaproveitar isso em outras páginas.

export default function Layout(props) {
    console.log(props); // children: {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}
       
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? "Mais um exemplo"}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>        
        </div>
    )
}

// {props.titulo ?? "Mais um exemplo"}
// Se ele não encontra 'props.titulo', ele vai para "Mais um exemplo".