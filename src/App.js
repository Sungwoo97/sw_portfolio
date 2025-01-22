import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import data from "./data.json";

function App() {
  const [isCDNLoaded, setIsCDNLoaded] = useState(false);

  useEffect(() => {
    // CDN 리소스 로드
    const loadCDNResources = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"; // 예시 CDN
        script.onload = () => resolve("CDN loaded successfully");
        script.onerror = () => reject("Failed to load CDN");

        document.body.appendChild(script);
      });
    };

    loadCDNResources()
      .then(() => {
        // console.log(message); // 성공적으로 CDN 로드됨
        setIsCDNLoaded(true); // CDN이 로드되었음을 표시
      })
      .catch((error) => {
        console.error(error); // CDN 로드 실패 시
        setIsCDNLoaded(true); // CDN 로드 실패 후에도 로딩 종료
      });
  }, []);

  return (
    <>
      {!isCDNLoaded && <Loading />}
      {isCDNLoaded && (
        <Router>
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route
              path="/detail"
              element={<Detail data={data.detail_projects} />}
            />
            <Route
              path="/detail/:id"
              element={<Detail data={data.detail_projects} />}
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
