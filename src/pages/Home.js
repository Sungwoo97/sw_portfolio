import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "../Views/HeroView";
import AboutView from "../Views/AboutView";
import WorkView from "../Views/WorkView";
import ProjectView from "../Views/ProjectView";
import MinimalView from "../Views/MinimalView";
import BgParallax from "../components/BgParallax";
import ContactView from "../Views/ContactView";

const Home = ({ work, list, mini }) => {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <WorkView events={work} />
      <BgParallax />
      <ProjectView list={list} />
      <MinimalView mini={mini} />
      <ContactView />
      <Footer />
    </>
  );
};
export default Home;
