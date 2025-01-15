import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "../Views/HeroView";
import AboutView from "../Views/AboutView";
import WorkView from "../Views/WorkView";
import ProjectView from "../Views/ProjectView";
import BgParallax from "../components/BgParallax";

const Home = ({ work }) => {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <WorkView events={work} />
      <BgParallax />
      <ProjectView />
      <Footer />
    </>
  );
};
export default Home;
