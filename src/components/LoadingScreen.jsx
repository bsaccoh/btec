import { useState, useEffect } from 'react';
import logo from '../assets/logo_png.png';
import './LoadingScreen.css';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <img src={logo} alt="B-TEC" className="loading-logo-img" />
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
                <p className="loading-text">Digital Solutions</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
