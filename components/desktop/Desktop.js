import Footer from '../footer';
import styles from '../../styles/Desktop.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Desktop = () => {
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.topLeft}>
              <Link href="/fleet">
                <Image src="/img/p-pressbox.gif" height="76" width="131" alt="Our fleet" border="0"/>
              </Link>
            </div>
            <div className={styles.middle}>
              <Link href="/bookNow">
                <Image src="/img/p-jamcentral.gif" height="95" width="107" alt="Book now" border="0" />
              </Link>
            </div>
            <div className={styles.topRight }>
              <Link href="/whatWeOffer">
                <Image src="/img/p-behind.gif" height="93" width="107" alt="What we offer" border="0" />
              </Link>
            </div>
          </div>
          <div className={styles.gridOuter}>
            <div className={styles.test}>
              <Link href="/rules">
                <Image src="/img/p-junior.gif" height="120" width="140" alt="Rules and Regulations" border="0"/>
              </Link>
            </div>
            <div className={styles.middle}>
              <Image src="/img/candy-logo-bus.png" height="250" width="300" alt="Space Jam" border="0" />
            </div>
            <div className={styles.test}>
              <Link href="/hensBucksNights">
                <Image src="/img/p-studiostore.gif" height="92" width="104" alt="Hens and Bucks Nights" border="0" />
              </Link>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.bottomLeft}>
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
              </Link>
            </div>
            <div className={styles.middle}>
            </div>
            <div className={styles.bottomRight}>
              <Link href="/careers">
                <Image id="animate" src="/img/p-lineup.gif" height="92" width="103" alt="Careers" border="0"/>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
  )
}

export default Desktop