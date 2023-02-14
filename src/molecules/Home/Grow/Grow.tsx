import React from 'react';
import { SectionSubtitle } from '../../../atoms/Other/SectionSubtitle';
import { GrowSubtitle } from '../../../atoms/Grow/GrowSubtitle';

import './Grow.css';

const Grow = () => {
    return (
      <section className="GrowWrapper">
        <SectionSubtitle>Grow your business.</SectionSubtitle>
        <GrowSubtitle />
        <button className='GrowWrapper__button'>START NOW</button>
      </section>
    );
}

export { Grow };