import React from "react";
import "./BlogContainer.css";
import { BlogElement } from "./BlogElement";
import { blogElements } from "./blogElements";

const BlogContainer = () => {
  return (
    <main className="BlogContainer">
      {blogElements.map((item) => (
        <BlogElement
          key={item.id.toString()}
          img={item.img}
          alt={item.alt}
          title={item.title}
          text={item.text}
          date={item.date}
        />
      ))}
    </main>
  );
};

export { BlogContainer };
