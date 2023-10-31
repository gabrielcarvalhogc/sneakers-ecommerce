import Header from '@/components/header'
import styles from './page.module.scss'
import MainPage from '@/components/main'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainPage />
      </main>
    </>

  )
}
