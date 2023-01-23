import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
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