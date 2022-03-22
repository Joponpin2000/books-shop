import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/organisms/Header";
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quidax Books</title>
        <meta name="description" content="A flimsy book company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
       
    </div>
  )
}

export default Home
