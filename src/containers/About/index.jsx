import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import profile from "../../assets/profile.png";
import Title from "../../components/Title";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const About = ({ setVisible }) => {
  const section = useRef(null);
  useEffect(() => {
    let options = {
      rootMargin: "50px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      console.log(isIntersecting);
      if (isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, options);
    observer.observe(section.current);
  }, [section]);

  return (
    <section ref={section} id="about" className="about">
      <Title title="About me" />
      <div className="container">
        <div className="about__container">
          <div className="about__container-image">
            <div className="about__photo-container">
              <img
                className="about__photo"
                src={profile}
                alt="Hernán Mercado"
              />
              <SocialMediaLinks />
            </div>
          </div>
          <div className="description-container">
            <p className="about__description">
              I'm a <strong>Fullstack developer</strong> with a focus on the
              development of solutions through high impact and scalability
              software, oriented to industry, values and technology as a means
              to be part of the transformation and growth of our economy.
            </p>
            <p className="about__description">
              Based in <em>Fundación - Colombia</em> I'm apassionate about
              learning new things, building software, creating digital products
              and personal projects for the industry and community.
            </p>
          </div>
          <div className="about-cv-link">
            <a href="https://drive.google.com/uc?id=1sNAaHilxkUWjJs1VVE8Bwd1G3DRF0a7F&export=download">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
