import React from "react";

const MiniCard = ({ mini, index }) => {
  return (
    <div key={mini.id} className="miniCardContent">
      <img src={mini.image} alt="" />
      <div className="info">
        <h5>
          {mini.title}
          {mini.subtitle && <em> ({mini.subtitle}) </em>}
        </h5>
        <ul>
          {mini.description.map((mini, index) => (
            <li key={index}>{mini}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MiniCard;
