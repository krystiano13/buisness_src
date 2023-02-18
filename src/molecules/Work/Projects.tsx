import React from 'react';
import './Projects.css';

import { SectionTitle } from '../../atoms/Other/SectionTitle';
import { SectionSubtitle } from '../../atoms/Other/SectionSubtitle';
import { projectData } from './projectsData';

const Projects = () => {
    return (
      <main className="Projects">
        <SectionTitle>Our Work</SectionTitle>
        <SectionSubtitle>Team Projects</SectionSubtitle>
        <div className="Projects__elements">
          {projectData.map((item) => (
            <section className="Projects__elements__el">
              <img src={item.imgSrc} className="Projects__elements__el__img" />
              <h4 className="Projects__elements__el__title">Project #{item.id.toString()}</h4>
              <h5 className="Projects__elements__el__subtitle">{item.name}</h5>
            </section>
          ))}
        </div>
      </main>
    );
}

export { Projects };