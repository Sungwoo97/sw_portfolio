import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "../Views/HeroView";
import AboutView from "../Views/AboutView";
import WorkView from "../Views/WorkView";

const Home = ({ work }) => {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <WorkView events={work} />
      <Footer />
    </>
  );
};
export default Home;
