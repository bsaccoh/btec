import { FaCheck, FaArrowRight } from 'react-icons/fa';
import './Pricing.css';

const plans = [
    {
        id: 1,
        name: 'Advisory',
        description: 'Strategic consulting and technical advisory for your projects',
        features: [
            'Technical assessment & audit',
            'Architecture review',
            'Technology roadmap',
            'Best practices guidance',
            'Monthly advisory sessions',
        ],
        cta: 'Get Started',
        highlighted: false,
    },
    {
        id: 2,
        name: 'Project-Based',
        description: 'End-to-end project delivery with dedicated team and milestones',
        features: [
            'Everything in Advisory',
            'Dedicated project team',
            'Custom solution development',
            'Testing & QA',
            'Deployment & handover',
            'Post-launch support',
        ],
        cta: 'Get a Quote',
        highlighted: true,
    },
    {
        id: 3,
        name: 'Managed Services',
        description: 'Ongoing management, monitoring, and optimization of your systems',
        features: [
            'Everything in Project-Based',
            '24/7 system monitoring',
            'Dedicated account manager',
            'SLA-backed support',
            'Continuous optimization',
            'Quarterly business reviews',
        ],
        cta: 'Contact Us',
        highlighted: false,
    },
];

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Engagement <span className="text-gradient">Models</span>
                    </h2>
                    <p className="section-subtitle">
                        Flexible engagement options tailored to your needs
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            className={`pricing-card ${plan.highlighted ? 'pricing-highlighted' : ''}`}
                            key={plan.id}
                        >
                            {plan.highlighted && <div className="pricing-badge">Most Popular</div>}
                            <h3 className="pricing-name">{plan.name}</h3>
                            <p className="pricing-desc">{plan.description}</p>
                            <div className="pricing-divider" />
                            <ul className="pricing-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <FaCheck /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="pricing-cta">
                                {plan.cta} <FaArrowRight />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
