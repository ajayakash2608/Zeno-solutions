import React from 'react';
import '../css/Fixed.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Fixed = () => {
    return (
        <div className="contact-container">
        <a href="tel:+1234567890" className="contact-card">
            <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
            <span className="contact-text">8695243243 || 9751243243</span>
        </a>
        <a href="https://wa.me/message/KLIEWBJNDEHFI1" className="contact-card" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="contact-icon" icon={faWhatsapp} />
            <span className="contact-text">8695243243</span>
        </a>
        <a href="mailto:zenoprojects@gmail.com" className="contact-card">
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            <span className="contact-text">Zenoprojects@gmail.com</span>
        </a>
    </div>
    );
};

export default Fixed;

