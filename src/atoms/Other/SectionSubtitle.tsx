import React from 'react';
import './Titles.css';


interface SubtitleInterface {
    children : string
}

const SectionSubtitle:React.FC<SubtitleInterface> = ({ children }) => {
    return (
        <h3 className='SectionSubtitle'>{ children }</h3>
    )
}

export { SectionSubtitle };