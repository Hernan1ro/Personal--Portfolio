import React from "react";
import "./index.css";
import { Icon } from "../../components/Icon/Icon";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">My skills</h2>
      <div className="skills__container">
        <div className="skills__categories">
          <div className="category">Frontend</div>
          <div className="category">Backend</div>
          <div className="category">Design</div>
        </div>
      </div>
      <div className="skills__logo-container">
        <Icon name="html" className="skill__icons-color" />
      </div>
      <div className="skills__description-container">.</div>
    </section>
  );
};

export default Skills;
