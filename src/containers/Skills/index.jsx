import React, { useState } from "react";
import "./index.css";
import { Icon } from "../../components/Icon/Icon";
import Title from "../../components/Title";
import { skillData } from "./skillData";

const Skills = () => {
  const [frontendActive, setFrontendActive] = useState(true);
  const [backendActive, setBackendActive] = useState(false);
  const [designActive, setDesignActive] = useState(false);
  const [managementActive, setManagementActive] = useState(false);
  const [filter, setFilter] = useState("frontend");
  const [icon, setIcon] = useState("html");

  const desactivateCategories = () => {
    setFrontendActive(false);
    setBackendActive(false);
    setDesignActive(false);
    setManagementActive(false);
  };

  const filterCategory = (category) => {
    desactivateCategories();
    setFilter(category);
  };

  const selectCategory = (category) => {
    switch (category) {
      case "backend":
        filterCategory("backend");
        setBackendActive(true);
        break;
      case "frontend":
        filterCategory("frontend");
        setFrontendActive(true);
        break;
      case "design":
        filterCategory("design");
        setDesignActive(true);
        break;
      case "management":
        filterCategory("management");
        setManagementActive(true);
        break;
    }
  };
  return (
    <section id="skills" className="skills">
      <Title title="My Skills" />
      <div className="skills__container container">
        <div className="skills__categories">
          <div
            onClick={() => selectCategory("frontend")}
            className={`category ${frontendActive ? "category-active" : null}`}
          >
            Frontend
          </div>
          <div
            onClick={() => selectCategory("backend")}
            className={`category ${backendActive ? "category-active" : null}`}
          >
            Backend
          </div>
          <div
            onClick={() => selectCategory("design")}
            className={`category ${designActive ? "category-active" : null}`}
          >
            Design
          </div>
          <div
            onClick={() => selectCategory("management")}
            className={`category ${
              managementActive ? "category-active" : null
            }`}
          >
            Management
          </div>
        </div>
        <div className="skills__logo-container">
          {skillData
            .filter((data) => data.category === filter)
            .map((skillIcon) => {
              return (
                <Icon
                  key={skillIcon.id}
                  name={skillIcon.name}
                  className={`skill__icons-color ${
                    skillIcon.name === icon ? "skill__icons-color-active" : null
                  }`}
                  setIcon={setIcon}
                />
              );
            })}
        </div>
        <div className="skills__description-container">
          <div className="description-left">
            <div>
              <Icon name={icon} className="skill__icons-color-active" />
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
