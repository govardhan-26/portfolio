import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
        <nav className='Nav'>
        <ul className="nav-links">
            <li className="links"><a href="#Home">Home</a></li>
            <li className="links"><a href="#About">About</a></li>
            <li className="links"><a href="#Projects">Projects</a></li>
            <li className="links"><a href="#Contact">Contact</a></li>
        </ul>
        </nav>
    </section>
  )
}

export default Navbar