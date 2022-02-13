import React from "react";

const ProjectCard = ({ projectImg, Icon }) => {
  return (
    <article className="project-item">
      <img className="project-image" src={projectImg} alt="project image" />
      <div className="project-description">
        <h5 className="project-description__title">FinAntApp</h5>
        <span className="project-description__resume">
          Ant expenses manager to track your personal finance
        </span>
        <div className="icon-container">
          <Icon name="react" className="skill__icons-color" />
        </div>
        <div className="project-links">
          <a target="_blank" href="https://friendly-bhabha-bbe9e2.netlify.app/">
            Preview demo
          </a>
          <a
            target="_black"
            href="https://github.com/Hernan1ro/budget-control-app"
          >
            View code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
