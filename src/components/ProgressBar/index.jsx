import React from "react";
import "./index.css";

const ProgressBar = ({ level }) => {
  return (
    <div className="progress-bar">
      <h4>Proficiency</h4>
      <div className="progress-bar__container">
        <div className="bar">
          <div
            className={`beginner ${level > 0 ? "level-active" : null}`}
          ></div>
          <div
            className={`intermediate ${level >= 20 ? "level-active" : null}`}
          ></div>
          <div
            className={`advanced ${level >= 40 ? "level-active" : null}`}
          ></div>
          <div className={`bar-outline width-${level}`}></div>
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
