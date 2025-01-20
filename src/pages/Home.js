import React, { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroView from "./../views/HeroView";
import AboutView from "./../views/AboutView";
import WorkView from "./../views/WorkView";
import ProjectView from "./../views/ProjectView";
// import MinimalView from "./../views/MinimalView";
import BgParallax from "./../components/BgParallax";
import ContactView from "./../views/ContactView";

const Home = ({ data }) => {
  const cssPath = `${process.env.PUBLIC_URL}/css/main.css`;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 변경 시 제거
    };
  }, [cssPath]);
  return (
    <>
      <Header />
      <main>
        <HeroView />
        <AboutView />
        <WorkView events={data.work} />
        <BgParallax />
        <ProjectView list={data.projects} />
        {/* <MinimalView mini={data.mini} /> */}
        <ContactView profile={data.profile} />
      </main>
      <Footer />
    </>
  );
};
export default Home;
