import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-text">
                    <h2>Stay <span className="text-gradient">Updated</span></h2>
                    <p>Get the latest insights, industry news, and updates delivered to your inbox.</p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div className="newsletter-input-wrapper">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="newsletter-btn">
                            <FaPaperPlane />
                            <span>Subscribe</span>
                        </button>
                    </div>
                    {submitted && (
                        <p className="newsletter-success">✓ Thank you for subscribing!</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
