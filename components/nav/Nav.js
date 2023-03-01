import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link style={{height: 0}} href={"/"}>
          <Image src="/img/candy-logo-bus.png" alt="Candy logo" className={styles.logo} width={90} height={76} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav;