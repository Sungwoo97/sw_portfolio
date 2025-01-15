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
    <div class="listSlides col-md-8 row" key={list.id} data-aos="fade-up">
      <div class="thumbnail col-md-6">
        <img src={list.image} alt="" />
        <a href={`/detail/${list.id}`} class="button btn hover_btn">
          상세 보기
        </a>
      </div>
      <div class="info col-md-6">
        <h5>{list.title}</h5>
        <p>{list.duration}</p>
        <ul>
          {list.details.map((detail, index) => (
            <li key={index}> {detail}</li>
          ))}
        </ul>
        <div class="gitLink">
          <a href={list.links.github} target="_blank">
            <img src="./img/github.svg" width="10" alt="github" />
          </a>
          <a href={list.links.live} target="_blank">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default List;
