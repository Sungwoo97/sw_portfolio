import React from "react";
import Slider from "react-slick";

const GrowUp = () => {
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
    <Slider className="growUp" {...settings}>
      <div>
        약 100개 사이트의 개발 업무에 참여하며 PHP·그누보드 기반 기능 개발과 유지보수를 담당했습니다.
      </div>
      <div>
        레거시 PHP 호환성 개선, 데이터베이스 설계, 서버 이전과 운영 장애 대응을 경험했습니다.
      </div>
      <div>
        요구사항 분석부터 구현·검수·배포까지 맡은 기능을 책임지고 완성하는 개발자입니다.
      </div>
    </Slider>
  );
};
export default GrowUp;
