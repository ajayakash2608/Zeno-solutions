import React from 'react';
import '../css/Project.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const projectDomains = [
  { name: "Dot net Projects", icon: "fas fa-dot-net" },
  { name: "Java/J2EE/J2ME Projects", icon: "fab fa-java" },
  { name: "Android Projects", icon: "fab fa-android" },
  { name: "Matlab – Image, Signal and Video Processing Projects", icon: "fas fa-cogs" },
  { name: "NS2 and NS3 Projects", icon: "fas fa-network-wired" },
  { name: "Embedded system Projects", icon: "fas fa-microchip" },
  { name: "VLSI Projects", icon: "fas fa-circuit-board" },
  { name: "Robotics Projects", icon: "fas fa-robot" },
  { name: "Real time projects", icon: "fas fa-clock" },
  { name: "Industrial projects", icon: "fas fa-industry" },
  { name: "Python Projects", icon: "fab fa-python" },
  { name: "PHP Projects", icon: "fab fa-php" },
  { name: "Matlab Simulation Projects", icon: "fas fa-project-diagram" },
  { name: "Bigdata Projects", icon: "fas fa-database" },
  { name: "Arduino Projects", icon: "fas fa-microchip" },
  { name: "Raspberry PI Projects", icon: "fas fa-raspberry-pi" },
  { name: "SEO, SMO, SMM, SEM Projects", icon: "fas fa-search" },
  { name: "Web Design and Development Projects", icon: "fas fa-laptop-code" },
  { name: "Web development Projects", icon: "fas fa-code" },
  { name: "YouTube promotion projects", icon: "fab fa-youtube" },
  { name: "Application Development projects", icon: "fas fa-mobile-alt" },
  { name: "Graphic Designing projects", icon: "fas fa-paint-brush" },
  { name: "Mobile App – Android and IOs projects", icon: "fas fa-mobile" },
  { name: "Software Development projects", icon: "fas fa-cogs" },
];

const Project = () => {
  return (
    <section className="project">
      <h2>Project Domains Offered By Us</h2><br />
      <div className="project-grid">
        {projectDomains.map((domain, index) => (
          <div key={index} className="project-box">
            <i className={domain.icon + " project-icon"}></i>
            <p className="project-name">{domain.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
