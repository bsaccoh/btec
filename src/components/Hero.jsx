import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import HeroParticles from './HeroParticles'
import './Hero.css'

const Hero = () => {
    useScrollReveal();
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <video className="hero-video" autoPlay loop muted playsInline>
                <source src="/video/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <HeroParticles />

            <div className="hero-content">
                <h1 className="reveal">Transforming Ideas into <span className="text-gradient">Digital Reality</span></h1>
                <p className="reveal delay-100">B-TEC Digital Solutions provides cutting-edge IT consulting, software development, and data analytics to empower your business growth.</p>

                <div className="hero-btns reveal delay-200">
                    <a href="#contact" className="btn btn-primary">Get Started</a>
                    <a href="#services" className="btn btn-secondary">Our Services</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
