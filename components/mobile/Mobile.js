import Footer from '../footer';
import styles from '../../styles/Mobile.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Mobile = () => {
  return (
    <main className={styles.main}>
        <Image src="/img/candy-logo-bus.png" height="250" width="300" alt="Space Jam" border="0" />
        <p className={styles.call} size="-1">CALL NOW: <a className={styles.callNow} href="tel:130022639287">1300 CANDYBUS</a></p>
        <div className={styles.contentContainer}>
            <div className={styles.column}>
              <Link href="/bookNow">
                <Image src="/img/p-jamcentral.gif" height="75" width="87" alt="Book now" border="0" />
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="/careers">
                <Image id="animate" src="/img/p-lineup.gif" height="72" width="83" alt="Careers" border="0"/>
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="/whatWeOffer">
                <Image src="/img/p-behind.gif" height="73" width="87" alt="What we offer" border="0" />
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="/rules">
                <Image src="/img/p-junior.gif" height="100" width="120" alt="Rules and Regulations" border="0"/>
              </Link>
            </div>
            
            <div className={styles.column}>
              <Link href="/hensBucksNights">
                <Image src="/img/p-studiostore.gif" height="72" width="84" alt="Hens and Bucks Nights" border="0" />
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image src="/img/p-souvenirs.gif" height="73" width="85" alt="Complaints" border="0"/>
              </Link>
            </div>
            <div className={styles.column}>
              <Link href="/fleet">
                <Image src="/img/p-pressbox.gif" height="66" width="111" alt="Our fleet" border="0"/>
              </Link>
            </div>
        </div>
        <Footer />
    </main>
  )
}

export default Mobile