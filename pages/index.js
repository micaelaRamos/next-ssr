import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

import Meme from './components/Meme';
import MemeDetail from './components/MemeDetail';

import { getTodos, getMemes } from './api/endpoints.js';

export async function getStaticProps() {
  const todosPromise = getTodos();
  const memesPromise = getMemes();

  const [todos, memes] = await Promise.all([todosPromise, memesPromise]);
  return {props: { todos, memes }};
};

export default function Home({ memes }) {
  const [displayDetail, setDisplayDetail] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [memeOfTheDay, setMemeOfTheDay] = useState(null);

  const onClickMeme = (meme) => {
    setSelectedMeme(meme);
    setDisplayDetail(true);
  }

  const showMemeOfTheDay = () => {
    if(memeOfTheDay) {
      setSelectedMeme(memeOfTheDay);
      setDisplayDetail(true);
      return;
    }
  
    const randomMemeIndex = Math.round((Math.random() * memes.length) - 1);
    setMemeOfTheDay({ ...memes[randomMemeIndex], memeOfTheDay: true });
    setSelectedMeme({ ...memes[randomMemeIndex], memeOfTheDay: true });
    setDisplayDetail(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Memes Template Gallery</title>
        <meta name="description" content="Memes template gallery to practice next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          
          <button className={styles.memeOfTheDay} onClick={() => showMemeOfTheDay()}>Get my meme of the day</button>
        </div>
        <div className={styles.memeContainer}>
          { memes?.length === 0 ? (<p>Loading...</p>) :
            (memes.map(meme => <Meme meme={meme} onClick={onClickMeme} key={meme.id} />))
          }
        </div>
       { displayDetail &&
          <MemeDetail
            meme={selectedMeme}
            onClickClose={() => setDisplayDetail(false)}
          />
        }
      </main>

      <footer className={styles.footer}>
        By Micaela Ramos
      </footer>
    </div>
  )
}
