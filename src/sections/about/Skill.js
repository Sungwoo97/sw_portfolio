import React, { useState } from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX - window.innerWidth / 2,
      y: clientY - window.innerHeight / 2,
    });
  };

  const calculateTransform = (depth) => ({
    x: mousePosition.x * depth,
    y: mousePosition.y * depth,
  });
  return (
    <div
      class="skill container"
      id="parallax-container"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        class="tools"
        animate={calculateTransform(0.4)}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <ul>
          <li>
            <img src="./img/figma.svg" alt="피그마" />
          </li>
          <li>
            <img src="./img/slack.svg" alt="슬랙" />
          </li>
          <li>
            <img src="./img/trello.svg" alt="트렐로" />
          </li>
          <li>
            <img src="./img/unity.svg" alt="유니티" />
          </li>
        </ul>
      </motion.div>
      <motion.div class="front" data-depth="0.8">
        <ul>
          <li>
            <img src="./img/html5.svg" alt="HTML" />
          </li>
          <li>
            <img src="./img/css3.svg" alt="CSS" />
          </li>
          <li>
            <img src="./img/javascript.svg" alt="JavaScript" />
          </li>
          <li>
            <img src="./img/jquery.svg" alt="Jquery" />
          </li>
        </ul>
      </motion.div>
      <div class="front2" data-depth="0.6">
        <ul>
          <li>
            <img src="./img/react.svg" alt="React" />
          </li>
          <li>
            <img src="./img/next-dot-js.svg" alt="Next.js" />
          </li>
          <li>
            <img src="./img/vue-dot-js.svg" alt="Vue.js" />
          </li>
        </ul>
      </div>
      <div class="back" data-depth="0.6">
        <ul>
          <li>
            <img src="./img/php.svg" alt="PHP" />
          </li>
          <li>
            <img src="./img/mysql.svg" alt="MySQL" />
          </li>
        </ul>
      </div>
      <div class="devops" data-depth="0.4">
        <ul>
          <li>
            <img src="./img/amazonaws.svg" alt="AWS" />
          </li>
          <li>
            <img src="./img/firebase.svg" alt="Firebase" />
          </li>
          <li>
            <img src="./img/supabase.svg" alt="Supabase" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
