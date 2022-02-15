import React from "react";
import Title from "../../components/Title";
import { Icon } from "../../components/Icon/Icon";
import projectImg from "../../assets/projects/budget-manager.png";
import ProjectCard from "../../components/ProjectCard";
import "./index.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Title title={"Projects"} />
      <div className="container">
        <div className="projects-categories">
          <div className="project-category project-category-active">All</div>
          <div className="project-category">React</div>
          <div className="project-category">Javascript</div>
          <div className="project-category">NodeJS</div>
        </div>
        <div className=" projects-container">
          <ProjectCard Icon={Icon} projectImg={projectImg} />
          <ProjectCard Icon={Icon} projectImg={projectImg} />
          <ProjectCard Icon={Icon} projectImg={projectImg} />
          <ProjectCard Icon={Icon} projectImg={projectImg} />
          <ProjectCard Icon={Icon} projectImg={projectImg} />
          <ProjectCard Icon={Icon} projectImg={projectImg} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
