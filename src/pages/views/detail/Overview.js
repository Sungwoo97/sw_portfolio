import React from "react";

const Overview = ({ data }) => {
  return (
    <section className="overview">
      <h3>프로젝트 개요</h3>
      {data.overview.map((over, index) => (
        <p key={index}>{over}</p>
      ))}
    </section>
  );
};
export default Overview;
