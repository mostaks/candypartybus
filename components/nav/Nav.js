import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <Image src="/img/candy-logo.png" alt="Candy logo" className={styles.logo} width={70} height={70} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav;