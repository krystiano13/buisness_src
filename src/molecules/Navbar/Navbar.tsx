import React from "react";
import "./Navbar.css";

import { useNavigate } from "react-router";

interface NavbarInterface {
  portrait: boolean;
}

const Navbar: React.FC<NavbarInterface> = ({ portrait }) => {
  const menu = React.useRef<HTMLElement>(null);
  const handleMenuShow = () => menu.current?.classList.toggle("shown");
  const navigate = useNavigate();
  return (
    <>
      <nav className="Navbar">
        <p onClick={() => navigate("/buisness/")} className="Navbar__logo">
          Business
        </p>

        {portrait === false && (
          <>
            <section className="Navbar__buttons">
              <button
                onClick={() => navigate("/buisness/about")}
                className="Navbar__buttons__button"
              >
                ABOUT
              </button>
              <button
                onClick={() => navigate("/buisness/work")}
                className="Navbar__buttons__button"
              >
                WORK
              </button>
              <button
                className="Navbar__buttons__button"
                onClick={() => navigate("/buisness/team")}
              >
                TEAM
              </button>
              <button
                className="Navbar__buttons__button"
                onClick={() => navigate("/buisness/blog")}
              >
                BLOG
              </button>
              <button
                className="Navbar__buttons__button"
                onClick={() => navigate("/buisness/contact")}
              >
                CONTACT
              </button>
            </section>
            <button
              onClick={() => navigate("/buisness/contact")}
              className="Navbar__contactButton"
            >
              CONTACT US
            </button>
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
          <button
            onClick={() => navigate("/buisness/about")}
            className="ButtonsMenu__button"
          >
            ABOUT
          </button>
          <button
            onClick={() => navigate("/buisness/work")}
            className="ButtonsMenu__button"
          >
            WORK
          </button>
          <button
            onClick={() => navigate("/buisness/team")}
            className="ButtonsMenu__button"
          >
            TEAM
          </button>
          <button
            onClick={() => navigate("/buisness/blog")}
            className="ButtonsMenu__button"
          >
            BLOG
          </button>
          <button
            onClick={() => navigate("/buisness/contact")}
            className="ButtonsMenu__button"
          >
            CONTACT
          </button>
        </section>
      )}
    </>
  );
};

export { Navbar };
