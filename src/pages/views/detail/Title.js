import React from "react";

const Title = ({ data }) => {
  return (
    <section className="title">
      <h2>
        {data.title} <span>{data.member_count}인</span>
      </h2>
      <div className="skill">
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <ul className="link">
        <li>
          <a href={data.links.github} target="_blank" rel="noreferrer">
            <img src="./../img/github.svg" width="30" alt="github" />
          </a>
        </li>
        <li>
          <a href={data.links.live} target="_blank" rel="noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Title;
