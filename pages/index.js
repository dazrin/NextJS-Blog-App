import Head from 'next/head' // custom titles, meta tags, etc
import Link from 'next/link' // used for navigation links
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dazrin's First Next.JS Application</title>
        <meta name="keywords" content="Dazrin, NextJS" />
      </Head>
      <h1>Dazrin's First Next.JS Application</h1>
      <p className={styles.main}>Click this button to go to the About page: 
      
        <Link href='/about'>
          <button className={styles.card}>
            <h1>About Me</h1>
            </button>
        </Link>
      
      </p>
        

    </div>
  )
}
