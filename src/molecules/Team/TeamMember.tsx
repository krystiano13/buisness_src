import React from 'react';
import './Member.css';

interface TeamMemberInterface {
    name : string,
    position : string
}

const TeamMember:React.FC<TeamMemberInterface> = ({ name, position }) => {
    return (
        <section className='TeamMember'>
            <div className='TeamMember__blankImage' />
            <h4 className='TeamMember__name'>{ name }</h4>
            <h5 className='TeamMember__position'>{ position }</h5>
        </section>
    )
}

export { TeamMember };