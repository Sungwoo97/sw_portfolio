import React from "react";
import Blog from "./Blog";

const About = () => {
  return (
    <div className="content container row">
      <div className="profile col-md-4">
        <img src="./img/profile_image.png" alt="개발환경 사진" />
      </div>
      <div className="desc col-md-8">
        <h3>여러 프로젝트를 책임지며</h3>
        <h4>
          기준을 만들어 온 PHP 개발자 <em>남성우</em>입니다.
        </h4>
        <p>
          5인 규모의 웹 에이전시에서 PHP 개발을 전담하고 있습니다.
          2025년 6월 입사 후 신규 구축과 기존 사이트 개편을 포함해
          약 100개 사이트의 개발 업무에 참여했습니다.

          PHP와 그누보드·영카트를 기반으로 사용자 및 관리자 기능을 개발하고,
          신규 기능에 필요한 데이터베이스를 설계했습니다.
          운영 사이트 유지보수, 레거시 PHP 호환성 개선, 서버 이전과
          장애 원인 확인까지 실무 전반을 경험했습니다.
        </p>
        <Blog />
      </div>
    </div>
  );
};

export default About;
