import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function JonosPartyBus() {
  return (
    <>
      <Nav />
      <div className={styles.middle}>
        We are not jonos party bus.
      </div>
    </>
  )
}
