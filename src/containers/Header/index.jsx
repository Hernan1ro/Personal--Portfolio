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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Background</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <MenuIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
