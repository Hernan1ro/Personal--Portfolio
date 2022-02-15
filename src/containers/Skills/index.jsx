import React from "react";
import "./index.css";
import { Icon } from "../../components/Icon/Icon";
import Title from "../../components/Title";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Title title="My Skills" />
      <div className="skills__container container">
        <div className="skills__categories">
          <div className="category category-active">Frontend</div>
          <div className="category">Backend</div>
          <div className="category">Design</div>
        </div>
        <div className="skills__logo-container">
          <Icon name="html" className="skill__icons-color-active" />
          <Icon name="javascript" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
          <Icon name="node" className="skill__icons-color" />
          <Icon name="css" className="skill__icons-color" />
          <Icon name="express" className="skill__icons-color" />
        </div>
        <div className="skills__description-container">
          <div className="description-left">
            <div>
              <Icon name="html" className="skill__icons-color-active" />
            </div>
            <span>HTML</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium reiciendis deserunt expedita eveniet ipsum tempora
              ratione. Nulla quod itaque enim a tempore nemo in, ut eveniet
              sapiente harum modi repellendus.
            </p>
          </div>
          <div className="description-right">
            <div className="projects">
              <p>Number of projects</p>
              <p>15</p>
            </div>
            <div className="experience">
              <p>Experience (years)</p>
              <p>3</p>
            </div>
            <div className="progress-bar">
              <div className="bar">
                <div className="beginner"></div>
                <div className="intermediate"></div>
                <div className="advanced"></div>
              </div>
              <div className="levels">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
