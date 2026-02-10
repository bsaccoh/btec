import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Testimonials.css'

const testimonials = [
    { quote: "B-TEC transformed our legacy systems into a modern, cloud-native infrastructure. Their expertise in big data analytics has given us insights we never thought possible.", name: "Sarah Johnson", role: "CTO, FinTrust Bank", initials: "SJ" },
    { quote: "The team's dedication to understanding our specific telecom mediation needs was impressive. The solution they delivered is robust, scalable, and incredibly efficient.", name: "David Chen", role: "Director of IT, TelcoGlobal", initials: "DC" },
    { quote: "We've worked with many consulting firms, but B-TEC stands out for their agility and technical depth. They are true partners in our digital transformation journey.", name: "Michael O'Connor", role: "CEO, RetailNext", initials: "MO" }
]

const Testimonials = () => {
    useScrollReveal();

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Client <span className="text-gradient">Testimonials</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div className="testimonial-card reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{item.quote}</p>
                            <div className="client-info">
                                <div className="client-avatar">{item.initials}</div>
                                <div className="client-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
