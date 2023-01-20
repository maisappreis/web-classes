import styles from '../styles/Estiloso.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estiloso usando CSS Módulos</h1>                
            </div>
        </Layout>
    )
}

// Tudo que está dentro de <Layout> é o 'children', por isso, em Layout.jsx eu acesso como 'props.children'.