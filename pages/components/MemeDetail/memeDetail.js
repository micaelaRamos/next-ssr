import styles from '../../../styles/MemeDetail.module.css'
import Image from '../../../components/Image'

export default function MemeDetail({ meme, onClickClose}) {
  return (
    <div className={styles.memeDetail}>
      <h1>{meme.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={meme.url}
          alt={meme.name}
          className={styles.detailImage}
        />
      </div>
      <button className={styles.closeButton} onClick={() => onClickClose()}>Close</button>
    </div>

  )
}
