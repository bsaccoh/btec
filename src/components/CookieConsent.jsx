import { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('btec-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('btec-cookie-consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('btec-cookie-consent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner">
            <div className="cookie-content">
                <p>
                    We use cookies to enhance your browsing experience and analyze site traffic.
                    By continuing, you agree to our use of cookies.{' '}
                    <a href="#privacy" className="cookie-privacy-link" onClick={(e) => { e.preventDefault(); document.querySelector('.footer-legal-btn')?.click(); }}>
                        Learn more
                    </a>
                </p>
                <div className="cookie-actions">
                    <button className="cookie-btn cookie-accept" onClick={accept}>
                        Accept
                    </button>
                    <button className="cookie-btn cookie-decline" onClick={decline}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
