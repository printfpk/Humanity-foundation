import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import './Header.css'
import logo from '../assets/logo.svg'
import Button from './Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="Humanity Foundation" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/volunteer" onClick={closeMenu}>Volunteering</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>Programmes</NavLink>
              </li>
              <li>
                <NavLink to="/model" onClick={closeMenu}>Events</NavLink>
              </li>
              <li>
                <NavLink to="/donate" onClick={closeMenu}>Stakeholders Conference 2025</NavLink>
              </li>
            </ul>
            <Button title="Donate " className="desktop-only" />
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoCloseOutline /> : <HiOutlineMenuAlt1 />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
