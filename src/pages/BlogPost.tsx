import React from "react";
import './Home.css';
import { Grow } from "../molecules/Home/Grow/Grow";
import { Footer } from "../molecules/Footer/Footer";
import placeholder1 from '../assets/images/placeholder1.svg';

const BlogPost = () => {
    return (
      <div className="BlogPost">
        <main className="BlogPost__post">
          <h2 className="BlogPost__post__title">
            15 Best Blogs To Follow About Web Design
          </h2>
          <h3 className="BlogPost__post__date">February 21, 2019</h3>
          <img
            className="BlogPost__post__image"
            src={placeholder1}
            alt="image"
          />
          <h4 className="BlogPost__post__title2">
            Deleniti totam distinctio enim ea fugit labore.
          </h4>
          <p className="BlogPost__post__paragraph">
            Et tenetur ipsum ut nemo quo. Dolorem laudantium voluptatem sed
            architecto libero non ea quia. Explicabo aut ratione quisquam ut
            provident et architecto non repellendus.
          </p>
          <h5 className="BlogPost__post__subtitle">
            Voluptate qui delectus sunt voluptates error autem.
          </h5>
          <p className="BlogPost__post__paragraph">
            Id quas consequatur voluptatum quibusdam in architecto sunt autem
            commodi. Qui aliquam quia dolorum. Fuga modi odit cupiditate esse.
            Non repudiandae possimus totam quas veniam necessitatibus
            blanditiis.
          </p>
          <p className="BlogPost__post__paragraph">
            Id ut quae aut libero. Dolores vero dolores. Et eveniet a et
            accusamus incidunt repudiandae excepturi. Nobis debitis rerum quia
            quia est non dolorum quam.
          </p>
          <h4 className="BlogPost__post__title2">
            Blanditiis aut est iste numquam necessitatibus ea commodi non
            dolores.
          </h4>
          <p className="BlogPost__post__paragraph">
            Saepe placeat quis. Voluptate ut cupiditate. Sit natus eum quisquam.
          </p>
          <h5 className="BlogPost__post__subtitle">Quaerat earum illo vel.</h5>
          <p className="BlogPost__post__paragraph">
            Magni quo nihil quia officia. Rerum eaque in itaque. Quae et cumque
            sunt dolorem.
          </p>
          <p className="BlogPost__post__paragraph">
            Error minima non neque et amet placeat eum soluta sint. Eaque
            ratione et voluptas ex. Ut delectus ullam est laboriosam quis. Et
            sint ratione voluptatem voluptatem aspernatur sit. Suscipit maiores
            voluptatem.
          </p>
        </main>
        <Grow />
        <Footer />
      </div>
    );
}

export { BlogPost };
