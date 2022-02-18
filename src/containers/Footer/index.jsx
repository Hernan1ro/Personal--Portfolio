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
      <div className="resume-info">
        <div className="about-me">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          possimus ab ad reiciendis tempore? Repellat, voluptate consequuntur ex
          consequatur ipsam similique necessitatibus perspiciatis magnam
          aspernatur!
        </div>
        <div className="latest-projects">
          <span>Budget manager</span>
          <span>Budget manager</span>
          <span>Budget manager</span>
          <span>Budget manager</span>
        </div>
      </div>
      <div className="social-media"></div>
      <div className="copyright"></div>
    </footer>
  );
};

export default Footer;
