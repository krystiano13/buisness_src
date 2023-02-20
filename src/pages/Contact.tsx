import React from 'react';
import './Home.css';
import { Hero } from '../molecules/Home/Hero/Hero';
import { Grow } from '../molecules/Home/Grow/Grow';
import { Footer } from '../molecules/Footer/Footer';
import { Form } from '../molecules/Contact/Form';
import { Info } from '../molecules/Contact/Info';

const Contact = () => {
    return (
        <div className='Contact'>
            <Hero title='Contact Us' />
            <main className='Contact__mainContent'>
                <Form />
                <Info />
            </main>
            <Grow />
            <Footer />
        </div>
    )
}

export { Contact };