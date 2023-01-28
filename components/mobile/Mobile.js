import Footer from '../footer';
import styles from '../../styles/Mobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Item from '../desktop/Item';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const Mobile = () => {
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
    if (clickCount >= 2) {
      setClickCount(clickCount + 1)
    }
  };

  const renderIf = (num) => clickCount > num && clickCount <= 6;
  
  return (
    <main className={styles.main}>
        {renderIf(2) ? (
          <animated.div style={{transformOrigin: 'center', marginTop: '50%', ...spins}}>
            <Image onClick={() => window.location.reload()} src="/img/m-rick.gif" height="250" width="300" alt="Pwned" border="0" style={{cursor: 'pointer'}} />
          </animated.div>
          ) : (
            <>
              <Image src="/img/candy-logo-bus.png" height="250" width="300" alt="Space Jam" border="0" />
              <p className={styles.call} size="-1">📞 <a className={styles.callNow} href="tel:130022639287">1300 CANDYBUS</a></p>
            </>
        )}
        <div className={styles.contentContainer}>
            <div className={styles.column}>
              <Item 
                clickCount={clickCount}
                show={show}
                style={styles.middle}
                renderCondition={renderIf(1)}
                handleClick={handleShow}
                href="/bookNow"
                imgOptions={{
                  src: "/img/p-jamcentral.gif",
                  height: "75",
                  width: "87",
                  alt: "Book now"
                }}
              />
            </div>
            <div className={styles.column}>
              <Item 
                clickCount={clickCount}
                show={show}
                style={styles.topRight}
                renderCondition={renderIf(1)}
                handleClick={handleShow}
                href="/whatWeOffer"
                imgOptions={{
                  src: "/img/p-behind.gif",
                  height: "73",
                  width: "87",
                  alt: "What we offer"
                }}
              />
            </div>
            <div className={styles.column}>
              <Item 
                clickCount={clickCount}
                show={show}
                style={styles.topLeft}
                renderCondition={renderIf(0)}
                handleClick={handleShow}
                href="/fleet"
                imgOptions={{
                  src: "/img/p-pressbox.gif",
                  height: "66",
                  width: "111",
                  alt: "Our buses"
                }}
              />
            </div>
            <div className={styles.column}>
              <Item
                clickCount={clickCount}
                show={show}
                style={styles.test}
                renderCondition={renderIf(1)}
                handleClick={handleShow}
                href="/hensBucksNights"
                imgOptions={{
                  src: "/img/p-studiostore.gif",
                  height: "72",
                  width: "84",
                  alt: "Hens and bucks nights"
                }}
              />
            </div>
            <div className={styles.column}>
              <Item
                clickCount={clickCount}
                show={show}
                style={styles.test}
                renderCondition={renderIf(1)}
                handleClick={handleShow}
                href="/rules"
                imgOptions={{
                  src: "/img/p-junior.gif",
                  height: "65",
                  width: "120",
                  alt: "Rules and regulations"
                }}
              />
            </div>
            <div className={styles.column}>
              <Item 
                clickCount={clickCount}
                show={show}
                style={styles.bottomRight}
                renderCondition={renderIf(1)}
                handleClick={handleShow}
                href="/careers"
                imgOptions={{
                  src: "/img/p-lineup.gif",
                  height: "72",
                  width: "83",
                  alt: "Careers"
                }}
              />
            </div>
            <div className={styles.column}>
              {clickCount < 2 && (
                <animated.div onClick={handleHide} style={{ cursor: 'pointer', ...hide }}>
                  <Image src={`/img/p-souvenirs${['', 2][clickCount]}.gif`} height="73" width="85" alt="Complaints" border="0"/>
                </animated.div>
              )}
            </div>
            
        </div>
        {clickCount <= 2 && (
            <Footer />
        )}
        {renderIf(2) && (
          <embed src="/rick_rolled.mp3" autostart="true" style={{width: '0'}} />
        )}
    </main>
  )
}

export default Mobile