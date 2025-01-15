import React, { useEffect } from "react";

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
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${process.env.PUBLIC_URL}/css/main.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 변경 시 제거
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <HeroView />
        <AboutView />
        <WorkView events={data.work} />
        <BgParallax />
        <ProjectView list={data.projects} />
        <MinimalView mini={data.mini} />
        <ContactView profile={data.profile} />
      </main>
      <Footer />
    </>
  );
};
export default Home;
