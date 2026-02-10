import React, { useEffect } from 'react'
import './ServiceModal.css'

const ServiceModal = ({ service, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen || !service) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <div className="modal-icon">{service.icon}</div>
                    <h2>{service.title}</h2>
                </div>

                <div className="modal-body">
                    <p className="modal-intro">{service.desc}</p>

                    <div className="modal-section">
                        <h3>Overview</h3>
                        <p>{service.detailedDesc}</p>
                    </div>

                    {service.features && (
                        <div className="modal-section">
                            <h3>Key Features</h3>
                            <ul className="features-list">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {service.benefits && (
                        <div className="modal-section">
                            <h3>Benefits</h3>
                            <ul className="benefits-list">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {service.technologies && (
                        <div className="modal-section">
                            <h3>Technologies & Tools</h3>
                            <div className="tech-tags">
                                {service.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <a href="#contact" className="modal-cta" onClick={onClose}>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceModal
