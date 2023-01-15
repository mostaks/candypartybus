import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{textAlign: 'center', borderBottom: '1px solid white', padding: '12px', marginBottom: '12px' }}>
        <span style={{ display: 'flex', flexDirection: 'row',  gap: '8px'}} size="-1">CALL NOW: <a href="tel:130022639287" className={styles.callNow}>1300 CANDYBUS</a></span>
      </div>
      <div style={{display: 'flex', gap: '8px'}}>
        <a href="https://www.instagram.com/candypartybus/">Instagram</a> 
        <a href="#">Facebook</a>
      </div>
      <div style={{textAlign: 'center', padding: '8px 0'}}>
        <span>We Service all of Sydney</span><br />
        <span>Western Sydney</span><br />
        <span>Terrigal</span><br />
        <span>Wollongong</span>
      </div>
    </footer>
  )
}

export default Footer;