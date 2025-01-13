import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "../Views/HeroView";

import AboutView from "../Views/AboutView";

const Home = () => {
  return (
    <>
      <Header />
      <HeroView />
      <AboutView />
      <Footer />
    </>
  );
};
export default Home;
