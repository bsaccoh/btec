import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/trust-shield_logo.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <a href="#">
                    <img src={logo} alt="B-TEC Digital Solution" className="logo-image" />
                </a>
            </div>

            <ul className="nav-menu">
                <li><a href="#hero" className="nav-link">Home</a></li>
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#contact" className="nav-cta">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
