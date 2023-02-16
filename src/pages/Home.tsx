import React from "react";
import { Hero } from "../molecules/Home/Hero/Hero";
import { What } from "../molecules/Home/WhatWeBelieve/What";
import { News } from "../molecules/Home/News/News";
import { Grow } from "../molecules/Home/Grow/Grow";
import { Footer } from "../molecules/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Hero title="Grow Your Business"/>
      <What />
      <News />
      <Grow />
      <Footer />
    </div>
  );
};

export default Home;
