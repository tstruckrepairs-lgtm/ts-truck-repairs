'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          TS <span>Truck Repairs</span>
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
