import styles from '../../../styles/MemeDetail.module.css'

export default function MemeDetail({ meme, onClickClose}) {
  return (
    <div className={styles.memeDetail}>
      <h1>{meme.name}</h1>
      <img
        src={meme.url}
        alt={meme.name}
      />
      <button onClick={() => onClickClose()}>Close</button>
    </div>

  )
}
