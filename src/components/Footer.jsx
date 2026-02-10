import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Footer.css'
import logo from '../assets/trust-shield_logo.png'

const Footer = () => {
    useScrollReveal();
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section reveal">
                    <img src={logo} alt="B-TEC Digital Solution" className="footer-logo" />
                    <p>
                        Providing expert IT consulting and software solutions to help your business thrive in the digital age.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link">𝕏</a>
                        <a href="#" className="social-link">in</a>
                        <a href="#" className="social-link">fb</a>
                        <a href="#" className="social-link">ig</a>
                    </div>
                </div>

                <div className="footer-section reveal delay-100">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section reveal delay-200">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><a href="#">Software Development</a></li>
                        <li><a href="#">Cloud Solutions</a></li>
                        <li><a href="#">Data Analytics</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>

                <div className="footer-section reveal delay-300">
                    <h4>Contact</h4>
                    <ul className="footer-links">
                        <li><a href="#contact">13 Lab Lane, Wilkinson Road</a></li>
                        <li><a href="mailto:info@btec-in.com">info@btec-in.com</a></li>
                        <li><a href="tel:+23272808080">+232 72 808 080</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} B-TEC Digital Solutions. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
