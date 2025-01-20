import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const List = ({ list }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="listSlides col-md-4">
      <div className="listContent">
        <img src={list.image} alt="" />

        <div className="listinfo">
          <h5>{list.title}</h5>
          <a href={`/detail/${list.id}`} className="button btn hover_btn">
            상세 보기
          </a>
          <a
            href={list.links.live}
            target="_blank"
            className="button btn hover_btn"
          >
            이동하기
          </a>
        </div>
      </div>
    </div>
  );
};
export default List;
