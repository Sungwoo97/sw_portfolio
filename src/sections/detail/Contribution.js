import React from "react";

const Title = ({ data }) => {
  return (
    <section class="contribution">
      <h3>프로젝트 기여도</h3>
      {data.contribution.map((con, index) => (
        <p key={index}>{con}</p>
      ))}
    </section>
  );
};
export default Title;
