import React, { useState } from "react";
import Title from "../../components/Title";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsData } from "./ProjectsData";
import "./index.css";

const Projects = () => {
  const [allActive, setAllActive] = useState(true);
  const [reactActive, setReactActive] = useState(false);
  const [javascriptActive, setJavascriptActive] = useState(false);
  const [nodeActive, setNodeActive] = useState(false);
  const [filter, setFilter] = useState("all");
  console.log(ProjectsData);
  const desactivateCategories = () => {
    setAllActive(false);
    setReactActive(false);
    setJavascriptActive(false);
    setNodeActive(false);
  };
  const filterCategory = (category) => {
    desactivateCategories();
    setFilter(category);
  };

  const selectCategory = (category) => {
    switch (category) {
      case "all":
        filterCategory("all");
        setAllActive(true);
        break;
      case "react":
        filterCategory("react");
        setReactActive(true);
        break;
      case "node":
        filterCategory("node");
        setNodeActive(true);
        break;
      case "javascript":
        filterCategory("javascript");
        setJavascriptActive(true);
        break;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <Title title={"Projects"} />
      <div className="container">
        <div className="projects-categories">
          <div
            className={`project-category ${
              allActive ? "project-category-active" : null
            }`}
            onClick={() => selectCategory("all")}
          >
            All
          </div>
          <div
            className={`project-category ${
              reactActive ? "project-category-active" : null
            }`}
            onClick={() => selectCategory("react")}
          >
            React
          </div>
          <div
            className={`project-category ${
              javascriptActive ? "project-category-active" : null
            }`}
            onClick={() => selectCategory("javascript")}
          >
            Javascript
          </div>
          <div
            className={`project-category ${
              nodeActive ? "project-category-active" : null
            }`}
            onClick={() => selectCategory("node")}
          >
            NodeJS
          </div>
        </div>
        <div className=" projects-container">
          {ProjectsData.map((project) => {
            const { image } = project;
            return <ProjectCard projectImg={image} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
