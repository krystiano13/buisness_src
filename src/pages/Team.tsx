import React from 'react';
import './Home.css';
import { Hero } from '../molecules/Home/Hero/Hero';
import { Grow } from '../molecules/Home/Grow/Grow';
import { Footer } from '../molecules/Footer/Footer';
import { SectionSubtitle } from '../atoms/Other/SectionSubtitle';
import { SectionTitle } from '../atoms/Other/SectionTitle';
import { TeamMember } from '../molecules/Team/TeamMember';
import { teamMembers } from '../molecules/Team/teamMembers';

const Team = () => {
    return (
      <div className="Team">
        <Hero title="Team" />
        <SectionTitle>Our people</SectionTitle>
        <SectionSubtitle>Our world-class team</SectionSubtitle>
        <main className="Team__Container">
          {teamMembers.map((item) => (
            <TeamMember key={item.id} name={item.name} position={ item.position } />
          ))}
        </main>
        <Grow />
        <Footer />
      </div>
    );
}

export { Team };