import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const formRef = useRef();
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',   // Replace with your EmailJS Service ID
                'YOUR_TEMPLATE_ID',  // Replace with your EmailJS Template ID
                formRef.current,
                'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
            )
            .then(() => {
                setStatus('success');
                setSending(false);
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            })
            .catch(() => {
                setStatus('error');
                setSending(false);
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in <span className="text-gradient">Touch</span></h2>
                    <p>Ready to transform your business? Contact us today for a free consultation.</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h4>Our Location</h4>
                                <p>13 Lab Lane, Wilkinson Road<br />Freetown, Sierra Leone</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>Email Us</h4>
                                <p>info@btec-in.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div>
                                <h4>Call Us</h4>
                                <p>+232 72 808 080</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={sending}>
                            {sending ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="form-status form-success">✓ Message sent successfully! We'll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="form-status form-error">✗ Failed to send message. Please try again or email us directly.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
