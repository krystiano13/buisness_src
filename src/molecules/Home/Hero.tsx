import React from "react";
import HeroImage from "../../assets/images/Hero.svg";
import './Hero.css';

import { HeroTitle } from "../../atoms/Home/HomeTitle";
import { HeroButton } from "../../atoms/Home/HeroButton";
import { HeroSubtitle } from "../../atoms/Home/HomeSubtitle";

const Hero = () => {
  return (
    <header className="Hero">
      <img className="Hero__image" src={HeroImage} alt="Hero Image" />
      <HeroTitle />
      <HeroSubtitle />
      <HeroButton />
    </header>
  );
};

export { Hero };
