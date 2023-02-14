import React from "react";
import HeroImage from "../../../assets/images/Hero.svg";
import './Hero.css';

import { HeroTitle } from "../../../atoms/Home/HomeTitle";
import { HeroButton } from "../../../atoms/Home/HeroButton";
import { HeroSubtitle } from "../../../atoms/Home/HomeSubtitle";

const Hero = () => {
  return (
    <header className="Hero">
      <HeroTitle />
      <HeroSubtitle />
      <HeroButton />
    </header>
  );
};

export { Hero };
