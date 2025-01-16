import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../sections/detail/Title";
import Feature from "../sections/detail/Feature";
import Overview from "../sections/detail/Overview";
import Attach from "../sections/detail/Attach";
import Contribution from "../sections/detail/Contribution";
import Problem from "../sections/detail/Problem";

const Detail = ({}) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${process.env.PUBLIC_URL}/css/detail.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 변경 시 제거
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <div class="detail container">
          <Title />
          <Feature />
          <Overview />
          <Attach />
          <Contribution />
          <Problem />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Detail;
