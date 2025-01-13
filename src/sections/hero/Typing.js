import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <div class="text-container">
      <TypeAnimation
        sequence={[
          "FRONT-END", // Types 'One'
          4000, // Waits 1s
          "", // Types 'One'
          2000, // Waits 1s
          "SOFT WEB", // Deletes 'One' and types 'Two'
          4000, // Waits 2s
          "", // Types 'One'
          2000, // Waits 1s
          () => {
            console.log("Sequence completed");
          },
        ]}
        speed={5}
        deletionSpeed={5}
        wrapper="span"
        cursor={false}
        repeat={Infinity}
        style={{ fontSize: "100px", display: "inline-block", opacity: "20%" }}
      />
      <p className="typeText"></p>
    </div>
  );
};

export default Typing;
