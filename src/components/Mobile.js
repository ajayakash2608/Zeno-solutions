
import React, { useEffect, useState } from 'react';
import '../css/Mobile.css';

const Mobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-alert">
        <h1>This website is only available in desktop view.</h1>
        <p>Please switch to a desktop or a device with a larger screen.</p>
      </div>
    );
  }

  return null;
};

export default Mobile;
