import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const List = ({ list }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="listSlides col-md-4">
      <div class="listContent">
        <img src={list.image} alt="" />

        <div class="listinfo">
          <h5>{list.title}</h5>
          <a href={`/detail/${list.id}`} class="button btn hover_btn">
            상세 보기
          </a>
          <a
            href={list.links.live}
            target="_blank"
            class="button btn hover_btn"
          >
            이동하기
          </a>
        </div>
      </div>
    </div>
  );
};
export default List;
