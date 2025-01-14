import React from "react";

const Events = ({ event, index }) => {
  return (
    <div key={index} className="event">
      <div className="date">{event.date}</div>
      <div className="details">
        <p>{event.details.title}</p>
        <p>{event.details.subtitle}</p>
      </div>
    </div>
  );
};
export default Events;
