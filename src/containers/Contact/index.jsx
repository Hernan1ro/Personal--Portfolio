import React from "react";
import "./index.css";
import Title from "../../components/Title";
import contactImg from "../../assets/contact-pink.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Title title="Contact" />
      <div className="container">
        <div className="contact-container">
          <img
            className="contact-container__img"
            src={contactImg}
            alt="contact-img"
          />
          <div className="contact-form">
            <h3>Let's work together!</h3>
            <span>Send me a message so we can be in touch</span>
            <form action=""></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
