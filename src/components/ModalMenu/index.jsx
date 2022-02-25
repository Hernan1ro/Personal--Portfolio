import React from "react";
import "./index.css";

const NavPage = ({ menuActive }) => {
  return (
    <ul className={`nav-page  ${menuActive ? "nav-page-active" : null}`}>
      <li>
        <a href="#hero">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavPage;
