import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/organisms/Header";
import FeatureSection from "../components/organisms/FeatureSection";
import BookListingSection from "../components/organisms/BookListingSection";
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Quidax Books</title>
        <meta name="description" content="A flimsy book company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section>
        <FeatureSection />
        <BookListingSection />
      </section>

    </div>
  )
}

export default Home
