import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <h4>Proficiency</h4>
      <div className="progress-bar__container">
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
  );
};

export default ProgressBar;
