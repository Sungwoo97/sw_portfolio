import React from "react";
import About from "../sections/about/About";
import Skill from "../sections/about/Skill";

const AboutView = () => {
  return (
    <>
      <section class="about" id="about">
        <Skill />
        <About />
      </section>
    </>
  );
};
export default AboutView;
