import Navigation from '../../components/navigation'

import styles from '../../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FED Reviews
        </h1>

      </main>

      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </div>
  )
}