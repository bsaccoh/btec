import { FaArrowRight } from 'react-icons/fa';
import './CaseStudies.css';

const caseStudies = [
    {
        id: 1,
        category: 'Telecom',
        title: 'Telecom Mediation System',
        challenge: 'Disconnected network elements generating massive volumes of raw CDRs with no unified collection, decoding, or validation pipeline.',
        solution: 'Built a comprehensive mediation platform for CDR/EDR collection, binary decoding, data enrichment, and seamless integration into billing, revenue assurance, and fraud management systems.',
        result: '99.8% CDR processing accuracy and 50% reduction in data reconciliation time.',
        color: '#f59e0b',
    },
    {
        id: 2,
        category: 'Data Engineering',
        title: 'Enterprise Data Warehouse Migration',
        challenge: 'Fragmented data across 15+ systems with no unified analytics capability for decision making.',
        solution: 'Built a centralized data lake with ETL pipelines, real-time dashboards, and predictive analytics models.',
        result: '3x faster reporting and data-driven decisions adopted across all departments.',
        color: '#38bdf8',
    },
    {
        id: 3,
        category: 'Enterprise Applications',
        title: 'Enterprise Application Development',
        challenge: 'Outdated manual processes and siloed legacy systems slowing down operations and decision-making across the organization.',
        solution: 'Developed custom enterprise applications with modern frameworks, integrating ERP, CRM, and workflow automation into a unified platform.',
        result: '70% improvement in operational efficiency and 3x faster cross-department collaboration.',
        color: '#a78bfa',
    },
];

const CaseStudies = () => {
    return (
        <section className="casestudies-section" id="case-studies">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Success <span className="text-gradient">Stories</span>
                    </h2>
                    <p className="section-subtitle">
                        Real challenges. Proven solutions. Measurable results.
                    </p>
                </div>

                <div className="casestudies-grid">
                    {caseStudies.map((cs) => (
                        <div className="case-card" key={cs.id}>
                            <div className="case-category" style={{ color: cs.color }}>
                                {cs.category}
                            </div>
                            <h3 className="case-title">{cs.title}</h3>

                            <div className="case-detail">
                                <div className="case-label">Challenge</div>
                                <p>{cs.challenge}</p>
                            </div>

                            <div className="case-detail">
                                <div className="case-label" style={{ color: cs.color }}>Solution</div>
                                <p>{cs.solution}</p>
                            </div>

                            <div className="case-result" style={{ borderColor: cs.color }}>
                                <div className="case-label" style={{ color: cs.color }}>Result</div>
                                <p>{cs.result}</p>
                            </div>

                            <button className="case-link" style={{ color: cs.color }}>
                                View Full Case Study <FaArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
