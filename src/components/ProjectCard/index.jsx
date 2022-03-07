import React from "react";
import { Icon } from "../../components/Icon/Icon";
import "./index.css";

const ProjectCard = ({ projectData }) => {
  const { image, name, description, icon, github, demo, id } = projectData;
  return (
    <figure className="project-item">
      <div className="project-item__image-container">
        <a target="_blank" href="https://friendly-bhabha-bbe9e2.netlify.app/">
          <img className="project-image" src={image} alt="project image" />
        </a>
      </div>
      <figcaption className="project-description">
        <h5 className="project-description__title">{name}</h5>
        <span className="project-description__resume">{description}</span>
        <div className="icon-container">
          {icon.map((item) => (
            <Icon key={id} name={item} className="skill__icons-color" />
          ))}
        </div>
        <div className="project-links">
          <a target="_blank" href={demo}>
            View demo
          </a>
          <a target="_black" href={github}>
            <Icon name="github" className="skill__icons-color link-icon" />
            View code
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
