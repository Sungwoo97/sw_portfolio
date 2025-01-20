import React from "react";

const Attach = ({ data }) => {
  return (
    <section class="attach">
      {data.attach.map((image, index) => (
        <img key={index} src={image.image} alt={image.description} />
      ))}
    </section>
  );
};
export default Attach;
