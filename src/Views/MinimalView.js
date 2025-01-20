import React from "react";
import Slider from "react-slick";
import Mini from "../sections/mini/MiniCard";
import "bootstrap-icons/font/bootstrap-icons.css";

const SampleNextArrow = ({ onClick }) => (
  <div
    className="next"
    onClick={onClick}
    style={{
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      fontSize: "100px",
      left: "calc(100% + 50px)",
      transform: "translateY(-50%)",
    }}
  >
    <i className="bi bi-chevron-compact-right"></i>
  </div>
);
const SamplePrevArrow = ({ onClick }) => (
  <div
    className="prev"
    onClick={onClick}
    style={{
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      fontSize: "100px",

      right: "calc(100% + 50px)",
      transform: "translateY(-50%)",
    }}
  >
    <i className="bi bi-chevron-compact-left"></i>
  </div>
);

const MinimalView = ({ mini }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="minimalList container">
      <div className="content">
        <h4>저는 이렇게 사이드 프로젝트를 진행했어요</h4>
        <Slider className="miniCard" {...settings}>
          {mini.map((mini, index) => (
            <Mini mini={mini} key={mini.id} index={index} />
          ))}
        </Slider>
        <div className="controls"></div>
      </div>
    </section>
  );
};
export default MinimalView;
