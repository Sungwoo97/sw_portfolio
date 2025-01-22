import React from "react";
import "../css/main.css";
import { HelmetProvider } from "react-helmet-async";
import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "./views/HeroView.js";
import AboutView from "./views/AboutView.js";
import WorkView from "./views/WorkView.js";
import ProjectView from "./views/ProjectView.js";
// import MinimalView from "./../views/MinimalView";
// import BgParallax from "./../components/BgParallax";
import ContactView from "./views/ContactView.js";

const Home = ({ data }) => {
  return (
    <HelmetProvider>
      <Helmet />
      <Header />
      <main>
        <HeroView />
        <AboutView />
        <WorkView events={data.work} />
        {/* <BgParallax /> */}
        <ProjectView list={data.projects} />
        {/* <MinimalView mini={data.mini} /> */}
        <ContactView profile={data.profile} />
      </main>
      <Footer />
    </HelmetProvider>
  );
};
export default Home;
