import React from "react";
import Slider from "react-slick";

const GrowUpHero = () => {
  var settings = {
    infinite: true,
    speed: 300,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
  };

  // 성장 멘트 슬라이드
  return (
    <Slider class="growUp" {...settings}>
      <p>
        책임감을 바탕으로 맡은 일을 끝까지 해내며, 문제를 해결하고 성장하는
        부드러운 개발자입니다.
      </p>
      <p>
        팀원들과의 부드럽고 원활한 커뮤니케이션을 통해 협업의 시너지를
        이끌어내는 부드러운 개발자입니다
      </p>
      <p>
        끊임없이 발전하는 자세로, 매일 조금씩 더 나아가며 부드러운 개발자가
        되어갑니다
      </p>
    </Slider>
  );
};
export default GrowUpHero;
