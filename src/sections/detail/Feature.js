import React from "react";

const Feature = ({ data }) => {
  return (
    <section className="feature">
      <h3>주요 기능</h3>
      <ul>
        {data.features.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </section>
  );
};
export default Feature;
