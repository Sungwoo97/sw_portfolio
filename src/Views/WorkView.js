import React, { useEffect, useRef, useState } from "react";
import Events from "../sections/work/Events";

const WorkView = ({ events }) => {
  const timelineContainerRef = useRef(null);
  const timelineSpanRef = useRef(null);
  const [timeline, setTimeline] = useState(0);

  const timelineBar = () => {
    const eventCount = events.length;
    const height = 134 * eventCount + 85 * 2; // 계산식 적용
    setTimeline(height); // 상태로 관리
  };

  useEffect(() => {
    // 타임라인 높이 계산
    timelineBar();

    // 리사이즈 이벤트 핸들러
    const handleResize = () => {
      timelineBar();
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [events]); // events가 변경될 때마다 다시 계산

  return (
    <section class="experience" id="exp" ref={timelineContainerRef}>
      <div class="content">
        <h4>저는 이렇게 달려왔습니다</h4>
        <div class="timeline ">
          <span
            ref={timelineSpanRef}
            style={{
              height: `${timeline}px`,
            }}
          ></span>
          {events.map((event, index) => (
            <Events key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkView;
