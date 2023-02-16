import React from "react";
import './HeroElements.css';

interface HeroTitleInterface {
  children : string
}

const HeroTitle:React.FC<HeroTitleInterface> = ({ children }) => {
  return <h1 className="HeroTitle">{ children }</h1>;
};

export { HeroTitle };
