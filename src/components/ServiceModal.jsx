import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
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

    const modalContent = (
        <div className="svc-modal-overlay" onClick={onClose}>
            <div className="svc-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="svc-modal-close" onClick={onClose}>×</button>

                <div className="svc-modal-header">
                    <div className="svc-modal-icon">{service.icon}</div>
                    <h2>{service.title}</h2>
                </div>

                <div className="svc-modal-body">
                    <div className="svc-modal-overview">
                        <h3>Overview</h3>
                        <p>{service.detailedDesc || service.desc}</p>
                    </div>

                    {(service.features || service.benefits) && (
                        <div className="svc-modal-columns">
                            {service.features && (
                                <div className="svc-modal-col">
                                    <h3>Key Features</h3>
                                    <ul className="svc-features-list">
                                        {service.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {service.benefits && (
                                <div className="svc-modal-col">
                                    <h3>Benefits</h3>
                                    <ul className="svc-benefits-list">
                                        {service.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {service.technologies && (
                        <div className="svc-modal-tech">
                            <h3>Technologies & Tools</h3>
                            <div className="svc-tech-tags">
                                {service.technologies.map((tech, index) => (
                                    <span key={index} className="svc-tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="svc-modal-footer">
                    <a href="#contact" className="svc-modal-cta" onClick={onClose}>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )

    return createPortal(modalContent, document.body)
}

export default ServiceModal
