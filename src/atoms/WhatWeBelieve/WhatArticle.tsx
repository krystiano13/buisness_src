import React from 'react';
import bg1 from '../../assets/images/bg1.svg';
import bg2 from "../../assets/images/bg2.svg";
import './WhatArticle.css';
import { useNavigate } from 'react-router';

interface WhatArticleInterface {
    mirrorPlacement : boolean,
    firstTitle : string,
    secondTitle : string,
    imageID : number
}

const WhatArticle:React.FC<WhatArticleInterface> = ({ mirrorPlacement, firstTitle, secondTitle, imageID }) => {
    const navigate = useNavigate();
    return (
      <div
        className={
          mirrorPlacement === false ? "WhatArticle" : "WhatArticle reverse"
        }
      >
        <section className="WhatArticle__first">
          <h4 className="WhatArticle__first__title">{firstTitle}</h4>
          <h5 className="WhatArticle__first__title2">{secondTitle}</h5>
          <p className="WhatArticle__first__description">
            Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor
            venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
            Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper
            gravida tellus ut consequat.
          </p>
          <button
            onClick={
              imageID === 1
                ? () => navigate("/buisness/about")
                : () => navigate("/buisness/team")
            }
            className="WhatArticle__first__button"
          >
            LEARN MORE
          </button>
        </section>
        <section
          className={
            mirrorPlacement === false
              ? "WhatArticle__second"
              : "WhatArticle__second reverseFlex"
          }
        >
          <img
            src={imageID === 1 ? bg1 : bg2}
            className="WhatArticle__second__image"
            alt="background Image"
          />
        </section>
      </div>
    );
}

export { WhatArticle };