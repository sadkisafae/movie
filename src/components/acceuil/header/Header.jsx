import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <nav>
      <h1>Movies Database</h1>

      <Link to='Authentification' >
      <button className='admin'> admin</button>
      </Link>
    </nav>
  )
}
