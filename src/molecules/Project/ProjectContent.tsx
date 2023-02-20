import React from "react";
import './ProjectContent.css';

import p1 from '../../assets/images/p1.svg';
import p2 from "../../assets/images/p2.svg";
import p3 from "../../assets/images/p3.svg";

const ProjectContent = () => {
    return (
      <main className="ProjectContent">
        <section className="ProjectContent__top">
          <div className="ProjectContent__top__left">
            <section className="ProjectContent__top__left__section">
              <h3 className="ProjectContent__top__left__section__title">
                DESCRIPTION
              </h3>
              <p className="ProjectContent__top__left__section__text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast.
              </p>
            </section>
            <section className="ProjectContent__top__left__section">
              <h3 className="ProjectContent__top__left__section__title">
                WHEN
              </h3>
              <p className="ProjectContent__top__left__section__text">
                January 2017
              </p>
            </section>
            <section className="ProjectContent__top__left__section">
              <h3 className="ProjectContent__top__left__section__title">WHO</h3>
              <p className="ProjectContent__top__left__section__text">
                Jason Davis, John Anderson, Mirco Cattabriga, Aaron Jones,
                Amanda Johnson, Steve McQueen
              </p>
            </section>
          </div>
          <div className="ProjectContent__top__right">
            <p className="ProjectContent__top__right__paragraph">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. ‍
            </p>
            <p className="ProjectContent__top__right__paragraph">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. Far far away, behind the word mountains, far
              from the countries Vokalia and Consonantia, there live the blind
              texts. Separated they live in Bookmarksgrove right at the coast of
              the Semantics, a large language ocean. A small river named Duden
              flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts
              of sentences fly into your mouth.{" "}
            </p>
            <p className="ProjectContent__top__right__paragraph">
              {" "}
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.{" "}
            </p>
          </div>
        </section>
        <section className="ProjectContent__bottom">
          <img src={p1} className="ProjectContent__bottom__image" />
          <img src={p2} className="ProjectContent__bottom__image" />
          <img src={p3} className="ProjectContent__bottom__image" />
        </section>
      </main>
    );
}

export { ProjectContent };