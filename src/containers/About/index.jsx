import React from "react";
import "./index.css";
import profile from "../../assets/profile.png";
import Title from "../../components/Title";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <Title title="About me" />
        <div className="about__container">
          <img className="about__photo" src={profile} alt="Hernán Mercado" />
          <div className="description-container">
            <p className="about__description">
              I'm a <strong>Frontend Developer</strong> with 2 years of
              experience in web technologies Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloremque natus dolorum vero
              accusantium aliquam ipsum cum labore, blanditiis, fugit harum eum
              neque quo, maiores laborum corporis enim fuga repellendus
              officiis? Harum maiores magni amet, omnis explicabo odio fugit
              voluptates nisi?
            </p>
            <p className="about__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              consectetur repellendus illo consequatur quia laudantium excepturi
              magnam incidunt similique quibusdam iure doloremque expedita
              deserunt, aliquid, dolore totam labore natus odit!{" "}
              <a href="https://drive.google.com/uc?id=1sNAaHilxkUWjJs1VVE8Bwd1G3DRF0a7F&export=download">
                DOWNLOAD RESUME
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
