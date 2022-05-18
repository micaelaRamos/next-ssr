import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { getTodos, getMemes } from './api/endpoints.js';

export async function getStaticProps() {
  const todosPromise = getTodos();
  const memesPromise = getMemes();

  const [todos, memes] = await Promise.all([todosPromise, memesPromise]);
  return {props: { todos, memes }};
};

export default function Home({ todos, memes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Memes Gallery</title>
        <meta name="description" content="Memes gallery to practice next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.memeContainer}>
          { memes?.length === 0 ? (<p>Loading...</p>) :
            (memes.map(meme => 
              <div className={styles.memeItem}>
                <img
                  className={styles.memeImage}
                  src={meme.url}
                  alt={meme.name}
                />
              </div>
              ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        By Micaela Ramos
      </footer>
    </div>
  )
}
