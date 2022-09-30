import { store } from "../store/store";
import { Provider } from "react-redux";
import "../styles/globals.scss";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  );
}

export default MyApp;
