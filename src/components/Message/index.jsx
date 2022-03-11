import React from "react";
import "./index.css";

const Menssage = ({ message, type }) => {
  return (
    <div className={type}>
      <span>{message}</span>
    </div>
  );
};

export default Menssage;
