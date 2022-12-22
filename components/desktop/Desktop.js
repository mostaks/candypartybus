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
  const showConfig = {
      from: hidden,
      to: visible,
      config: { duration: '200' },
    };
  const hideConfig = {
      from: visible,
      to: hidden,
      config: { duration: '200' },
    };

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
    hideApi.start(hideConfig)
    showApi.start(showConfig)
    setClickCount(clickCount + 1)
  };

  const handleShow = () => {
    showApi.start(hideConfig)
    hideApi.start(showConfig)
    if (clickCount >= 5) {
      setClickCount(clickCount + 1)
    }
  };

  const renderIf = (num) => clickCount > num && clickCount <= 6;
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.topLeft}>
              {renderIf(1) ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                  <Link href="/fleet">
                    <Image src="/img/p-pressbox.gif" height="76" width="131" alt="Our fleet" border="0"/>
                  </Link>
              )}
            </div>
            <div className={styles.middle}>
              {renderIf(2) ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                  <Link href="/bookNow">
                    <Image src="/img/p-jamcentral.gif" height="95" width="107" alt="Book now" border="0" />
                  </Link>
              )}
            </div>
            <div className={styles.topRight }>
              {renderIf(2) ? (
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
              {renderIf(3) ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/rules">
                  <Image src="/img/p-junior.gif" height="120" width="140" alt="Rules and Regulations" border="0"/>
                </Link>
              )}
            </div>
            <div className={styles.middle}>
              {renderIf(5) ? (
                <animated.div style={{...spins}}>
                  <Image onClick={() => window.location.reload()} src="/img/m-rick.gif" height="250" width="300" alt="Pwned" border="0" style={{cursor: 'pointer' }} />
                </animated.div>
                ) : (
                <Image src="/img/candy-logo-bus.png" height="250" width="300" alt="Space Jam" border="0" />
              )}
            </div>
            <div className={styles.test}>
              {renderIf(3) ? (
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
              {clickCount < 5 && (
                <animated.div onClick={handleHide} style={{ cursor: 'pointer', ...hide }}>
                  <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>
              )}
            </div>
            <div className={styles.middle}>
            </div>
            <div className={styles.bottomRight}>
              {renderIf(3) ? (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>) : (
                <Link href="/careers">
                  <Image id="animate" src="/img/p-lineup.gif" height="92" width="103" alt="Careers" border="0"/>
                </Link>
              )}
            </div>
              {clickCount < 2 && (
                <animated.div onClick={handleShow} style={{ cursor: 'pointer', ...show }}>
                    <Image src="/img/p-souvenirs.gif" height="83" width="95" alt="Complaints" border="0"/>
                </animated.div>

              )}
          </div>
          {clickCount <= 4 && (
            <Footer />
          )}
        </div>
        {renderIf(5) && (
          <embed src="/rick_rolled.mp3" autostart="true" style={{width: '0'}} />
        )}
      </main>
  )
}

export default Desktop