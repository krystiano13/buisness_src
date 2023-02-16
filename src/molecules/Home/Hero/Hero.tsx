import React from "react";
import HeroImage from "../../../assets/images/Hero.svg";
import './Hero.css';
import { useLocation } from "react-router";

import { HeroTitle } from "../../../atoms/Home/HomeTitle";
import { HeroButton } from "../../../atoms/Home/HeroButton";
import { HeroSubtitle } from "../../../atoms/Home/HomeSubtitle";

interface HeroInterface {
  title : string
}

const Hero:React.FC<HeroInterface> = ({ title }) => {
  const [isHome,setIsHome] = React.useState<boolean>(true);
  const location = useLocation();
  React.useEffect(() => {
    location.pathname === '/buisness' ? setIsHome(true) : setIsHome(false);
  },[location.pathname]);
  return (
    <header className={isHome ? "Hero" : "Hero black"}>
      <HeroTitle>{ title }</HeroTitle>
      {isHome && (
        <>
          <HeroSubtitle />
          <HeroButton />
        </>
      )}
    </header>
  );
};

export { Hero };
