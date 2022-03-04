import React from "react";

const ProjectNumber = ({ projectNumber }) => {
  return (
    <div className="projects">
      <p>Number of projects</p>
      <p>{projectNumber}</p>
    </div>
  );
};

export default ProjectNumber;
