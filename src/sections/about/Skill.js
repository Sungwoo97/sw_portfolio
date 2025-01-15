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
    x: mousePosition.x * depth * 0.5,
    y: mousePosition.y * depth * 0.5,
  });
  return (
    <div class="skill " onMouseMove={handleMouseMove}>
      <motion.div
        class="tools"
        animate={calculateTransform(0.1)}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
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
      <motion.div
        class="front"
        animate={calculateTransform(0.1)}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      >
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
      <motion.div
        class="front2"
        animate={calculateTransform(0.1)}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      >
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
      </motion.div>
      <motion.div
        class="back"
        animate={calculateTransform(0.1)}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      >
        <ul>
          <li>
            <img src="./img/php.svg" alt="PHP" />
          </li>
          <li>
            <img src="./img/mysql.svg" alt="MySQL" />
          </li>
        </ul>
      </motion.div>
      <motion.div
        class="devops"
        animate={calculateTransform(0.1)}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
      >
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
      </motion.div>
    </div>
  );
};

export default Skill;
