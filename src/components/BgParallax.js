import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const BgParallax = () => {
  return (
    <ParallaxProvider>
      <section className="bg">
        <Parallax className="middle_bg" easing={"ease"} speed={-5}>
          <img src="./img/dev_env.png" alt="bg1" />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
};
export default BgParallax;
