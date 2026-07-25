'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Truck Repair Services</h1>
          <p>Expert mechanical repairs for all truck types. Fast, reliable, and affordable service you can trust.</p>
          <div className="buttons">
            <Link href="/contact" className="btn">Get a Free Quote</Link>
            <a href="#features" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="container">
          <h2>Welcome to TS Truck Repairs</h2>
          <p>We provide comprehensive truck repair solutions with expert technicians, modern diagnostic equipment, and a commitment to quality workmanship. Whether you need routine maintenance or emergency repairs, we're here to keep your truck running smoothly.</p>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="features" id="features">
        <div className="container">
          <h2>Why Choose TS Truck Repairs?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>🔧 Expert Technicians</h3>
              <p>Experienced mechanics dedicated to quality truck and trailer repairs.</p>
            </div>

            <div className="feature-card">
              <h3>🚛 Fleet Maintenance</h3>
              <p>Keeping your fleet reliable, safe, and on the road with scheduled maintenance.</p>
            </div>

            <div className="feature-card">
              <h3>💻 Computer Diagnostics</h3>
              <p>Advanced diagnostic equipment to quickly identify and resolve faults.</p>
            </div>

            <div className="feature-card">
              <h3>⚡ Fast Turnaround</h3>
              <p>We work efficiently to minimise downtime and get you back on the road.</p>
            </div>

            <div className="feature-card">
              <h3>🛠 Quality Workmanship</h3>
              <p>Professional repairs using trusted parts and proven repair methods.</p>
            </div>

            <div className="feature-card">
              <h3>📍 Convenient Location</h3>
              <p>Located in Oaklands, Verulam, serving businesses throughout KwaZulu-Natal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Engine Repair</h3>
              <p>Comprehensive engine diagnostics and repair services for all truck models</p>
            </div>

            <div className="service-card">
              <h3>Transmission Service</h3>
              <p>Transmission repair, fluid changes, and complete rebuilds</p>
            </div>

            <div className="service-card">
              <h3>Brake Service</h3>
              <p>Brake inspection, repair, and replacement for safety and performance</p>
            </div>

            <div className="service-card">
              <h3>Suspension & Alignment</h3>
              <p>Suspension repairs and professional wheel alignment services</p>
            </div>

            <div className="service-card">
              <h3>Electrical Service</h3>
              <p>Battery, alternator, and electrical system repairs and diagnostics</p>
            </div>

            <div className="service-card">
              <h3>Preventive Maintenance</h3>
              <p>Regular maintenance to keep your truck running smoothly and efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Have questions or ready to book your service? Contact us today!</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span>📍</span>
                <p>Oaklands, Verulam, KwaZulu-Natal</p>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <p><a href="mailto:info@tstruckrepairs.com">info@tstruckrepairs.com</a></p>
              </div>
              <div className="contact-item">
                <span>🕐</span>
                <div>
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <h3>Quick Quote Request</h3>
              <p style={{color: '#aaa', marginBottom: '20px'}}>Fill out this quick form and we'll get back to you within 24 hours.</p>
              <Link href="/contact" className="btn" style={{display: 'block', textAlign: 'center'}}>Full Contact Form</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
