import React from "react";
import "./index.css";

const NavPage = ({
  menuActive,
  heroVisible,
  aboutVisible,
  skillVisible,
  projectsVisible,
  contactVisible,
  footerVisible,
}) => {
  return (
    <ul
      aria-label="menu"
      className={`nav-page  ${menuActive ? "nav-page-active" : null}`}
    >
      <li>
        <a className={heroVisible ? "link-active" : null} href="#hero">
          Home
        </a>
      </li>
      <li>
        <a className={aboutVisible ? "link-active" : null} href="#about">
          About
        </a>
      </li>
      <li>
        <a className={skillVisible ? "link-active" : null} href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a className={projectsVisible ? "link-active" : null} href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a
          className={contactVisible || footerVisible ? "link-active" : null}
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavPage;
