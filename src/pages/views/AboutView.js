import React from "react";
import About from "./about/About";
import Skill from "./about/Skill";

const AboutView = () => {
  return (
    <>
      <section className="about" id="about">
        <Skill />
        <About />
      </section>
    </>
  );
};
export default AboutView;
