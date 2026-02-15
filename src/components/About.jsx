import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
    useScrollReveal('reveal-left');
    useScrollReveal('reveal-right');
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image reveal-left">
                        <div className="img-placeholder">
                            <div className="img-overlay">
                                <div className="about-logo">B-TEC <span>Digital</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="about-text reveal-right">
                        <h2>Driving Innovation Through <br /><span className="text-gradient">Technology</span></h2>
                        <p>
                            B-TEC Digital Solutions is a premier IT consulting and service provider dedicated to empowering organizations with cutting-edge technology. We specialize in transforming complex business challenges into scalable digital solutions.
                        </p>
                        <p>
                            From government agencies to telecom operators and enterprises, we partner with our clients to deliver software, cloud infrastructure, and data analytics that drive real growth and efficiency.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Tech Experts</p>
                            </div>
                            <div className="stat-item">
                                <h3>99%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* New Mission & Vision Section */}
                <div className="mission-vision-section">
                    <div className="container">
                        <h2 className="section-title">Our <span className="text-gradient">Core Values</span></h2>
                        <div className="mission-vision-grid">
                            <div className="mission-vision-card">
                                <div className="mission-vision-icon">
                                    <FaBullseye className="icon" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage through cutting-edge technology and expert consulting services.</p>
                            </div>
                            <div className="mission-vision-card">
                                <div className="mission-vision-icon">
                                    <FaEye className="icon" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be the leading digital transformation partner for organizations worldwide, recognized for our technical excellence, innovative solutions, and commitment to client success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
