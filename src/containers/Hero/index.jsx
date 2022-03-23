import React, { useEffect, useRef } from "react";
import { Icon } from "../../components/Icon/Icon";
import "./index.css";

const Hero = ({ setHeroVisible }) => {
  const section = useRef(null);
  useEffect(() => {
    let options = {
      rootMargin: "50px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setHeroVisible(true);
      } else {
        setHeroVisible(false);
      }
    }, options);
    observer.observe(section.current);
  }, [section]);
  return (
    <section ref={section} id="hero" className="hero ">
      <div className="hero__container">
        <h1 className="hero__container-title">Hernán Mercado</h1>
        <h3 className="hero__container-subtitle">Fullstack Web Developer</h3>
        <p>Ideas turned into code</p>
        <Icon name="hernan" width="15rem" />
      </div>
    </section>
  );
};

export default Hero;
