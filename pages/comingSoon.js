import styles from '../styles/Home.module.css'
import { useRef } from 'react'
import Nav from '../components/nav';

export default function ComingSoon() {
  const leftEye = useRef();
  const rightEye = useRef();
  const handleMouseMove = (event) => {
    moveEye(leftEye.current, event);
    moveEye(rightEye.current, event);
  }

  const moveEye = (ref, event) => {
    var x = (ref.offsetLeft) + (ref.offsetWidth / 2);
    var y = (ref.offsetTop) + (ref.offsetHeight / 2);
    var rad = Math.atan2((event.pageX) - x, (event.pageY) - y);
    var rot = (rad * (360 / Math.PI) * -1) + 180;

    ref.style.transform = `rotate(${rot}deg)`
  }
  return (
    <>
      <Nav />
      <div onMouseMove={handleMouseMove} className={styles.container}>
        <div className={styles.middle}>
          <section className={styles.moveArea}>
              <div className={styles.eyeContainer}>
                <div ref={leftEye} className={styles.eye}></div>
                <div ref={rightEye} className={styles.eye}></div>
              </div>
            </section>
          Coming soon...
        </div>
      </div>
    </>
  )
}
