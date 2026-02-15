import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const [open, setOpen] = useState(false);
    const phoneNumber = '23276123456'; // Replace with actual number

    const handleChat = () => {
        const message = encodeURIComponent('Hello! I would like to learn more about B-TEC Digital Solutions.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="whatsapp-widget">
            {open && (
                <div className="whatsapp-popup">
                    <div className="whatsapp-header">
                        <div className="whatsapp-header-info">
                            <div className="whatsapp-avatar">BT</div>
                            <div>
                                <div className="whatsapp-name">B-TEC Support</div>
                                <div className="whatsapp-status">Typically replies within minutes</div>
                            </div>
                        </div>
                        <button className="whatsapp-close" onClick={() => setOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="whatsapp-body">
                        <div className="whatsapp-message">
                            <p>👋 Hi there! How can we help you today?</p>
                            <span className="whatsapp-time">Just now</span>
                        </div>
                    </div>
                    <div className="whatsapp-footer">
                        <button className="whatsapp-send" onClick={handleChat}>
                            <FaWhatsapp /> Start Chat
                        </button>
                    </div>
                </div>
            )}

            <button
                className={`whatsapp-fab ${open ? 'active' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Chat on WhatsApp"
            >
                {open ? <FaTimes /> : <FaWhatsapp />}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
