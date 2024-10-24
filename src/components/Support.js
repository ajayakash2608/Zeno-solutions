import React from 'react';
import '../css/Support.css';

const supportItems = [
  { text: "Project Abstract", icon: "fas fa-file-alt" },
  { text: "IEEE Base Paper/Reference Paper", icon: "fas fa-book" },
  { text: "Project Presentation (PPT Format)", icon: "fas fa-file-powerpoint" },
  { text: "Project Review Assistance for Viva", icon: "fas fa-chalkboard-teacher" },
  { text: "Project Technology Explanation", icon: "fas fa-cogs" },
  { text: "Technology Training", icon: "fas fa-laptop-code" },
  { text: "Project Source Code", icon: "fas fa-code" },
  { text: "Project Demo Video", icon: "fas fa-video" },
  { text: "Project Report", icon: "fas fa-file" },
];

const Support = () => {
  return (
    <div className="container">
      <div className='head'>Support By Us</div>
      <div className="box">
        {supportItems.map((item, index) => (
          <span style={{ '--i': index + 1 }} key={index}>
            <div className="content">
              <i className={item.icon}></i>
              <p>{item.text}</p>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Support;
