import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
    {
        question: 'What industries does B-TEC specialize in?',
        answer: 'We specialize in Telecom, ICT, Financial Services, and Government sectors. Our 13+ years of experience spans software engineering, network infrastructure, data engineering, and telecom billing systems.',
    },
    {
        question: 'How does the engagement process work?',
        answer: 'We follow a structured approach: Discovery & Assessment → Solution Design → Implementation → Testing & Validation → Deployment & Support. Each phase includes clear milestones and deliverables.',
    },
    {
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes, we provide comprehensive post-deployment support packages including 24/7 monitoring, regular maintenance, performance optimization, and dedicated account management.',
    },
    {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on scope and complexity. Small-to-medium projects typically run 4–12 weeks, while enterprise-level implementations may span 3–6 months. We provide detailed timelines during the discovery phase.',
    },
    {
        question: 'Can you work with our existing technology stack?',
        answer: 'Absolutely. We are technology-agnostic and experienced in integrating with legacy systems, cloud platforms, and modern frameworks. Our solutions are designed to complement and enhance your existing infrastructure.',
    },
    {
        question: 'Do you provide training for our team?',
        answer: 'Yes, knowledge transfer is a core part of our delivery. We provide hands-on training, documentation, and workshops to ensure your team can confidently manage and extend the solutions we build.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about working with us
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div
                            className={`faq-item ${activeIndex === i ? 'active' : ''}`}
                            key={i}
                        >
                            <button className="faq-question" onClick={() => toggle(i)}>
                                <span>{faq.question}</span>
                                <FaChevronDown className="faq-icon" />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
