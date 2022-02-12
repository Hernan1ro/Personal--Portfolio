import React from "react";
import Title from "../../components/Title";
import { Icon } from "../../components/Icon/Icon";
import ProjectImg from "../../assets/projects/budget-manager.png";
import "./index.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <Title title={"Projects"} />
      <div className="container projects-container">
        <article className="project-item">
          <img className="project-image" src={ProjectImg} alt="project image" />
          <div className="project-description">
            <h5 className="project-description__title">FinAntApp</h5>
            <span className="project-description__resume">
              Ant expenses manager to track your personal finance
            </span>
            <div className="icon-container">
              <Icon name="react" className="skill__icons-color" />
            </div>
            <div className="project-links">
              <a href="https://friendly-bhabha-bbe9e2.netlify.app/">
                Preview demo
              </a>
              <a href="https://github.com/Hernan1ro/budget-control-app">
                View code
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
