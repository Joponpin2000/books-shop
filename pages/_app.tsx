import Head from 'next/head';
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
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
