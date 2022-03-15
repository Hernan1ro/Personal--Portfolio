import React, { useState, useEffect, useRef } from "react";

import "./index.css";
import { Icon } from "../../components/Icon/Icon";
import Title from "../../components/Title";
import TechnologyInfo from "../../components/TechnologyInfo";
import { skillData } from "./skillData";

const Skills = ({ setSkillVisible }) => {
  const [frontendActive, setFrontendActive] = useState(true);
  const [backendActive, setBackendActive] = useState(false);
  const [designActive, setDesignActive] = useState(false);
  const [managementActive, setManagementActive] = useState(false);
  const [filter, setFilter] = useState("frontend");
  const [icon, setIcon] = useState("html");

  const section = useRef(null);
  useEffect(() => {
    let options = {
      rootMargin: "50px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setSkillVisible(true);
      } else {
        setSkillVisible(false);
      }
    }, options);
    observer.observe(section.current);
  }, [section]);

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
        setIcon("node");
        break;
      case "frontend":
        filterCategory("frontend");
        setFrontendActive(true);
        setIcon("html");
        break;
      case "design":
        filterCategory("design");
        setDesignActive(true);
        setIcon("figma");
        break;
      case "management":
        filterCategory("management");
        setManagementActive(true);
        setIcon("git");
        break;
    }
  };
  return (
    <section ref={section} id="skills" className="skills">
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
          {skillData.map((item) => {
            if (item.name === icon) {
              const {
                projectNumber,
                yearsExperience,
                title,
                description,
                id,
                level,
              } = item;
              return (
                <TechnologyInfo
                  key={id}
                  icon={icon}
                  projectNumber={projectNumber}
                  yearsExperience={yearsExperience}
                  title={title}
                  description={description}
                  level={level}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
