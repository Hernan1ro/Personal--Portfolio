import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import Title from "../../components/Title";
import contactImg from "../../assets/contact-pink.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xatg6gi",
        "template_4x3byze",
        form.current,
        "STkwfQTM519ZxYxFL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
            <form ref={form} onSubmit={sendEmail} action="">
              <input type="text" name="name" placeholder="Your name" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                type="text"
                name="message"
                placeholder="Your message"
                rows="5"
                cols="20"
              />
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
