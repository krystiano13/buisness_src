import React from "react";
import "./What.css";
import { SectionSubtitle } from "../../../atoms/Other/SectionSubtitle";
import { SectionTitle } from "../../../atoms/Other/SectionTitle";
import { Divider } from "../../../atoms/Other/Divider";
import { WhatArticle } from "../../../atoms/WhatWeBelieve/WhatArticle";

const What = () => {
  return (
    <section className="WhatWrapper">
      <SectionTitle>What we believe in</SectionTitle>
      <SectionSubtitle>
        Grow your business, establish your brand, and put your customers first.
      </SectionSubtitle>
      <Divider />
      <WhatArticle
        firstTitle="About"
        secondTitle="Who we are"
        imageID={1}
        mirrorPlacement={false}
      />
      <WhatArticle
        firstTitle="Team"
        secondTitle="What We Do"
        imageID={2}
        mirrorPlacement={true}
      />
    </section>
  );
};

export { What };
