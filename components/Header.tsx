'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image 
                src="/logo.png" 
                alt="TS Truck Repairs Logo" 
                width={60} 
                height={60}
                priority
                style={{objectFit: 'contain'}}
              />
            </div>
            <div>
              <div style={{fontSize: '20px', fontWeight: '800', color: '#ffffff', lineHeight: '1'}}>TS</div>
              <div style={{fontSize: '11px', color: '#00c9a7', fontWeight: '600', letterSpacing: '1px'}}>TRUCK REPAIRS</div>
            </div>
          </div>
        </Link>
        <nav>
          <a href="#features">Why Us</a>
          <a href="#contact">Contact</a>
          <Link href="/contact">Get Quote</Link>
        </nav>
      </div>
    </header>
  )
}
