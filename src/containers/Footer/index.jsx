import React from "react";
import PinIcon from "../../components/Icon/PinIcon.jsx";
import EmailIcon from "../../components/Icon/Email.jsx";
import NavPage from "../../components/NavPage";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import { ProjectsData } from "../Projects/ProjectsData.js";
import ProjectLink from "../../components/ProjectLink";

import "./index.css";

const Footer = ({ setFilter }) => {
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
            I'm Hernán Mercado a Fullstack developer with a focus on the
            development of solutions through high impact and scalability
            software, oriented to industry, values and technology as a means to
            be part of the transformation and growth of our economy.
          </p>
        </div>
        <div className="portfolio">
          <h6>Portfolio</h6>
          <div className="portfolio__container">
            <a
              onClick={() => {
                setFilter("all");
              }}
              href="#projects"
            >
              <span>All</span>
            </a>
            <a
              onClick={() => {
                setFilter("javascript");
              }}
              href="#projects"
            >
              <span>JavaScript</span>
            </a>
            <a
              onClick={() => {
                setFilter("react");
              }}
              href="#projects"
            >
              <span>React</span>
            </a>
            <a
              onClick={() => {
                setFilter("node");
              }}
              href="#projects"
            >
              <span>Node</span>
            </a>
          </div>
        </div>
        <div className="latest-projects">
          <h6>Latest projects</h6>
          <div className="latest-projects__container">
            {ProjectsData.map((item, index) => {
              const { name, demo, id } = item;
              if (index >= 4) {
                return;
              }
              return <ProjectLink key={id} link={demo} name={name} />;
            })}
          </div>
        </div>
      </div>
      <div className="social-media container">
        <NavPage />
        <SocialMediaLinks />
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
