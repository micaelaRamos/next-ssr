import styles from '../../../styles/Meme.module.css'
import Image from '../../../components/Image'
export default function Meme({ meme, onClick }) {
  return (
    <div className={styles.memeItem} key={meme.id} onClick={() => onClick(meme)}>
        <Image
          className={styles.memeImage}
          src={meme.url}
          alt={meme.name}
        />
    </div>

  )
}
