import Head from 'next/head'
import Image from 'next/image'
import Desktop from '../components/desktop'
import Mobile from '../components/mobile'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import { useWindowSize } from '../hooks/useWindowSize'

export default function Home() {
  const { deviceSize } = useWindowSize();
  return (
    <div className={styles.container}>
      <Head>
        <title>Candy Party Bus Hire</title>
        <meta name="description" content="Based in Sydney. Servicing areas from North to South Coast and everywhere in between" />
        <link rel="icon" href="img/favicon/favicon.ico" />
      </Head>
      {deviceSize === 'desktop' ? <Desktop /> : <Mobile />}

    </div>
  )
}
