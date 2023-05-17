import styles from '../styles/Home.module.css'
import Nav from '../components/nav';

export default function PinkPartyBus() {
  return (
    <>
      <Nav />
      <div className={styles.middle}>
        We are not Pink Party Bus. We have no pink party buses
      </div>
    </>
  )
}
