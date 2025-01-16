import React from "react";

const Attach = ({ data }) => {
  return (
    <section class="attach">
      <img src={data.attach.image} alt={data.attach.description} />
    </section>
  );
};
export default Attach;
