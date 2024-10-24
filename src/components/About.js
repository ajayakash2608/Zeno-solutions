import React, { useEffect } from 'react';
import '../css/About.css'; 

const About = () => {
  useEffect(() => {
    const paragraph = document.getElementById('about-paragraph');
    const text = paragraph.innerText;
    const words = text.split(' ');
    paragraph.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    const spans = paragraph.querySelectorAll('span');
    let index = 0;
    const totalWords = spans.length;

    const highlightWords = () => {
      spans.forEach(span => span.classList.remove('highlight'));
      for (let i = index; i < index + 6 && i < totalWords; i++) {
        spans[i].classList.add('highlight');
      }
      index = (index + 1) % totalWords; 
    };

    highlightWords(); 
    const intervalId = setInterval(highlightWords, 250); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="about">
      <h2>About Us</h2><br />
      <p id="about-paragraph">
        Zeno Hardware and Solutions has been a cornerstone of innovation and excellence in the tech industry for over 15 years. Our journey began with a mission to provide cutting-edge hardware and software solutions that meet the complex needs of various industries. Over the years, we have expanded our expertise to cover a broad spectrum of fields including embedded systems, IoT (Internet of Things), machine learning, and mechanical engineering. Our team is dedicated to delivering high-quality projects that not only meet but exceed our clients’ expectations. We undertake a diverse range of projects, from school and diploma projects to advanced PG and IEEE projects, ensuring that each project is executed with precision and care.
        <br />
        Our commitment to quality and timely delivery is unwavering. We pride ourselves on our ability to provide tailored solutions that drive technological advancement and operational efficiency. Whether it’s developing sophisticated embedded systems or pioneering innovative IoT solutions, our focus remains on delivering results that stand out in terms of performance and reliability.
        <br />
        In addition to our project work, we are passionate about fostering the next generation of engineers and tech professionals. We offer valuable internship opportunities and in-plant training programs that provide hands-on experience and insights into real-world projects. These programs are designed to equip students with the skills and knowledge they need to excel in their careers.
        <br />
        At Zeno Hardware and Solutions, we are not just about meeting the current demands of the market; we are about setting new standards and pushing the boundaries of what’s possible. Our team of experts is dedicated to continuous learning and staying ahead of industry trends to ensure that we provide the most innovative and effective solutions.
        <br />
        We believe that our success is driven by our commitment to delivering projects with the highest quality and on-time, every time. Our goal is to build long-lasting relationships with our clients based on trust, reliability, and exceptional service. As we look to the future, we remain focused on our mission to be a leading provider of hardware and software solutions, driven by our core values of excellence, innovation, and integrity.
      </p>
    </section>
  );
};

export default About;
