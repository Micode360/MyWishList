import '../styles/globals.scss'
import styles from '../styles/Home.module.scss';
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}

export default MyApp;
