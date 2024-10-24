import React from 'react';
import '../css/Reach.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Fixed from './Fixed';

const Reach = () => {
  const hardwareDomains = [
    'Embedded Systems',
    'Internet of Things (IoT)',
    'Robotics',
    'Circuit Design',
    'Custom Domains'
  ];

  const softwareDomains = [
    'Machine Learning',
    'Software Development',
    'Web Development',
    'Data Science',
    'Custom Domains'
  ];

  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <NavBar />
      <Fixed />
      <div className="training-container">
        <div className="section-container">
          <h2>Internship</h2>
          <div className="flowchart-container">
            <div className="category-box">
              <div className='write'><h3>Hardware</h3></div>
              <ul>
                {hardwareDomains.map((domain, index) => (
                  <li key={index}>{domain}</li>
                ))}
              </ul>
            </div>
            <div className="category-box">
            <div className='write'><h3>Software</h3></div>
              <ul>
                {softwareDomains.map((domain, index) => (
                  <li key={index}>{domain}</li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="navigate-button"
            onClick={() =>
              handleNavigation('https://forms.gle/x3AQWWpqBr54mcPK8')
            }
          >
            Apply for Internship
          </button>
        </div>
        <div className="section-container">
          <h2>Inplant Training</h2>
          <div className="flowchart-container">
            <div className="category-box">
            <div className='write'><h3>Hardware</h3></div>
              <ul>
                {hardwareDomains.map((domain, index) => (
                  <li key={index}>{domain}</li>
                ))}
              </ul>
            </div>
            <div className="category-box">
            <div className='write'><h3>Software</h3></div>
              <ul>
                {softwareDomains.map((domain, index) => (
                  <li key={index}>{domain}</li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="navigate-button"
            onClick={() =>
              handleNavigation('https://forms.gle/muBmuMkiamC1vtQd7')
            }
          >
            Apply for Inplant Training
          </button>
        </div>
      </div>
            <Footer />
    </>
  );
};

export default Reach;
