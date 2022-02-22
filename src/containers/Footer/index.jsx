import React from "react";
import PinIcon from "../../components/Icon/PinIcon.jsx";
import EmailIcon from "../../components/Icon/Email.jsx";
import NavPage from "../../components/NavPage";
import { Icon } from "../../components/Icon/Icon";

import "./index.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="contact-info container">
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
      <div className="resume-info container">
        <div className="about-me">
          <h6>About me</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            possimus ab ad reiciendis tempore? Repellat, voluptate consequuntur
            ex consequatur ipsam similique necessitatibus perspiciatis magnam
            aspernatur!
          </p>
        </div>
        <div className="portfolio">
          <h6>Portfolio</h6>
          <div className="portfolio__container">
            <span>ReactJS</span>
            <span>Javascript</span>
            <span>NodeJS</span>
            <span>Full stack</span>
          </div>
        </div>
        <div className="latest-projects">
          <h6>Latest projects</h6>
          <div className="latest-projects__container">
            <span>Budget manager</span>
            <span>Budget manager</span>
            <span>Budget manager</span>
            <span>Budget manager</span>
          </div>
        </div>
      </div>
      <div className="social-media container">
        <NavPage />
        <div className="social-media__container">
          <a target="_blank" href="">
            <Icon name="twitter" className="social-icon" />
          </a>
          <a target="_blank" href="">
            <Icon name="github" className="social-icon" />
          </a>
          <a target="_blank" href="">
            <Icon name="linkedin" className="social-icon" />
          </a>
          <a target="_blank" href="">
            <Icon name="github" className="social-icon" />
          </a>
          <a target="_blank" href="">
            <Icon name="linkedin" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <span>
            LEARNING AND BUILDING SOFTWARE FROM COLOMBIA WITH ❤ SINCE 2019 | ©
            2022 - {year}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
