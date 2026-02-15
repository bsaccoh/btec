import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/trust-shield_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Find active section
            const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
            let current = 'hero';
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <a href="#">
                        <img src={logo} alt="B-TEC Digital Solution" className="logo-image" />
                    </a>
                </div>

                <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <li className="nav-item" key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`nav-link ${activeSection === link.id ? 'nav-active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="nav-item">
                        <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
