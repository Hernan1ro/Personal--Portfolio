import React from "react";

const ProjectLink = ({ link, name }) => {
  return (
    <a target="_blank" href={link}>
      <span>{name}</span>
    </a>
  );
};

export default ProjectLink;
