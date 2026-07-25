'use client'

import styles from './Services.module.css'

const services = [
  {
    id: 1,
    icon: '🔧',
    title: 'Engine Repair',
    description: 'Comprehensive engine diagnostics and repair services for all truck models'
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'Transmission Service',
    description: 'Transmission repair, fluid changes, and complete rebuilds'
  },
  {
    id: 3,
    icon: '🛑',
    title: 'Brake Service',
    description: 'Brake inspection, repair, and replacement for safety and performance'
  },
  {
    id: 4,
    icon: '🚗',
    title: 'Suspension & Alignment',
    description: 'Suspension repairs and professional wheel alignment services'
  },
  {
    id: 5,
    icon: '⚡',
    title: 'Electrical Service',
    description: 'Battery, alternator, and electrical system repairs and diagnostics'
  },
  {
    id: 6,
    icon: '🛠️',
    title: 'Preventive Maintenance',
    description: 'Regular maintenance to keep your truck running smoothly and efficiently'
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <p className={styles.subtitle}>We provide comprehensive truck repair solutions</p>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
