import React from "react";
import Title from "../../components/Title";
import { Icon } from "../../components/Icon/Icon";
import projectImg from "../../assets/projects/budget-manager.png";
import ProjectCard from "../../components/ProjectCard";
import "./index.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <Title title={"Projects"} />
      <div className="container projects-container">
        <ProjectCard Icon={Icon} projectImg={projectImg} />
        <ProjectCard Icon={Icon} projectImg={projectImg} />
        <ProjectCard Icon={Icon} projectImg={projectImg} />
        <ProjectCard Icon={Icon} projectImg={projectImg} />
        <ProjectCard Icon={Icon} projectImg={projectImg} />
        <ProjectCard Icon={Icon} projectImg={projectImg} />
      </div>
    </section>
  );
};

export default Projects;
