'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

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
      <main className="contact-page">
        <div className="container" style={{paddingTop: '100px'}}>
          <h1 style={{fontSize: '42px', marginBottom: '10px', color: '#00c9a7'}}>Get Your Free Quote</h1>
          <p style={{textAlign: 'center', color: '#ccc', marginBottom: '30px', fontSize: '18px'}}>Fill out the form below and we'll get back to you within 24 hours</p>

          {submitted && (
            <div style={{background: '#4caf50', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '30px', textAlign: 'center', fontWeight: '500'}}>
              ✓ Thank you! Your quote request has been received. We'll contact you soon!
            </div>
          )}

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start', marginBottom: '50px'}}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
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

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div className="form-group">
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
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="071 406 3704"
                  />
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div className="form-group">
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
                <div className="form-group">
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

              <div className="form-group">
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

              <button type="submit" className="btn" disabled={loading} style={{width: '100%'}}>
                {loading ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>

            <div style={{background: '#1a1a1a', padding: '40px', borderRadius: '12px', border: '1px solid rgba(0, 201, 167, 0.2)'}}>
              <h3 style={{color: '#00c9a7', marginBottom: '20px', fontSize: '24px'}}>Why Choose TS Truck Repairs?</h3>
              <ul style={{listStyle: 'none', marginBottom: '30px'}}>
                <li style={{color: '#ccc', marginBottom: '12px', paddingLeft: '25px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00c9a7'}}>✓</span> Expert Technicians with years of experience
                </li>
                <li style={{color: '#ccc', marginBottom: '12px', paddingLeft: '25px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00c9a7'}}>✓</span> Fast turnaround time on repairs
                </li>
                <li style={{color: '#ccc', marginBottom: '12px', paddingLeft: '25px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00c9a7'}}>✓</span> Competitive pricing and transparent quotes
                </li>
                <li style={{color: '#ccc', marginBottom: '12px', paddingLeft: '25px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00c9a7'}}>✓</span> All work backed by warranty
                </li>
                <li style={{color: '#ccc', paddingLeft: '25px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00c9a7'}}>✓</span> Free diagnostic evaluation
                </li>
              </ul>

              <h3 style={{color: '#00c9a7', marginBottom: '20px', fontSize: '24px'}}>Quick Contact</h3>
              <p style={{color: '#aaa', marginBottom: '10px'}}><strong>📞 Phone:</strong> <a href="tel:0714063704" style={{color: '#00c9a7', textDecoration: 'none'}}>071 406 3704</a></p>
              <p style={{color: '#aaa', marginBottom: '10px'}}><strong>📧 Email:</strong> <a href="mailto:tstruckrepairs@gmail.com" style={{color: '#00c9a7', textDecoration: 'none'}}>tstruckrepairs@gmail.com</a></p>
              <p style={{color: '#aaa'}}><strong>📍 Location:</strong> 1 Oakbridge Place, Oaklands, Verulam 4339</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
