import React from "react";
import "./Navbar.css";

interface NavbarInterface {
  portrait : boolean
}

const Navbar:React.FC<NavbarInterface> = ({ portrait }) => {
  const menu = React.useRef<HTMLElement>(null);
  const handleMenuShow = () => menu.current?.classList.toggle('shown');
  return (
    <>
      <nav className="Navbar">
        <p className="Navbar__logo">Business</p>

        {portrait === false && (
          <>
            <section className="Navbar__buttons">
              <button className="Navbar__buttons__button">ABOUT</button>
              <button className="Navbar__buttons__button">WORK</button>
              <button className="Navbar__buttons__button">TEAM</button>
              <button className="Navbar__buttons__button">BLOG</button>
              <button className="Navbar__buttons__button">CONTACT</button>
            </section>
            <button className="Navbar__button">CONTACT US</button>
          </>
        )}

        {portrait === true && (
          <>
            <div onClick={handleMenuShow} className="Navbar__hamburgerMenu">
              <section id="left" className="Navbar__hamburgerMenu__stripe" />
              <section className="Navbar__hamburgerMenu__stripe" />
              <section id="right" className="Navbar__hamburgerMenu__stripe" />
            </div>
          </>
        )}
      </nav>
      {portrait === true && (
        <section ref={menu} className="ButtonsMenu">
          <button className="ButtonsMenu__button">ABOUT</button>
          <button className="ButtonsMenu__button">WORK</button>
          <button className="ButtonsMenu__button">TEAM</button>
          <button className="ButtonsMenu__button">BLOG</button>
          <button className="ButtonsMenu__button">CONTACT</button>
        </section>
      )}
    </>
  );
};

export { Navbar };
