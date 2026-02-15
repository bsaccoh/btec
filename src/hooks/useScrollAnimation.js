import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
    const { threshold = 0.15, rootMargin = '0px' } = options;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};

export default useScrollAnimation;
