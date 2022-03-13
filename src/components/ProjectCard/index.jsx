import React, { useRef, useEffect, useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import "./index.css";

const ProjectCard = ({ projectData }) => {
  const { image, name, description, icon, github, demo, gif, id } = projectData;
  const [show, setShow] = useState(false);

  const element = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      console.log(isIntersecting);
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  return (
    <figure ref={element} className="project-item">
      {show && (
        <div className="project-item__container">
          <div className="project-item__image-container">
            <div className="link__image">
              <a target="_blank" href={demo}>
                <img
                  className="project-image"
                  src={image}
                  alt="project image"
                />
                <img className="hover-image" src={gif} alt="project image" />
              </a>
            </div>
          </div>
          <figcaption className="project-description">
            <h5 className="project-description__title">{name}</h5>
            <span className="project-description__resume">{description}</span>
            <div className="icon-container">
              {icon.map((item) => (
                <Icon key={item} name={item} className="skill__icons-color" />
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
        </div>
      )}
    </figure>
  );
};

export default ProjectCard;
