import React from 'react';
import '../css/Contact.css'; 
import NavBar from './NavBar';
import Footer from './Footer';
import Fixed from './Fixed';

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <Fixed />
      <div className="page-container">
        <h1 className="page-title">Get in Touch</h1>
        <div className="columns-container">
          <div className="map-column">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=1234+Main+Street,+Anytown" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <iframe
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.849619150999!2d79.10914307486935!3d10.746070989400895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5532b7ab0ca5c3%3A0xb3b95d38f91a14f4!2sZeno%20Project%20Centre%20in%20Thanjavur!5e0!3m2!1sen!2sin!4v1724163992495!5m2!1sen!2sin"
                title="Google Map Location"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </a>
          </div>
          <div className="details-column">
            <div className="flip-card-container">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <div className='card'>Our Location</div>
                  <div className='range'>
                      <p>Plot No:23,1st Floor,Kalangiam Garden 2nd Street,Near Meenakshi Hospital New Bustand, Tamil Nadu 613005</p></div>
                      <div className='range'><p>Call us at: 8695243243 || 9751243243</p></div>
                      <div className='range'><p>Email us: zenoprojects@gmail.com</p></div>
                      <div className='range'><p>WhatsApp : 8695243243 || 9751243243</p></div>
                </div>
                <div className="flip-card-back">
                  <div className='style'>
                    <div className='card'>Contact Details</div>
                      <div className='range'>
                        <p>Our office is open from 10 AM to 7 PM</p></div>
                        <div className='range'><p>We are located in the heart of Thanjavur</p></div>
                        <div className='range'><p>Feel free to drop by or contact us via phone or email</p></div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
