import useScrollAnimation from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

const AnimatedSection = ({ children, animation = 'fade-up', delay = 0 }) => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`animated-section ${animation} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
