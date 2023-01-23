import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{display: 'flex', gap: '8px'}}>
        <a href="https://www.instagram.com/candypartybus/">Instagram</a> 
        <a href="#">Facebook</a>
      </div>
      <div style={{textAlign: 'center', padding: '8px 0'}}>
        <span>Based in Sydney</span><br />
        <span>Servicing areas from North to South Coast</span><br />
        <span>and everywhere in between 👅</span><br />
      </div>
    </footer>
  )
}

export default Footer;