import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='Nav'>
        <ul className="nav-links">
            <li className="links"><a href="#home">Home</a></li>
            <li className="links"><a href="#about">About</a></li>
            <li className="links"><a href="#Projects">Projects</a></li>
            <li className="links"><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar