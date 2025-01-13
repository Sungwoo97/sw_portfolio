import React from "react";
import Blog from "./Blog";

const About = () => {
  return (
    <div class="content container row">
      <div class="profile col-md-4">
        <img src="./img/dev_env.png" alt="개발환경 사진" />
      </div>
      <div class="desc col-md-8">
        <h3>부드러운 웹 개발을 꿈꾸며</h3>
        <h4>
          안녕하세요! 저는 신입 웹 개발자 <em>남성우</em>입니다.
        </h4>
        <p>
          코드는 단순한 언어가 아니라 세상을 연결하는 다리가 될 수 있다고
          믿습니다. 저는 <strong>Soft Web</strong>이라는 철학을 바탕으로,
          부드러운 소통과 끊임없는 성장으로 사용자와 세상을 이어주는 다리 같은
          개발자가 되고자 합니다.
        </p>
        <Blog />
      </div>
    </div>
  );
};

export default About;
