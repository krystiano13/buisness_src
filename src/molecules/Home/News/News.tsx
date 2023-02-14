import React from "react";
import "./News.css";

import { SectionTitle } from "../../../atoms/Other/SectionTitle";
import { SectionSubtitle } from "../../../atoms/Other/SectionSubtitle";
import { Article } from "../../../atoms/News/Article";

const News = () => {
  return (
    <section className="NewsWrapper">
      <SectionTitle>ABOUT US</SectionTitle>
      <SectionSubtitle>Company News</SectionSubtitle>
      <div className="NewsWrapper__ArticleContainer">
        <Article>10 Quick Tips About Blogging</Article>
        <Article>15 Best Blogs To Follow About Web Design</Article>
        <Article>7 of the Best Examples of Beautiful Blog Design</Article>
      </div>
    </section>
  );
};

export { News };
