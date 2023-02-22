import React from "react";
import { SectionSubtitle } from "../../../atoms/Other/SectionSubtitle";
import { GrowSubtitle } from "../../../atoms/Grow/GrowSubtitle";
import { useNavigate } from "react-router";

import "./Grow.css";

const Grow = () => {
  const navigate = useNavigate();
  return (
    <section className="GrowWrapper">
      <SectionSubtitle>Grow your business.</SectionSubtitle>
      <GrowSubtitle />
      <button
        onClick={() => navigate("/buisness/contact")}
        className="GrowWrapper__button"
      >
        START NOW
      </button>
    </section>
  );
};

export { Grow };
