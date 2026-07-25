'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    title: 'Engine Repair',
    description: 'Complete engine overhaul and repair',
    image: '/gallery/engine-repair.jpg',
    category: 'engine'
  },
  {
    id: 2,
    title: 'Transmission Service',
    description: 'Professional transmission rebuild',
    image: '/gallery/transmission.jpg',
    category: 'transmission'
  },
  {
    id: 3,
    title: 'Brake Service',
    description: 'Complete brake system inspection and repair',
    image: '/gallery/brake-service.jpg',
    category: 'brake'
  },
  {
    id: 4,
    title: 'Suspension Work',
    description: 'Suspension alignment and repair',
    image: '/gallery/suspension.jpg',
    category: 'suspension'
  },
  {
    id: 5,
    title: 'Electrical Repair',
    description: 'Battery and electrical system diagnostics',
    image: '/gallery/electrical.jpg',
    category: 'electrical'
  },
  {
    id: 6,
    title: 'Fleet Maintenance',
    description: 'Regular scheduled fleet maintenance',
    image: '/gallery/fleet.jpg',
    category: 'maintenance'
  },
  {
    id: 7,
    title: 'Custom Work',
    description: 'Custom truck modifications and repairs',
    image: '/gallery/custom.jpg',
    category: 'custom'
  },
  {
    id: 8,
    title: 'Diagnostics',
    description: 'Advanced computer diagnostics',
    image: '/gallery/diagnostics.jpg',
    category: 'diagnostics'
  },
]

const categories = ['all', 'engine', 'transmission', 'brake', 'suspension', 'electrical', 'maintenance', 'custom', 'diagnostics']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <Header />
      <main style={{paddingTop: '100px', paddingBottom: '50px'}}>
        <div className="container">
          <h1 style={{fontSize: '42px', marginBottom: '10px', color: '#00c9a7', textAlign: 'center'}}>Our Work Gallery</h1>
          <p style={{textAlign: 'center', color: '#ccc', marginBottom: '40px', fontSize: '18px'}}>Professional truck repair work showcasing our expertise and quality</p>

          {/* Filter Buttons */}
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px'}}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 20px',
                  background: selectedCategory === cat ? '#00c9a7' : '#1a1a1a',
                  color: selectedCategory === cat ? '#111' : '#00c9a7',
                  border: `2px solid #00c9a7`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  transition: '0.3s',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginBottom: '50px'
          }}>
            {filteredImages.map(image => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 201, 167, 0.2)',
                  transition: 'all 0.3s ease',
                  background: '#1a1a1a',
                }}
                onMouseEnter={(e) => {
                  const elem = e.currentTarget as HTMLElement
                  elem.style.transform = 'translateY(-8px)'
                  elem.style.boxShadow = '0 10px 30px rgba(0, 201, 167, 0.2)'
                  elem.style.borderColor = '#00c9a7'
                }}
                onMouseLeave={(e) => {
                  const elem = e.currentTarget as HTMLElement
                  elem.style.transform = 'translateY(0)'
                  elem.style.boxShadow = 'none'
                  elem.style.borderColor = 'rgba(0, 201, 167, 0.2)'
                }}
              >
                <div style={{width: '100%', height: '200px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{color: '#00c9a7', fontSize: '48px', textAlign: 'center'}}>📷</div>
                </div>
                <div style={{padding: '20px'}}>
                  <h3 style={{color: '#00c9a7', marginBottom: '8px', fontSize: '18px'}}>{image.title}</h3>
                  <p style={{color: '#aaa', fontSize: '14px'}}>{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxOpen && selectedImage && (
            <div
              onClick={closeLightbox}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'relative',
                  maxWidth: '800px',
                  width: '90%',
                  background: '#1a1a1a',
                  borderRadius: '12px',
                  border: '2px solid #00c9a7',
                  padding: '20px',
                }}
              >
                <button
                  onClick={closeLightbox}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#00c9a7',
                    color: '#111',
                    border: 'none',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  ✕
                </button>
                <div style={{width: '100%', height: '300px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '20px'}}>
                  <div style={{color: '#00c9a7', fontSize: '64px'}}></div>
                </div>
                <h2 style={{color: '#00c9a7', marginBottom: '10px'}}>{selectedImage.title}</h2>
                <p style={{color: '#ccc'}}>{selectedImage.description}</p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            padding: '50px',
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid rgba(0, 201, 167, 0.2)',
          }}>
            <h2 style={{color: '#00c9a7', fontSize: '32px', marginBottom: '15px'}}>Ready to Get Your Truck Fixed?</h2>
            <p style={{color: '#ccc', marginBottom: '25px', fontSize: '16px'}}>Contact us today for a free quote and professional truck repair service</p>
            <Link href="/contact" className="btn" style={{display: 'inline-block'}}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
