import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div style={{textAlign: 'center'}}>
        <font size="-1">CALL NOW: <a href="tel:132876" className={styles.callNow}>13 BUSN</a></font>
      </div>
    </footer>
  )
}

export default Footer;