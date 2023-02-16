import React from 'react';
import './Services.css';

import { SectionSubtitle } from '../../atoms/Other/SectionSubtitle';
import { SectionTitle } from '../../atoms/Other/SectionTitle';
import { servicesdata } from './servicesData';

const Services = () => {
    return (
      <section className="Services">
        <SectionTitle>What we are best at</SectionTitle>
        <SectionSubtitle>Our Services</SectionSubtitle>
        <div className="Services__container">
          {servicesdata.map((item) => (
            <div className="Services__container__element">
              <img src={item.image} className="Services__container__element__image" />
              <h4 className="Services__container__element__title">{ item.title }</h4>
              <h5 className="Services__container__element__subtitle">{ item.text }</h5>
            </div>
          ))}
        </div>
      </section>
    );
}

export {Services};