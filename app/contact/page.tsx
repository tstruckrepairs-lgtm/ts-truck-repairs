'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    truckType: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      // In production, send to your backend/email service
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        truckType: '',
        service: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <div className={styles.container}>
          <h1>Get Your Free Quote</h1>
          <p className={styles.subtitle}>Fill out the form below and we'll get back to you within 24 hours</p>

          {submitted && (
            <div className={styles.successMessage}>
              ✓ Thank you! Your quote request has been received. We'll contact you soon!
            </div>
          )}

          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="truckType">Truck Type</label>
                  <select
                    id="truckType"
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleChange}
                  >
                    <option value="">Select truck type...</option>
                    <option value="pickup">Pickup Truck</option>
                    <option value="semi">Semi Truck</option>
                    <option value="dump">Dump Truck</option>
                    <option value="box">Box Truck</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select service...</option>
                    <option value="engine">Engine Repair</option>
                    <option value="transmission">Transmission Service</option>
                    <option value="brake">Brake Service</option>
                    <option value="suspension">Suspension & Alignment</option>
                    <option value="electrical">Electrical Service</option>
                    <option value="maintenance">Preventive Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your truck and what you need..."
                  rows={5}
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>

            <div className={styles.info}>
              <h3>Why Choose TS Truck Repairs?</h3>
              <ul>
                <li>✓ Expert Technicians with years of experience</li>
                <li>✓ Fast turnaround time on repairs</li>
                <li>✓ Competitive pricing and transparent quotes</li>
                <li>✓ All work backed by warranty</li>
                <li>✓ Free diagnostic evaluation</li>
              </ul>

              <h3>Quick Contact</h3>
              <p><strong>📞 Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
              <p><strong>📧 Email:</strong> <a href="mailto:info@tstruckrepairs.com">info@tstruckrepairs.com</a></p>
              <p><strong>📍 Location:</strong> Your City, State</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
