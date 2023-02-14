import React from 'react';
import './Titles.css';

interface SectionTitleInterface {
    children : string
}

const SectionTitle:React.FC<SectionTitleInterface> = ({ children }) => {
    return (
        <h2 className='SectionTitle'>{ children }</h2>
    )
}

export {SectionTitle};