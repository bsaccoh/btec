import { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaProjectDiagram, FaGlobe, FaSmile } from 'react-icons/fa';
import './Stats.css';

const stats = [
    { icon: <FaCalendarAlt />, value: 13, suffix: '+', label: 'Years Experience' },
    { icon: <FaProjectDiagram />, value: 50, suffix: '+', label: 'Projects Delivered' },
    { icon: <FaGlobe />, value: 10, suffix: '+', label: 'Countries Served' },
    { icon: <FaSmile />, value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const Stats = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    stats.forEach((stat, i) => {
                        let start = 0;
                        const end = stat.value;
                        const duration = 2000;
                        const stepTime = Math.max(Math.floor(duration / end), 20);
                        const timer = setInterval(() => {
                            start += 1;
                            setCounts(prev => {
                                const next = [...prev];
                                next[i] = start;
                                return next;
                            });
                            if (start >= end) clearInterval(timer);
                        }, stepTime);
                    });
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section className="stats-section" ref={sectionRef}>
            <div className="stats-container">
                {stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-value">
                            {counts[i]}{stat.suffix}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
