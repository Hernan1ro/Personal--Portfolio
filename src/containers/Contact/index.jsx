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
            <form action="">
              <input type="text" name="name" placeholder="Your name" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                type="text"
                name="menssage"
                placeholder="Your message"
                rows="5"
                cols="20"
              />
              <button type="submit">Send your message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
