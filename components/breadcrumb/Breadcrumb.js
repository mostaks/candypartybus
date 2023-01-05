import React from 'react';
import styles from '../../styles/Breadcrumb.module.css'
import Link from 'next/link';

const Breadcrumb = ({ page, link }) => {
  return (
    <div className={styles.breadcrumb}><Link href="./">Home</Link> / <Link href={link}>{page}</Link></div>
  )
}

export default Breadcrumb;