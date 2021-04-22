import Navigation from '../../components/navigation'
import PromptGenerator from '../../components/promptGenerator'

import styles from '../../styles/Home.module.css'

export default function Reviews() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FED Reviews
        </h1>

        <div>
          <PromptGenerator />
        </div>

      </main>

      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </div>
  )
}