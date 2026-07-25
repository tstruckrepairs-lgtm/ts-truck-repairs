'use client'

import styles from './Services.module.css'

const services = [
  {
    id: 1,
    title: 'Engine Repair',
    description: 'Comprehensive engine diagnostics and repair services'
  },
  {
    id: 2,
    title: 'Transmission Service',
    description: 'Transmission repair and fluid changes'
  },
  {
    id: 3,
    title: 'Brake Service',
    description: 'Brake inspection, repair, and replacement'
  },
  {
    id: 4,
    title: 'Suspension & Alignment',
    description: 'Suspension repairs and wheel alignment'
  },
  {
    id: 5,
    title: 'Electrical Service',
    description: 'Battery, alternator, and electrical system repairs'
  },
  {
    id: 6,
    title: 'Preventive Maintenance',
    description: 'Regular maintenance to keep your truck running smoothly'
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
