import React from "react";
import "./index.css";
import MenuIcon from "../../components/MenuIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a href="#">
            <span>
              <strong>{"{ "}</strong>
              {"Hernán"}
              <strong>{" }"}</strong>
            </span>
          </a>
          <ul>
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
          <MenuIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
