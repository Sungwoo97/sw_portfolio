import React from "react";

const Title = ({ data }) => {
  return (
    <section clclassNameass="title">
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
    </section>
  );
};
export default Title;
