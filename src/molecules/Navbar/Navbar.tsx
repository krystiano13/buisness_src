import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <p className="Navbar__logo">Business</p>
      <section className="Navbar__buttons">
        <button className="Navbar__buttons__button">ABOUT</button>
        <button className="Navbar__buttons__button">WORK</button>
        <button className="Navbar__buttons__button">TEAM</button>
        <button className="Navbar__buttons__button">BLOG</button>
        <button className="Navbar__buttons__button">CONTACT</button>
      </section>
      <button className="Navbar__contactButton">CONTACT US</button>
    </nav>
  );
};

export { Navbar };
