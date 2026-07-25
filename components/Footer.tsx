'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>TS Truck Repairs</h3>
          <p>Professional truck repair services you can trust.</p>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@tstruckrepairs.com">info@tstruckrepairs.com</a></p>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
        <div className={styles.hours}>
          <h4>Hours</h4>
          <p>Monday - Friday: 8am - 6pm</p>
          <p>Saturday: 9am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {currentYear} TS Truck Repairs. All rights reserved.</p>
      </div>
    </footer>
  )
}
