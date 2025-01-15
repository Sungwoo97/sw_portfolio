import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <section class="title">
            <h2>
              Let's Korail Renewal Project <span>1인</span>
            </h2>
            <div class="skill">
              <ul>
                <li>html</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </section>
          <section class="feature">
            <h3>주요 기능</h3>
            <ul>
              <li>라이브러리를 배제한 하드코딩</li>
              <li>공공데이터 API를 이용하여 Fetch 함수로 데이터 출력</li>
              <li>Custom Slide 구현</li>
              <li>Custom Calendar 구현</li>
              <li>JavaScript로 CSS 값 전환</li>
            </ul>
          </section>
          <section class="overview">
            <h3>프로젝트 개요</h3>
            <p>
              한국철도공사의 예매페이지인 Let’s Korail의 리뉴얼을
              진행해보았습니다. 이 사이트는 오랜 기간 운영된 사이트인만큼
              노후화되거나 트렌드에 맞지 않는 부분들이 사용자에게 불편함을 줄 수
              있다고 생각되어 선정하게 되었습니다.
            </p>
            <p>
              합목적성과 경제성, 사용성등이 부족하다고 생각되어 비슷한 예매
              사이트인 아시아나 항공과 대한항공의 웹사이트를 벤치마킹하여
              제작하게 되었습니다.
            </p>
            <p>
              이를 리뉴얼하는 과정에서 라이브러리 없이 하드코딩으로 진행하여
              HTML, CSS, JS을 다시 한 번 복습하고 공공 데이터 API를 활용하여
              데이터 출력하는 방법을 습득하였습니다.
            </p>
          </section>
          <section class="attach">
            <img src="./img/dev_env.png" alt="프로젝트 첨부파일" />
          </section>
          <section class="contribution">
            <h3>프로젝트 기여도</h3>
            <p>
              이 프로젝트는 개인 프로젝트로, 기획, 디자인, 구현의 모든 단계를
              혼자 담당하며 전반적인 흐름을 통합적으로 관리했습니다. 다양한
              역할을 수행하며 각 분야에 대한 이해를 깊게 할 수 있었고, 진행
              과정에서 발생한 기술적/디자인적 문제를 직접 해결하며 최적의
              결과물을 도출하기 위해 끊임없이 개선했습니다
            </p>
          </section>
          <section class="problem">
            <h3>프로젝트 문제 해결</h3>
            <div class="accordion accordion-flush" id="accordion_problem1">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#problem1"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    슬라이드 연속 클릭 문제
                  </button>
                </h2>
                <div
                  id="problem1"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion_problem1"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <span>문제</span>슬라이드 이전, 다음 버튼을 누를 때
                        연속해서 빠르게 누르면 슬라이드 이미지가 생성되지 않는
                        문제가 발견되었습니다
                      </li>
                      <li>
                        <span>원인</span>무한 슬라이드를 만들기 위해 앞 뒤로
                        복제해둔 슬라이드가 유저가 빠르게 연속 클릭하면서 앞 뒤
                        슬라이드가 중간 슬라이드로 변경되지 못하면서 문제가
                        생겼습니다
                      </li>
                      <li>
                        <span>해결</span>debounce 함수를 통해 연속 클릭하는데에
                        setTimeOut을 통해 제약을 걸어서 해결 했습니다
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion accordion-flush" id="accordion_problem2">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#problem2"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    이벤트 버블링 문제
                  </button>
                </h2>
                <div
                  id="problem2"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordion_problem2"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <span>문제</span>예매를 위해서 출발역과 도착역 등을
                        검색하고 등록하게 클릭하게 되면 검색창이 사라지지 않는
                        문제가 생겼습니다{" "}
                      </li>
                      <li>
                        <span>원인</span>이벤트 버블링 때문에 부모 요소에
                        이벤트가 발생해야하는데 자식 요소가 클릭되어 자식
                        요소에서 이벤트가 실행되며 문제가 발생하였습니다
                      </li>
                      <li>
                        <span>해결</span>이벤트를 거는 요소를 명확하게 지정하고
                        CSS를 직접 조작해 요소에 이벤트가 적용될 수 있도록
                        하였습니다
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Detail;
