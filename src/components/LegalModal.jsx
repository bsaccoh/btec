import { useEffect } from 'react';
import './LegalModal.css';

const LegalModal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="legal-modal-overlay" onClick={onClose}>
            <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
                <button className="legal-modal-close" onClick={onClose}>&times;</button>
                <div className="legal-modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
