'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Professional Truck Repair Services</h2>
          <p>Expert mechanical repairs for all truck types. Fast, reliable, and affordable service you can trust.</p>
          <div className={styles.buttons}>
            <a href="/contact" className={styles.ctaPrimary}>
              Get a Free Quote
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
