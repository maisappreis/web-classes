
import '../styles/globals.css'; // CSS globais devem ser importados aqui, pois aqui é altera toda a aplicação.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
