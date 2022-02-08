import React from "react";
import "./index.css";
import { Icon } from "../../components/Icon/Icon";
import Title from "../../components/Title";

const Skills = () => {
  return (
    <section className="skills">
      <Title title="My Skills" />
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
