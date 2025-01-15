import React from "react";

const List = () => {
  return (
    <div class="listSlides col-md-8 row" data-aos="fade-up">
      <div class="thumbnail col-md-6">
        <img src="./img/upload/korail_renewal_project.png" alt="" />
        <button class="button btn hover_btn">상세 보기</button>
      </div>
      <div class="info col-md-6">
        <h5>Korail Renewal Project (개인)</h5>
        <p>2024.07.04 ~ 2024.08.22</p>
        <ul>
          <li>HTML, CSS, JavaScript를 이용한 하드코딩</li>
          <li>라이브러리를 배제한 하드코딩</li>
          <li>Javascript 슬라이드 구현</li>
          <li>한국철도공사 공공 데이터 API 활용</li>
          <li>Fetch 함수를 이용한 JSON 데이터 출력</li>
          <li>Custom Calendar 제작</li>
          <li>이벤트 버블링을 통한 문제 해결</li>
          <li>UI/UX 분석 및 벤치마킹을 통한 트렌드 분석</li>
          <li>발표를 통한 자신감 함양</li>
        </ul>
        <div class="gitLink">
          <a
            href="https://sungwoo97.github.io/lets_korail_renewal/"
            target="_blank"
          >
            <img src="./img/github.svg" width="10" alt="github" />
          </a>
          <a
            href="https://sungwoo97.github.io/lets_korail_renewal/"
            target="_blank"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default List;
