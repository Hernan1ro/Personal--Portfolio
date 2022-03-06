import React from "react";
import "./index.css";

const ProjectCard = ({ projectImg, Icon }) => {
  return (
    <figure className="project-item">
      <a target="_blank" href="https://friendly-bhabha-bbe9e2.netlify.app/">
        <img className="project-image" src={projectImg} alt="project image" />
      </a>
      <figcaption className="project-description">
        <h5 className="project-description__title">
          Administrador de presupuesto
        </h5>
        <span className="project-description__resume">
          Ant expenses manager to track your personal finance
        </span>
        <div className="icon-container">
          <Icon name="react" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
          <Icon name="react" className="skill__icons-color" />
        </div>
        <div className="project-links">
          <a target="_blank" href="https://friendly-bhabha-bbe9e2.netlify.app/">
            View demo
          </a>
          <a
            target="_black"
            href="https://github.com/Hernan1ro/budget-control-app"
          >
            <Icon name="github" className="skill__icons-color link-icon" />
            View code
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
