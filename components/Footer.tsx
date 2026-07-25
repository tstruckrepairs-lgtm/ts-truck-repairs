'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>TS Truck Repairs</h3>
          <p>Professional truck repair services you can trust. We're committed to keeping your truck running smoothly and safely.</p>
        </div>
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p><a href="mailto:info@tstruckrepairs.com">📧 info@tstruckrepairs.com</a></p>
          <p><a href="tel:+1234567890">📞 (123) 456-7890</a></p>
          <p>📍 Your City, State</p>
        </div>
        <div className={styles.hours}>
          <h4>Business Hours</h4>
          <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {currentYear} TS Truck Repairs. All rights reserved.</p>
      </div>
    </footer>
  )
}
