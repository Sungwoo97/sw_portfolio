import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import "../css/main.css";
import Helmet from "../components/Helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "./views/HeroView.js";
import AboutView from "./views/AboutView.js";
import WorkView from "./views/WorkView.js";
import ProjectView from "./views/ProjectView.js";
// import MinimalView from "./../views/MinimalView";
import BgParallax from "./../components/BgParallax";
import ContactView from "./views/ContactView.js";

const Home = ({ data }) => {
  const cssPath = `./css/main.css`;

  // useEffect(() => {
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href = cssPath;
  //   document.head.appendChild(link);

  //   return () => {
  //     document.head.removeChild(link); // 페이지 변경 시 제거
  //   };
  // }, [cssPath]);
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
