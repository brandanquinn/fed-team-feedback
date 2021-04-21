import Head from 'next/head'
import Navigation from '../components/navigation'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LiveArea FED Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FED Feedback
        </h1>

      </main>

      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </div>
  )
}
