export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <p>&copy; {currentYear} TS Truck Repairs. All rights reserved. | Professional Truck Repair Services in KwaZulu-Natal</p>
    </footer>
  )
}
