import React from "react";
import ProjectNumber from "../ProjectNumber";
import ExperienceYears from "../ExperienceYears";
import ProgressBar from "../ProgressBar";
import { Icon } from "../Icon/Icon";

const TechnolgyInfo = ({
  icon,
  title,
  description,
  projectNumber,
  yearsExperience,
  level,
}) => {
  return (
    <>
      <div className="description-left">
        <div>
          <Icon name={icon} className="skill__icons-color-active" />
        </div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
      <div className="description-right">
        <ProjectNumber projectNumber={projectNumber} />
        <ExperienceYears years={yearsExperience} />
        <ProgressBar level={level} />
      </div>
    </>
  );
};

export default TechnolgyInfo;
