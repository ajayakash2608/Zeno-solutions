import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import '../src/css/Mobile.css';
import Reach from "./components/Reach";


const HardwareProjects = () => <div>Hardware Projects Page</div>;
const SoftwareProjects = () => <div>Software Projects Page</div>;
const SchoolProjects = () => <div>School Projects Page</div>;
const PGProjects = () => <div>PG Projects Page</div>;
const Internship = () => <div>Internship Page</div>;

function App() {
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
        <h1>This website is only available on desktop view.</h1>
        <p>Please switch to a desktop or a device with a larger screen.</p>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardware-projects" element={<HardwareProjects />} />
          <Route path="/software-projects" element={<SoftwareProjects />} />
          <Route path="/school-projects" element={<SchoolProjects />} />
          <Route path="/pg-projects" element={<PGProjects />} />
          <Route path="/Intern" element={<Reach />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
