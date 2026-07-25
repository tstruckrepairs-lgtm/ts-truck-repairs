import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TS Truck Repairs',
  description: 'Official website for TS Truck Repairs - Your trusted truck repair service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
