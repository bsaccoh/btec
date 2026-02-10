import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Process.css'

const steps = [
    { num: "01", title: "Discovery", desc: "We start by understanding your business goals, challenges, and requirements through in-depth consultation." },
    { num: "02", title: "Strategy", desc: "Our experts design a tailored roadmap and technical architecture aligned with your objectives." },
    { num: "03", title: "Implementation", desc: "We build and deploy your solution using agile methodologies and best-in-class technologies." },
    { num: "04", title: "Support", desc: "Continuous monitoring, maintenance, and optimization ensure your digital assets perform at their peak." }
]

const Process = () => {
    useScrollReveal();

    return (
        <section className="process">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our <span className="text-gradient">Process</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="process-step reveal" key={index} style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
