import React from "react";
import "./index.css";
import MenuIcon from "../../components/MenuIcon";
import NavPage from "../../components/NavPage";

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
          <NavPage />
          <MenuIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
