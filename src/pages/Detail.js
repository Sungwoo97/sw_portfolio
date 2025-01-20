import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const currentId = parseInt(id, 10) - 1; // id를 숫자로 변환
  const item = data[currentId];

  const cssPath = `${process.env.PUBLIC_URL}/css/detail.css`;

  // 페이지 별로 다른 css 파일을 적용하기 위해 useEffect 사용
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // 페이지 변경 시 제거
    };
  }, [cssPath]);

  if (!item) return <p>Item not found</p>;

  return (
    <>
      <Header />
      <main>
        <div className="detail container">
          <div className="row">
            <div className="col-md-8">
              <Title data={item} />
              <Feature data={item} />
              <Overview data={item} />

              <Contribution data={item} />
              <Problem data={item} />
            </div>
            <div className="col-md-4">
              <Attach data={item} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Detail;
