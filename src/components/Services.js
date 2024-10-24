import React from "react";
import "../css/service.css";

const servicesData = [
  {
    name: "Embedded System ",
    icon: "hero1.jpg", 
    description: "Compact computer systems integrated into devices. Operate with limited resources and real-time constraints. Prioritize efficiency, reliability, and low power consumption. Often used in automotive, industrial, and consumer electronics. Require knowledge of microcontrollers, sensors, and actuators."
  },
  {
    name: "Internet Of Things(IoT)",
    icon: "hero2.jpeg", 
    description: "Network of interconnected devices collecting and exchanging data. Enable remote monitoring, control, and automation. Utilize sensors, actuators, and connectivity technologies. Focus on data analytics and machine learning. Applications in smart homes, wearables, and industrial automation."
  },
  {
    name: "Software Development",
    icon: "hero.jpg", 
    description: "Involve planning, designing, coding, testing, and deploying software applications. Follow software development methodologies like Agile or Waterfall. Require problem-solving, critical thinking, and teamwork. Utilize programming languages, software tools, and version control systems."
  },
  {
    name: "Machine Learning",
    icon: "hero3.jpeg", 
    description: "Combine engineering, computer science, and artificial intelligence. Involve mechanical design, electrical systems, and software programming. Focus on autonomous systems, perception, and control. Applications in manufacturing, healthcare, and exploration."
  },
  {
    name: "Robotics Project",
    icon: "hero4.jpeg", 
    description: "Develop algorithms for computers to learn from data without explicit programming. Build models for prediction, classification, and clustering. Utilize statistical techniques and programming languages. Applications in image recognition, natural language processing, and recommendation systems."
  },
  {
    name: "Custom Hardware & Software Projects",
    icon: "hero5.png", 
    description: "Tailored solutions combining hardware and software components. Involve product design, prototyping, and manufacturing. Require interdisciplinary skills and collaboration. Focus on meeting specific client requirements. Applications in various industries."
  }
];

const Services = () => {
    return (
      <div className="services-section">
        <h2>We are Expert in</h2>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div key={index} className="service-box">
              <img src={require(`../img/${service.icon}`)} alt={service.name} className="service-image" />
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Services;
