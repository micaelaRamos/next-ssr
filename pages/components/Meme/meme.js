import styles from '../../../styles/Meme.module.css'

export default function Meme({ meme, onClick }) {
  return (
    <div className={styles.memeItem} key={meme.id} onClick={() => onClick(meme)}>
        <img
          className={styles.memeImage}
          src={meme.url}
          alt={meme.name}
        />
    </div>

  )
}
