import React from 'react';
import './About.css';

import { Hero } from '../molecules/Home/Hero/Hero';
import { Grow } from '../molecules/Home/Grow/Grow';
import { Footer } from '../molecules/Footer/Footer';
import { Group } from '../molecules/About/Group';
import { Services } from '../molecules/About/Services';

const About = () => (
    <div className='About'>
        <Hero title='About' />
        <Group />
        <Services />
        <Grow />
        <Footer />
    </div>
)

export { About };