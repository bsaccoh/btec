import { FaBriefcase, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import './Careers.css';

const openPositions = [
    {
        id: 1,
        title: 'Senior Data Engineer',
        type: 'Full-time',
        location: 'Freetown / Remote',
        description: 'Design and build scalable data pipelines, ETL processes, and analytics platforms for enterprise clients.',
    },
    {
        id: 2,
        title: 'Telecom Solutions Architect',
        type: 'Full-time',
        location: 'Freetown',
        description: 'Lead the design and implementation of telecom mediation, billing, and VAS platforms.',
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        type: 'Contract',
        location: 'Remote',
        description: 'Build modern web applications using React, Node.js, and cloud technologies for diverse client projects.',
    },
];

const Careers = () => {
    return (
        <section className="careers-section" id="careers">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Join Our <span className="text-gradient">Team</span>
                    </h2>
                    <p className="section-subtitle">
                        We're growing and looking for talented individuals to shape the future of technology in Africa
                    </p>
                </div>

                <div className="careers-grid">
                    {openPositions.map((pos) => (
                        <div className="career-card" key={pos.id}>
                            <div className="career-header">
                                <h3 className="career-title">{pos.title}</h3>
                                <div className="career-tags">
                                    <span className="career-tag">
                                        <FaBriefcase /> {pos.type}
                                    </span>
                                    <span className="career-tag">
                                        <FaMapMarkerAlt /> {pos.location}
                                    </span>
                                </div>
                            </div>
                            <p className="career-desc">{pos.description}</p>
                            <button className="career-apply">
                                Apply Now <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="careers-cta">
                    <p>Don't see a role that fits? We're always looking for exceptional talent.</p>
                    <a href="#contact" className="careers-contact-btn">Get in Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
