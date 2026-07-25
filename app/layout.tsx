import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TS Truck Repairs - Professional Truck Repair Services in Verulam',
  description: 'Expert truck repair services in Oaklands, Verulam. Engine repair, transmission service, brake service, and more. Free quotes available.',
  keywords: ['truck repair', 'truck maintenance', 'verulam', 'kwazulu-natal', 'oaklands'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
