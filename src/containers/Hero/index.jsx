import React from "react";
import heroImg from "../../assets/heading.jpg";
import "./index.css";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__container">
        <h1 className="hero__container-title">Hernán Mercado</h1>
        <h3 className="hero__container-subtitle">Frontend Web Developer</h3>
        <p>Las ideas convertidas en código</p>
      </div>
      <img className="hero__image" src={heroImg} alt="Hero image" />
    </section>
  );
};

export default Hero;
