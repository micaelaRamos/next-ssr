import styles from '../../../styles/MemeDetail.module.css'
import Image from '../../../components/Image'

export default function MemeDetail({ meme, onClickClose}) {
  return (
    <>
    <div className={styles.memeDetail}>
      <button className={styles.closeButton} onClick={() => onClickClose()}><b>X</b></button>
      <h1>{meme.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={meme.url}
          alt={meme.name}
          className={styles.detailImage}
        />
      </div>
    </div>
    <div className={styles.detailContainer} />
    </>
  )
}
