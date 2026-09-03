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
        content="PHP 백엔드 개발자 남성우의 포트폴리오입니다. 그누보드·영카트 기반 웹사이트 개발과 PHP 서버 개발, 웹사이트 관리 및 서버 설정을 다룹니다."
      />
      <meta
        name="keywords"
        content="남성우, PHP 백엔드 개발자, 백엔드 개발자, Back-End, PHP 개발자, 그누보드, 영카트, 그누보드 개발, 영카트 커스터마이징, Gnuboard, Youngcart, PHP, MySQL, 웹 개발자, 웹 포트폴리오, 포트폴리오, Backend Portfolio, 서버 개발, 웹사이트 관리, 서버 관리"
      />
      <meta name="author" content="남성우" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://sw-portfolio-iota.vercel.app/" />

      <meta property="og:title" content=" 남성우 포트폴리오 | Soft Web " />
      <meta
        property="og:description"
        content="PHP 백엔드 개발자 남성우의 포트폴리오. 그누보드·영카트 기반 웹 개발과 PHP 서버 개발."
      />
      <meta property="og:image" content="https://sw-portfolio-iota.vercel.app/img/sw_logo.png" />
      <meta property="og:image:alt" content="남성우 PHP 백엔드 포트폴리오 대표 이미지" />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:url" content="https://sw-portfolio-iota.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SW Portfolio" />
      <meta property="og:locale" content="ko_KR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="남성우 포트폴리오 | Soft Web" />
      <meta name="twitter:description" content="PHP 백엔드 개발자 남성우의 포트폴리오. 그누보드·영카트 기반 웹 개발과 PHP 서버 개발." />
      <meta name="twitter:image" content="https://sw-portfolio-iota.vercel.app/img/sw_logo.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "남성우",
          jobTitle: "PHP 백엔드 개발자",
          url: "https://sw-portfolio-iota.vercel.app/",
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
