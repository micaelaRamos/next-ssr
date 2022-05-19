import Head from 'next/head';
import styles from '../../../styles/PageContent.module.css'
import { useState, useEffect } from 'react';

import Meme from '../Meme';
import MemeDetail from '../MemeDetail';

import NavBar from '../../../components/NavBar/NavBar';

export default function PageContent({ memes, title, page }) {
  const [displayDetail, setDisplayDetail] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [memeOfTheDay, setMemeOfTheDay] = useState(null);
  const [scrolled, updateScrolledStatus] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  const handleScroll = () => {
    const scroll = window.scrollY;
    updateScrolledStatus(scroll);
  };

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
        <div className={`${styles.header} ${scrolled > 0 ? styles.headerScrolled : ''}`}>
          <div>
            <NavBar actualPage={page} />
            <h3 className={styles.title}>Memes page with {title}!</h3>
          </div>
          <button className={styles.memeOfTheDay} onClick={() => showMemeOfTheDay()}>Get my meme of the day</button>
        </div>
        <div className={styles.memeContainer}>
          { memes?.length === 0 ? (<p>Loading...</p>) :
            ( memes?.length && memes.map(meme => <Meme meme={meme} onClick={onClickMeme} key={meme.id} />))
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
