import React, { useEffect, useRef, useState } from "react";
import VANTA from "vanta/dist/vanta.net.min";
import TypingHero from "./TypingHero";
import GrowUpHero from "./GrowUpHero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  //메인 배경 텍스처 라이브러리
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        // Vanta.NET을 초기화
        VANTA({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#6e6e6e",
          backgroundColor: "#121212",
          points: 20.0,
          spacing: 20.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // 컴포넌트 언마운트 시 Vanta 효과 해제
    };
  }, [vantaEffect]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <>
      <section className="main" ref={myRef}>
        <div className="content">
          <svg
            width="300"
            height="5"
            viewBox="0 0 300 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="2.5"
              x2="300"
              y2="2.5"
              stroke-dasharray="300"
              stroke-dashoffset="300"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="300"
                to="0"
                dur="2s"
                fill="freeze"
              />
            </line>
          </svg>
          <div class="info">
            <h3>
              <em>namsungwoo</em>'s
            </h3>
            <h2>Portfolio</h2>
          </div>
          <TypingHero />
        </div>

        <div class="subContent">
          {/* <div class="growUp">
            <p>
              책임감을 바탕으로 맡은 일을 끝까지 해내며, 문제를 해결하고
              성장하는 부드러운 개발자입니다.
            </p>
            <p>
              팀원들과의 부드럽고 원활한 커뮤니케이션을 통해 협업의 시너지를
              이끌어내는 부드러운 개발자입니다
            </p>
            <p>
              끊임없이 발전하는 자세로, 매일 조금씩 더 나아가며 부드러운
              개발자가 되어갑니다
            </p>
          </div> */}
          <GrowUpHero />
          <svg
            width="500"
            height="30"
            viewBox="0 0 500 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="500"
              y1="25"
              x2="0"
              y2="25"
              stroke-dasharray="500"
              stroke-dashoffset="500"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="500"
                to="0"
                dur="2s"
                begin=".5s"
                fill="freeze"
              />
            </line>
          </svg>
        </div>
        <div class="scrollTo">
          <p>Scroll To</p>
          <div class="back_motion">
            <span></span>
          </div>
          <div class="scroll_motion">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
