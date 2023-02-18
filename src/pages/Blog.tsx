import React from 'react';
import { Hero } from '../molecules/Home/Hero/Hero';
import { Grow } from '../molecules/Home/Grow/Grow';
import { Footer } from '../molecules/Footer/Footer';
import { SectionSubtitle } from '../atoms/Other/SectionSubtitle';
import { SectionTitle } from '../atoms/Other/SectionTitle';
import { BlogContainer } from '../molecules/Blog/BlogContainer';
import './Home.css';

const Blog = () => {
    return (
      <div className="Blog">
        <Hero title="Our Blog" />
        <SectionTitle>Aperiam harum</SectionTitle>
        <SectionSubtitle>Our Stories</SectionSubtitle>
        <BlogContainer />
        <Grow />
        <Footer />
      </div>
    );
}

export { Blog };