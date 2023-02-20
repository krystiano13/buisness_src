import React from "react";
import './Home.css';

import { Hero } from "../molecules/Home/Hero/Hero";
import { Grow } from "../molecules/Home/Grow/Grow";
import { Footer } from "../molecules/Footer/Footer";
import { ProjectContent } from "../molecules/Project/ProjectContent";

interface ProjectInterface {
  projectId: number;
}

const Project: React.FC<ProjectInterface> = ({ projectId }) => {
  return (
    <div className="Project">
      <Hero title={`Project #${projectId.toString()}`} />
      <ProjectContent />
      <Grow />
      <Footer />
    </div>
  );
};

export { Project };
