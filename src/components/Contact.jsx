import React from 'react'
import './Contact.css'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting B-TEC! We will get back to you soon.');
    }

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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
