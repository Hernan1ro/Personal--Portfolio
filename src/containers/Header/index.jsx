import React, { useState } from "react";
import "./index.css";
import MenuIcon from "../../components/MenuIcon";
import NavPage from "../../components/NavPage";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  };
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
          <NavPage menuActive={menuActive} />
          <MenuIcon handleClick={handleClick} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
