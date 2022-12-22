import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{textAlign: 'center', borderBottom: '1px solid white', padding: '12px', marginBottom: '12px' }}>
        <span style={{ display: 'flex', flexDirection: 'row',  gap: '8px'}} size="-1">CALL NOW: <a href="tel:13002876" className={styles.callNow}>1300 BUSN</a></span>
      </div>
      <div style={{display: 'flex', gap: '8px'}}>
        <a href="https://www.instagram.com/wolfcharters_partybus/?hl=en">Instagram</a> 
        <a href="https://www.facebook.com/Wolf-Charters-Pty-Ltd-Party-Bus-105525084230003/">Faecbook</a>
      </div>
      <div style={{textAlign: 'center', padding: '8px 0'}}>
        <span>We Service all of Sydney</span><br />
        <span>Western Sydney</span><br />
        <span>Gosford</span><br />
        <span>Wollongong</span>
      </div>
    </footer>
  )
}

export default Footer;