import { useState, useEffect } from 'react';
import './PipelineDiagram.css';

const TelecomPipelineDiagram = () => {
    const [activeStage, setActiveStage] = useState(0);
    const [dataParticles, setDataParticles] = useState([]);
    const [particleId, setParticleId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStage((prev) => (prev + 1) % 5);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticleId((prev) => prev + 1);
            setDataParticles((prev) => {
                const newParticles = [...prev, { id: particleId, position: 0 }];
                return newParticles.slice(-8);
            });
        }, 800);
        return () => clearInterval(interval);
    }, [particleId]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDataParticles((prev) =>
                prev
                    .map((p) => ({ ...p, position: p.position + 1 }))
                    .filter((p) => p.position <= 5)
            );
        }, 400);
        return () => clearInterval(interval);
    }, []);

    const stages = [
        { title: 'INGEST', icon: '📥', color: '#3B82F6', items: ['Files', 'Streams', 'Network Elements'], description: 'Multi-source data ingestion' },
        { title: 'DECODE', icon: '🔓', color: '#8B5CF6', items: ['CDR', 'XDR', 'ASN.1', 'TLV', 'Custom'], description: 'Binary format decoding' },
        { title: 'TRANSFORM', icon: '🔄', color: '#EC4899', items: ['CSV', 'JSON', 'TXT', 'Structured'], description: 'Output transformation' },
        { title: 'PROCESS', icon: '⚙️', color: '#F59E0B', items: ['Validate', 'Enrich', 'Aggregate', 'Normalize'], description: 'End-to-end processing' },
        { title: 'INTEGRATE', icon: '🔗', color: '#10B981', items: ['Billing', 'Analytics', 'Fraud', 'RA'], description: 'Downstream systems' },
    ];

    return (
        <section className="pipeline-section" id="pipeline">
            <div className="pipeline-wrapper">
                <div className="section-header">
                    <h2 className="section-title">
                        Data Mediation <span className="text-gradient">Pipeline</span>
                    </h2>
                    <p className="section-subtitle">End-to-end binary data processing pipeline</p>
                </div>

                <div className="pipeline-track">
                    {/* Connection Line */}
                    <div className="pipeline-line">
                        <div className="pipeline-line-fill" style={{ width: `${(activeStage + 1) * 20}%` }} />
                    </div>

                    {/* Data Particles */}
                    {dataParticles.map((particle) => (
                        <div
                            key={particle.id}
                            className="pipeline-particle"
                            style={{
                                left: `${particle.position * 20 + 2}%`,
                                opacity: particle.position === 0 || particle.position === 5 ? 0.5 : 1,
                                transform: `translateY(-50%) scale(${particle.position === 0 || particle.position === 5 ? 0.5 : 1})`,
                            }}
                        />
                    ))}

                    {/* Stage Cards */}
                    <div className="pipeline-stages">
                        {stages.map((stage, index) => (
                            <div
                                key={stage.title}
                                className={`pipeline-stage ${activeStage === index ? 'stage-active' : ''}`}
                            >
                                <div
                                    className="stage-card"
                                    style={{
                                        boxShadow: activeStage === index ? `0 0 30px ${stage.color}40` : 'none',
                                        borderColor: activeStage === index ? stage.color : 'transparent',
                                    }}
                                >
                                    <div className="stage-icon" style={{ backgroundColor: `${stage.color}20`, borderColor: stage.color }}>
                                        {stage.icon}
                                    </div>
                                    <h3 className="stage-title" style={{ color: stage.color }}>{stage.title}</h3>
                                    <div className="stage-items">
                                        {stage.items.map((item, i) => (
                                            <div
                                                key={item}
                                                className={`stage-item ${activeStage === index ? 'item-active' : ''}`}
                                                style={{ transitionDelay: `${i * 50}ms` }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className="stage-dot"
                                    style={{
                                        backgroundColor: activeStage >= index ? stage.color : '#475569',
                                        boxShadow: activeStage === index ? `0 0 20px ${stage.color}` : 'none',
                                    }}
                                >
                                    {activeStage > index && (
                                        <svg className="stage-check" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Stage Description */}
                <div className="pipeline-desc-wrapper">
                    <div className="pipeline-desc" style={{ backgroundColor: stages[activeStage].color }}>
                        {stages[activeStage].description}
                    </div>
                </div>

                {/* Bottom Info Cards */}
                <div className="pipeline-info-grid">
                    <div className="pipeline-info-card">
                        <div className="info-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.15)' }}>💰</div>
                        <div>
                            <h4>Cost Reduction</h4>
                            <p>Eliminate expensive mediation platform licenses</p>
                        </div>
                    </div>
                    <div className="pipeline-info-card">
                        <div className="info-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.15)' }}>🔓</div>
                        <div>
                            <h4>No Vendor Lock-in</h4>
                            <p>Configurable schemas for any format or vendor</p>
                        </div>
                    </div>
                    <div className="pipeline-info-card">
                        <div className="info-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>⚡</div>
                        <div>
                            <h4>Full Control</h4>
                            <p>Own your data pipeline end-to-end</p>
                        </div>
                    </div>
                </div>

                <div className="pipeline-footer">
                    Binary Data → Decoded → Transformed → Processed → Integrated
                </div>
            </div>
        </section>
    );
};

export default TelecomPipelineDiagram;
