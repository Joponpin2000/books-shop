import type { NextPage } from 'next';
import Head from 'next/head';
import HomeView from '../components/organisms/HomeView';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Quidax Books</title>
        <meta name="description" content="A flimsy book company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomeView />
    </div>
  );
}

export default Home
