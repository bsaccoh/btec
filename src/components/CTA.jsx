import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './CTA.css'

const CTA = () => {
    useScrollReveal();

    return (
        <section className="cta">
            <div className="cta-content reveal">
                <h2>Ready to Transform Your Business?</h2>
                <p>Let's discuss how our technology solutions can drive growth and efficiency for your organization.</p>
                <a href="#contact" className="btn btn-primary">Start a Conversation</a>
            </div>
        </section>
    )
}

export default CTA
