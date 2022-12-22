import Footer from '../footer';
import styles from '../../styles/Desktop.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const Desktop = () => {
  const [clickCount, setClickCount] = useState(0);

  const visible = { opacity: '1', visibility: 'visible' };
  const hidden = { opacity: '0', visibility: 'hidden' };

  const [hide, hideApi] = useSpring(() => ({
    from: visible
  }));
  const [show, showApi] = useSpring(() => ({
    from: hidden
  }));

  const spins = useSpring({
    loop: { reverse: true },
    from: { transform: 'rotate(0)' },
    to: { transform: 'rotate(360deg)' },
    delay: 2000,
    config: { duration: '500' }
  });

  const handleHide = () => {
    hideApi.start({
      from: visible,
      to: hidden,
      config: { duration: '200' },
    })
    showApi.start({
      from: hidden,
      to: visible,
      config: { duration: '200' },
    })
    setClickCount(clickCount + 1)
  };

  const handleShow = () => {
    showApi.start({
      from: visible,
      to: hidden,
      config: { duration: '200' },
    })
    hideApi.start({
      from: hidden,
      to: visible,
      config: { duration: '200' },
    })
  };

  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.topLeft}>
              {clickCount > 3 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                  <Link href="/fleet">
                    <Image src="/img/p-pressbox.gif" height="76" width="131" alt="Our fleet" border="0"/>
                  </Link>
              )}
            </div>
            <div className={styles.middle}>
              {clickCount > 4 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                  <Link href="/bookNow">
                    <Image src="/img/p-jamcentral.gif" height="95" width="107" alt="Book now" border="0" />
                  </Link>
              )}
            </div>
            <div className={styles.topRight }>
              {clickCount > 5 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/whatWeOffer">
                  <Image src="/img/p-behind.gif" height="93" width="107" alt="What we offer" border="0" />
                </Link>
              )}
            </div>
          </div>
          <div className={styles.gridOuter}>
            <div className={styles.test}>
              {clickCount > 6 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/rules">
                  <Image src="/img/p-junior.gif" height="120" width="140" alt="Rules and Regulations" border="0"/>
                </Link>
              )}
            </div>
            <div className={styles.middle}>
              {clickCount > 10 ? (
                <animated.div style={{...spins}}>
                  <Image onClick={() => window.location.reload()} src="/img/m-rick.gif" height="250" width="300" alt="Pwned" border="0" style={{cursor: 'pointer' }} />
                </animated.div>
                ) : (
                <Image src="/img/candy-logo-bus.png" height="250" width="300" alt="Space Jam" border="0" />
              )}
            </div>
            <div className={styles.test}>
              {clickCount > 7 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/hensBucksNights">
                  <Image src="/img/p-studiostore.gif" height="92" width="104" alt="Hens and Bucks Nights" border="0" />
                </Link>
              )}
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.bottomLeft}>
              {clickCount < 11 && (
                <animated.div onClick={handleHide} style={{ cursor: 'pointer', ...hide }}>
                  <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>
              )}
            </div>
            <div className={styles.middle}>
            </div>
            <div className={styles.bottomRight}>
              {clickCount > 8 ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/careers">
                  <Image id="animate" src="/img/p-lineup.gif" height="92" width="103" alt="Careers" border="0"/>
                </Link>
              )}
            </div>
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>
          </div>
          {clickCount > 9 ? (
            <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
            </animated.div>) : (
            <Footer />
          )}
        </div>
      </main>
  )
}

export default Desktop