import React from 'react';
import './Home.css';

import { Hero } from '../molecules/Home/Hero/Hero';
import { Grow } from '../molecules/Home/Grow/Grow';
import { Footer } from '../molecules/Footer/Footer';
import { Projects } from '../molecules/Work/Projects';



const Work = () => {
    return (
        <div className='Work'>
            <Hero title='Our Work' />
            <Projects />
            <Grow />
            <Footer />
        </div>
    )
}

export { Work };