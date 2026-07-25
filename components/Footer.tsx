export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <div className="container" style={{textAlign: 'center'}}>
        <p>&copy; {currentYear} TS Truck Repairs. All rights reserved. | Professional Truck Repair Services in KwaZulu-Natal</p>
        <p style={{fontSize: '12px', marginTop: '10px', color: '#666'}}>1 Oakbridge Place, Oaklands, Verulam 4339 | 071 406 3704 | tstruckrepairs@gmail.com</p>
      </div>
    </footer>
  )
}
