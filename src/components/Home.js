import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import "../css/Home.css";
import Services from './Services';
import Project from './Project';
import About from './About';
import Footer from './Footer';
import Support from './Support';
import Fixed from './Fixed';

const images = [
  'hero.jpg',
  'hero1.jpg',
  'hero2.jpeg',
  'hero3.jpeg',
  'hero4.jpeg'
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      <NavBar /> 
      <Fixed />
              <div className="hero-section">
                <div className="frame">
                  <div className="text">
                    <p className="lessons-and-insights">
                      <span className="span">ZENO SOLUTIONS<br></br></span>
                      <span className="text-wrapper">Hardware & Software</span>
                    </p>
                    <p className="open-text">
                      We are a leading company and training institute doing R&D projects and Web development. We provide end-to-end solutions for Web Development, IoT Frameworks - RaspberryPi & Arduino, Big Data - Hadoop, Data Science Algorithm Modeling and Analytics. We have decades of experts in Embedded Systems & Web Development gained from various assignments and added with our own innovation. We have multi-speciality in Embedded Systems and Web Development to enhance client needs and expectations.
                    </p>
                  </div>
                  <button className="button-instance">Buy Project</button>
                </div>
                <div className="image-container">
                  <img src={require(`../img/${images[currentImage]}`)} alt="Hero" className="hero-image" />
                </div>
              </div>
            <Services />
            <Project />
            <About />
            <Support />
          <Footer />
        
    </>
  );
};

export default Home;
