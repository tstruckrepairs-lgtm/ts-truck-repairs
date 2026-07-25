'use client'

import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>TS Truck Repairs</h1>
        </Link>
        <nav className={styles.nav}>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#about">About</Link>
        </nav>
      </div>
    </header>
  )
}
