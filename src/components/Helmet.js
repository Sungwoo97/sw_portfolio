import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetComp = () => {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="./img/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="./img/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="./img/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="./img/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="./img/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="./img/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="./img/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="./img/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./img/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="./img/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./img/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="./img/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./img/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="./img/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta
        name="description"
        content="책임감과 소통 능력이 강점인 남성우 포트폴리오 사이트입니다"
      />
      <meta
        name="keywords"
        content="Portfolio, Web Portfolio, FrontEnd Portfolio, Front-End, 웹 포트폴리오, 포트폴리오, 프론트엔드 포트폴리오, 남성우,"
      />
      <meta name="author" content="남성우" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content=" 남성우 포트폴리오 | Soft Web " />
      <meta
        property="og:description"
        content="책임감과 소통 능력이 강점인 남성우 포트폴리오 사이트입니다."
      />
      <meta property="og:image" content="./img/sw_logo.png" />
      <meta property="og:image:alt" content="SW 포트폴리오 대표 이미지" />
      <meta
        property="og:url"
        content="https://sw-portfolio-site.netlify.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SW Portfolio" />
      <meta property="og:locale" content="ko_KR" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "남성우",
          url: "https://sw-portfolio-site.netlify.app/",
          sameAs: [
            "https://github.com/Sungwoo97",
            "https://jagged-periwinkle-b90.notion.site/174906281d3380d3a4a3f0be8e09c88b",
          ],
        })}
      </script>
      <title> 남성우 포트폴리오 | Soft Web </title>
    </Helmet>
  );
};

export default HelmetComp;
