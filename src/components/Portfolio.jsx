import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

const portfolioItems = [
    { title: "E-Gov Portal", category: "Government", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { title: "FinTech App", category: "Mobile Development", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { title: "Cloud Migration", category: "Cloud Services", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" },
    { title: "Smart Analytics", category: "Big Data", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
]

const partners = ["TechCorp", "GovSystems", "DataFlow", "CloudNine", "SecureNet"]

const Portfolio = () => {
    useScrollReveal();
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our <span className="text-gradient">Work</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <div className="portfolio-item reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <img src={item.image} alt={item.title} className="portfolio-img" />
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="partners reveal delay-200">
                    <h3>Trusted By Industry Leaders</h3>
                    <div className="partners-logos">
                        {partners.map((partner, index) => (
                            <div className="partner-logo" key={index}>{partner}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
