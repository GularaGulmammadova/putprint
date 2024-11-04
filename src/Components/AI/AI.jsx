import styles from './AI.module.css'

const AI = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrap}>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
            <div className={styles.img}></div>
        </div>
        <button className={styles.btn}>AI ilə yarat</button>
    </div>
  )
}

export default AI;