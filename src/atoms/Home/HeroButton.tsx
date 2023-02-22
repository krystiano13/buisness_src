import React from "react";
import "./HeroElements.css";
import { useNavigate } from "react-router";

const HeroButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/buisness/about")} className="HeroButton">
      LEARN MORE
    </button>
  );
};

export { HeroButton };
