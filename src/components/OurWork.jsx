import React from 'react';
import './OurWork.css';
import useScrollReveal from '../hooks/useScrollReveal';

const OurWork = () => {
    useScrollReveal('reveal-up');
    
    return (
        <section className="our-work" id="our-work">
            <div className="container">
                <h2 className="section-title">Our <span className="text-gradient">Work</span></h2>
                
                {/* Text Section */}
                <div className="work-text-section reveal-up">
                    <div className="work-text-container">
                        <h3>Telecom Mediation Solutions</h3>
                        <p>
                            Our advanced telecom mediation platform transforms raw network data into actionable business intelligence. 
                            The solution provides real-time processing, mediation, and aggregation of usage data from multiple network elements.
                        </p>
                        <div className="work-features">
                            <div className="feature">
                                <span className="feature-icon">✓</span>
                                <span>Real-time data processing</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">✓</span>
                                <span>Multi-vendor support</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">✓</span>
                                <span>Scalable architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default OurWork;
