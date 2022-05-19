import React, { useEffect } from 'react';

import styles from '../../../styles/MemeDetail.module.css';
import Image from '../../../components/Image';

export default function MemeDetail({ meme, onClickClose}) {
  if (!meme) return null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        onClickClose();
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target.id == 'outside-modal') {
        onClickClose();
      }
    });

    return () => {
      document.removeEventListener('keydown', () => {});
      document.removeEventListener('click', () => {});
    }
  }, [onClickClose]);

  return (
    <>
    <div className={styles.memeDetail}>
      <button className={styles.closeButton} onClick={() => onClickClose()}><b>X</b></button>
      <h1>{meme.name}</h1>
      {meme.memeOfTheDay && 
      <div className={styles.memeOfTheDayTitleContainer}>
        <h2 className={styles.memeOfTheDayTitle}>This is your meme of the day!</h2>
      </div>
      }
      <div className={styles.imageContainer}>
        <Image
          src={meme.url}
          alt={meme.name}
          className={styles.detailImage}
        />
      </div>
    </div>
    <div className={styles.detailContainer} id='outside-modal'/>
    </>
  )
}
