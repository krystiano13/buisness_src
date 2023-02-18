import React from 'react';

interface BlogElementInterface {
    img : string,
    alt : string,
    title : string,
    text : string,
    date : string
}

const BlogElement:React.FC<BlogElementInterface> = ({ img, alt, title, text, date }) => {
    return (
      <section className="BlogContainer__element">
        <img className="BlogContainer__element__image" src={img} alt={alt} />
        <h4 className="BlogContainer__element__title">{title}</h4>
        <p className="BlogContainer__element__text">{text}</p>
        <h5 className="BlogContainer__element__date">{date}</h5>
      </section>
    );
}

export { BlogElement };