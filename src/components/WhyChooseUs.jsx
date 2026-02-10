import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './WhyChooseUs.css'

const features = [
    { title: "Expert Team", desc: "Our team consists of certified professionals with years of industry experience across various domains." },
    { title: "Tailored Solutions", desc: "We don't believe in one-size-fits-all. Every solution is customized to meet your specific business needs." },
    { title: "Agile Approach", desc: "We use agile methodologies to ensure faster delivery, flexibility, and continuous improvement." },
    { title: "24/7 Support", desc: "Our dedicated support team is always available to ensure your systems run smoothly without interruption." },
    { title: "Innovation Led", desc: "We stay ahead of the curve by adopting the latest technologies and trends to give you a competitive edge." },
    { title: "Proven Track Record", desc: "With over 50+ successful projects, we have a history of delivering tangible results for our clients." }
]

const WhyChooseUs = () => {
    useScrollReveal();

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Why <span className="text-gradient">Choose Us</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-box reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
