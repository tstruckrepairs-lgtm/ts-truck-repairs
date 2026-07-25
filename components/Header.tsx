'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <span className={styles.logoText}>TS</span>
            <span className={styles.companyName}>Truck Repairs</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/contact">Get Quote</Link>
        </nav>
      </div>
    </header>
  )
}
