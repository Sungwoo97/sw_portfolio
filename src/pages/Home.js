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

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <WorkView events={data.work} />
      <BgParallax />
      <ProjectView list={data.projects} />
      <MinimalView mini={data.mini} />
      <ContactView profile={data.profile} />
      <Footer />
    </>
  );
};
export default Home;
