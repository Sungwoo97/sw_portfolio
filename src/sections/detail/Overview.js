import React from "react";

const Overview = ({ data }) => {
  return (
    <section class="overview">
      <h3>프로젝트 개요</h3>
      <p>
        한국철도공사의 예매페이지인 Let’s Korail의 리뉴얼을 진행해보았습니다. 이
        사이트는 오랜 기간 운영된 사이트인만큼 노후화되거나 트렌드에 맞지 않는
        부분들이 사용자에게 불편함을 줄 수 있다고 생각되어 선정하게 되었습니다.
      </p>
      <p>
        합목적성과 경제성, 사용성등이 부족하다고 생각되어 비슷한 예매 사이트인
        아시아나 항공과 대한항공의 웹사이트를 벤치마킹하여 제작하게 되었습니다.
      </p>
      <p>
        이를 리뉴얼하는 과정에서 라이브러리 없이 하드코딩으로 진행하여 HTML,
        CSS, JS을 다시 한 번 복습하고 공공 데이터 API를 활용하여 데이터 출력하는
        방법을 습득하였습니다.
      </p>
    </section>
  );
};
export default Overview;
