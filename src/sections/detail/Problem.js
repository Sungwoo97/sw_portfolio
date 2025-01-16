import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Problem = () => {
  return (
    <section class="problem">
      <h3>프로젝트 문제 해결</h3>
      {/* <div class="accordion accordion-flush" id="accordion_problem1">
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
                  <span>문제</span>슬라이드 이전, 다음 버튼을 누를 때 연속해서
                  빠르게 누르면 슬라이드 이미지가 생성되지 않는 문제가
                  발견되었습니다
                </li>
                <li>
                  <span>원인</span>무한 슬라이드를 만들기 위해 앞 뒤로 복제해둔
                  슬라이드가 유저가 빠르게 연속 클릭하면서 앞 뒤 슬라이드가 중간
                  슬라이드로 변경되지 못하면서 문제가 생겼습니다
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
                  <span>문제</span>예매를 위해서 출발역과 도착역 등을 검색하고
                  등록하게 클릭하게 되면 검색창이 사라지지 않는 문제가
                  생겼습니다{" "}
                </li>
                <li>
                  <span>원인</span>이벤트 버블링 때문에 부모 요소에 이벤트가
                  발생해야하는데 자식 요소가 클릭되어 자식 요소에서 이벤트가
                  실행되며 문제가 발생하였습니다
                </li>
                <li>
                  <span>해결</span>이벤트를 거는 요소를 명확하게 지정하고 CSS를
                  직접 조작해 요소에 이벤트가 적용될 수 있도록 하였습니다
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <Accordion flush>
        {/* 슬라이드 연속 클릭 문제 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>슬라이드 연속 클릭 문제</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <span>문제</span> 슬라이드 이전, 다음 버튼을 누를 때 연속해서
                빠르게 누르면 슬라이드 이미지가 생성되지 않는 문제가
                발견되었습니다
              </li>
              <li>
                <span>원인</span> 무한 슬라이드를 만들기 위해 앞 뒤로 복제해둔
                슬라이드가 유저가 빠르게 연속 클릭하면서 앞 뒤 슬라이드가 중간
                슬라이드로 변경되지 못하면서 문제가 생겼습니다
              </li>
              <li>
                <span>해결</span> debounce 함수를 통해 연속 클릭하는데에{" "}
                <code>setTimeout</code>을 통해 제약을 걸어서 해결 했습니다
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* 이벤트 버블링 문제 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>이벤트 버블링 문제</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <span>문제</span> 예매를 위해서 출발역과 도착역 등을 검색하고
                등록하게 클릭하면 검색창이 사라지지 않는 문제가 발생했습니다
              </li>
              <li>
                <span>원인</span> 이벤트 버블링 때문에 부모 요소에 이벤트가
                발생해야 하는데 자식 요소가 클릭되어 자식 요소에서 이벤트가
                실행되며 문제가 발생했습니다
              </li>
              <li>
                <span>해결</span> 이벤트를 거는 요소를 명확하게 지정하고 CSS를
                직접 조작해 요소에 이벤트가 적용될 수 있도록 처리했습니다
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};
export default Problem;
