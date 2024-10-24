import React from 'react';
import '../css/Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
              <a href="https://www.instagram.com/_.zeno.projectz._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/message/KLIEWBJNDEHFI1" target="_blank" rel="noreferrer" className="icon">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:zenoprojects@gmail.com" className="icon" rel="noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
        </div>

        <div className="footer-section contact-info">
          <p><i className="fas fa-phone-alt"></i> Contact Number: 8695243243 || 9751243243</p>
          <p><i className="fas fa-envelope"></i> Email: zenoprojects@gmail.com</p>
        </div>  
        <div className="footer-section legal-info">
          <p>&copy; {new Date().getFullYear()} Zeno Hardware and Solutions. All rights reserved.</p>
          <p><a href="/terms-of-service">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
