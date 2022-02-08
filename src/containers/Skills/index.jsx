import React from "react";
import "./index.css";
import { Icon } from "../../components/Icon/Icon";
import Title from "../../components/Title";

const Skills = () => {
  return (
    <section className="skills">
      <Title title="My Skills" />
      <div className="skills__container container">
        <div className="skills__categories">
          <div className="category category-active">Frontend</div>
          <div className="category">Backend</div>
          <div className="category">Design</div>
        </div>
        <div className="skills__logo-container">
          <Icon name="html" className="skill__icons-color" />
          <Icon name="javascript" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
          <Icon name="node" className="skill__icons-color" />
          <Icon name="css" className="skill__icons-color" />
          <Icon name="express" className="skill__icons-color" />
        </div>
        <div className="skills__description-container">.</div>
      </div>
    </section>
  );
};

export default Skills;
