import React from "react";
import PinIcon from "../../components/Icon/PinIcon.jsx";
import EmailIcon from "../../components/Icon/Email.jsx";
import "./index.css";

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="contact-info">
        <div className="location">
          <PinIcon />
          <span>Fundación - Magdalena</span>
          <span>Colombia</span>
        </div>
        <div className="email">
          <EmailIcon />
          <span>Hernandmf@gmail.com</span>
        </div>
      </div>
      <div className="resume-info"></div>
      <div className="social-media"></div>
      <div className="copyright"></div>
    </footer>
  );
};

export default Footer;
