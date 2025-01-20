import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>홈 페이지 | Soft Web</title>
        <meta name="description" content="부드러운 웹 경험을 제공합니다." />
        <meta name="keywords" content="React, Helmet, SEO" />
      </Helmet>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default HomePage;
