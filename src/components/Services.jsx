import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Services.css'

const servicesData = [
    { title: "Software Development", icon: "💻", desc: "Custom software solutions tailored to your unique business requirements." },
    { title: "Mobile Development", icon: "📱", desc: "Native and cross-platform mobile apps for iOS and Android devices." },
    { title: "Enterprise Applications", icon: "🏢", desc: "Scalable enterprise-grade applications to streamline your operations." },
    { title: "Networking", icon: "🔗", desc: "Robust networking infrastructure and secure connectivity solutions." },
    { title: "Database Management", icon: "🗄️", desc: "Secure and efficient database design, implementation, and optimization." },
    { title: "Cloud Solutions", icon: "☁️", desc: "Cloud migration, hosting, and architecture design (AWS, Azure, GCP)." },
    { title: "Big Data & Analytics", icon: "📊", desc: "End-to-end big data services from data ingestion, processing, and transformation for revenue analysis and actionable insights." },
    { title: "Mediation Services", icon: "🔄", desc: "Telecom mediation services including data ingestion, binary decoding, transformation, and integration into billing, big data, revenue, and fraud systems." },
    { title: "Power BI", icon: "📈", desc: "Interactive data visualization and business intelligence reporting." },
]

const Services = () => {
    useScrollReveal();
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our <span className="text-gradient">Services</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
