'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Professional Truck Repair Services</h2>
          <p>Expert mechanical repairs for all truck types. Fast, reliable, and affordable service you can trust.</p>
          <Link href="#contact" className={styles.cta}>
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
