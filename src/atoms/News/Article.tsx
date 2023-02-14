import React from 'react';
import './Article.css';

interface ArticleInterface {
    children : string
}

const Article:React.FC<ArticleInterface> = ({ children }) => {
    return (
      <article className="Article">
        <h4 className="Article__title">{children}</h4>
        <h5 className="Article__date">FEB 21, 2019</h5>
        <p className="Article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </article>
    );
}

export { Article };