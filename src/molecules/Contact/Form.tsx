import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="Form">
      <h2 className="Form__title">Contact us</h2>
      <p className="Form__description">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <section className="Form__inputElement">
        <label className="Form__inputElement__label">Name</label>
        <input
          className="Form__inputElement__input"
          placeholder="Enter Your Name"
        />
      </section>
      <section className="Form__inputElement">
        <label className="Form__inputElement__label">Email Address</label>
        <input
          type="email"
          className="Form__inputElement__input"
          placeholder="Enter Your Email Address"
        />
      </section>
      <section className="Form__inputElement">
        <label className="Form__inputElement__label">Message</label>
        <textarea
          className="Form__inputElement__input Form__inputElement__textarea"
          placeholder="Hi there, I’m reaching out because I think we can collaborate…"
        />
      </section>
      <button type="submit" className="Form__button">
        Submit
      </button>
    </form>
  );
};

export { Form };
