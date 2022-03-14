import React, { useState } from "react";
import "./index.css";
import MenuIcon from "../../components/MenuIcon";
import CloseIcon from "../../components/Icon/CloseIcon";
import NavPage from "../../components/NavPage";

const Header = ({
  heroVisible,
  aboutVisible,
  skillVisible,
  projectsVisible,
  contactVisible,
  footerVisible,
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`header ${menuActive ? "header-position-off" : null}`}>
      <div className="container">
        <nav className="header__nav">
          <a href="#">
            <span>
              <strong>{"{ "}</strong>
              {"Hernán"}
              <strong>{" }"}</strong>
            </span>
          </a>
          <NavPage
            heroVisible={heroVisible}
            aboutVisible={aboutVisible}
            skillVisible={skillVisible}
            projectsVisible={projectsVisible}
            contactVisible={contactVisible}
            menuActive={menuActive}
            footerVisible={footerVisible}
          />
          {menuActive ? (
            <CloseIcon handleClick={handleClick} />
          ) : (
            <MenuIcon handleClick={handleClick} />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
