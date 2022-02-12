import React from "react";
import Title from "../../components/Title";
import { Icon } from "../../components/Icon/Icon";
import "./index.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <Title title={"Projects"} />
      <div className="container projects-container">
        <article className="project-item">
          <div className="project-description">
            <h5 className="project-description__title">FinAntApp</h5>
            <span className="project-description__resume">
              Ant expenses manager to track your personal finance
            </span>
            <div className="icon-container">
              <Icon name="react" className="skill__icons-color" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
