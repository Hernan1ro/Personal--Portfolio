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
  handleClick,
}) => {
  return (
    <ul
      aria-label="menu"
      className={`nav-page  ${menuActive ? "nav-page-active" : null}`}
    >
      <li>
        <a
          onClick={() => handleClick()}
          className={heroVisible ? "link-active" : null}
          href="#hero"
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={() => handleClick()}
          className={aboutVisible ? "link-active" : null}
          href="#about"
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => handleClick()}
          className={skillVisible ? "link-active" : null}
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          onClick={() => handleClick()}
          className={projectsVisible ? "link-active" : null}
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => handleClick()}
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
