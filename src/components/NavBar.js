import { Link } from "react-router-dom";
import "../css/Home.css";
import LogoImg from "../img/logoo.png";
import React, { useState } from 'react';
// import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  let dropdownTimeout;
  let submenuTimeout;

  const openDropdown = (menu) => {
    clearTimeout(dropdownTimeout);  // Clear any previous timeout
    setActiveDropdown(menu);
    setActiveSubmenu(null); // Close any open submenu when a new dropdown is opened
  };

  const closeDropdown = () => {
    dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 5000); 
  };

  const openSubmenu = (submenu) => {
    clearTimeout(submenuTimeout);  
    setActiveSubmenu(submenu);
  };

  const closeSubmenu = () => {
    submenuTimeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 5000); 
  };
  return (
    <div className="header">
      <img className="logo-instance" src={LogoImg} alt="Logo" />
      <div className="right-menu">
        <div className="header-menu">
          <div className="menu">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div 
            className="menu" 
            onMouseEnter={() => openDropdown('ug-projects')}
            onMouseLeave={closeDropdown}
          >
            <Link to="/ug-projects" className="nav-link">UG Projects</Link>
            {activeDropdown === 'ug-projects' && (
              <div className="dropdown">
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => openSubmenu('mini-project')}
                  onMouseLeave={closeSubmenu}
                >
                  <Link to="/ug-projects/mini" className="nav-link">Mini Project</Link>
                  {activeSubmenu === 'mini-project' && (
                    <div className="dropdown-submenu">
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department1" className="nav-link">ALL Software Projects</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Artificial Intelligence</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Data Science</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electronics and  Communication Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electrical and Electronics Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">BioMedical Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Machine Learning</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Mechanical Engineering</Link>
                      </div>
                      {/* Add more departments here */}
                    </div>
                  )}
                </div>
                <div className="dropdown-item"onMouseEnter={() => openSubmenu('major-project')}
                  onMouseLeave={closeSubmenu} >
                  <Link to="/ug-projects/major" className="nav-link">Major Project</Link>
                  {activeSubmenu === 'major-project' && (
                    <div className="dropdown-submenu">
                       <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department1" className="nav-link">ALL Software Projects</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Artificial Intelligence</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Data Science</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electronics and  Communication Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electrical and Electronics Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">BioMedical Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Machine Learning</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Mechanical Engineering</Link>
                      </div>
                      {/* Add more departments here */}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div 
            className="menu"
            onMouseEnter={() => openDropdown('pg-projects')}
            onMouseLeave={closeDropdown}
          >
            <Link to="/pg-projects" className="nav-link">PG Projects</Link>
            {activeDropdown === 'pg-projects' && (
              <div className="dropdown">
               <div className="dropdown-item1">
                        <Link to="/ug-projects/mini/department1" className="nav-link">ALL Software Projects</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Artificial Intelligence</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Data Science</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electronics and  Communication Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electrical and Electronics Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">BioMedical Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Machine Learning</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Mechanical Engineering</Link>
                      </div>
                {/* Add more domains here */}
              </div>
            )}
          </div>
          <div 
            className="menu"
            onMouseEnter={() => openDropdown('diploma-school')}
            onMouseLeave={closeDropdown}
          >
            <Link to="/school-projects" className="nav-link">Diploma/School Projects</Link>
            {activeDropdown === 'diploma-school' && (
              <div className="dropdown">
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => openSubmenu('diploma')}
                  onMouseLeave={closeSubmenu}
                >
                  <Link to="/school-projects/diploma" className="nav-link">Diploma</Link>
                  {activeSubmenu === 'diploma' && (
                    <div className="dropdown-submenu">
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department1" className="nav-link">ALL Software Projects</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Artificial Intelligence</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Data Science</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electronics and  Communication Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Electrical and Electronics Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">BioMedical Engineering</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Machine Learning</Link>
                      </div>
                      <div className="dropdown-item">
                        <Link to="/ug-projects/mini/department2" className="nav-link">Mechanical Engineering</Link>
                      </div>
                      {/* Add more departments here */}
                    </div>
                  )}
                </div>
                <div className="dropdown-item">
                  <Link to="/school-projects/school" className="nav-link">School</Link>
                </div>
              </div>
            )}
          </div>
          <div 
  className="menu"
  onMouseEnter={() => openDropdown('intern')}
  onMouseLeave={() => setTimeout(closeDropdown, 200)}
>
  <Link to="/Intern" className="nav-link">Inplant-Training/Internship</Link>
  {activeDropdown === 'intern' && (
    <div className="dropdown">
      {/* Internship Option */}
      <div className="dropdown-item">
        <Link to="/Intern" className="nav-link">Internship</Link>
      </div>

      {/* Inplant Training Option */}
      <div className="dropdown-item">
        <Link to="/Intern" className="nav-link">Inplant Training</Link>
      </div>
    </div>
  )}
</div>

          <div className="menu">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>
        </div>
        <div className="button-group">
          <button className="button-instance">Buy Project</button>
        </div>
      </div> <br /><br />
    
    </div> 

  );
};

export default NavBar;
