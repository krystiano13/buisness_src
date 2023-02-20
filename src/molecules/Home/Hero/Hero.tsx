import React from "react";
import HeroImage from "../../../assets/images/Hero.svg";
import "./Hero.css";
import { useLocation } from "react-router";

import { HeroTitle } from "../../../atoms/Home/HomeTitle";
import { HeroButton } from "../../../atoms/Home/HeroButton";
import { HeroSubtitle } from "../../../atoms/Home/HomeSubtitle";

interface HeroInterface {
  title: string;
  image?: string;
}

const Hero: React.FC<HeroInterface> = ({ title, image }) => {
  const [isHome, setIsHome] = React.useState<boolean>(true);
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    pathname === "/buisness/" || pathname === "/buisness"
      ? setIsHome(true)
      : setIsHome(false);
  }, [pathname]);
  return (
    <header className={isHome ? "Hero" : "Hero black"}>
      <HeroTitle>{title}</HeroTitle>
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
