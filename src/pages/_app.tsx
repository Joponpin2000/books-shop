import Head from 'next/head';
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { saveState } from '../utils/localStorage';

function MyApp({ Component, pageProps }: AppProps) {

store.subscribe(() => {
  saveState({
    cart:store.getState().cart,
  });
})
  return (
    <Provider store={store}>
      <Head>
        <title>Quidax Books</title>
        <meta name="description" content="A flimsy book company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
