import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../sections/detail/Title";
import Feature from "../sections/detail/Feature";
import Overview from "../sections/detail/Overview";
import Attach from "../sections/detail/Attach";
import Contribution from "../sections/detail/Contribution";
import Problem from "../sections/detail/Problem";

const Detail = ({ data }) => {
  const { id } = useParams(); // URL의 id를 가져옴
  const currentId = parseInt(id, 10); // id를 숫자로 변환
  const item = data[currentId];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${process.env.PUBLIC_URL}/css/detail.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 변경 시 제거
    };
  }, []);
  if (!item) return <p>Item not found</p>;
  return (
    <>
      <Header />
      <main>
        <div class="detail container">
          <Title data={data} />
          <Feature data={data} />
          <Overview data={data} />
          <Attach data={data} />
          <Contribution data={data} />
          <Problem data={data} />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Detail;
