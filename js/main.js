/* 풀페이지 레이아웃 */
let currentSection = 0;
const sections = document.querySelectorAll("section");
let isScrolling = false;
const scrollDelay = 1000;
const experienceSection = document.querySelector(".experience");
const timelineContainer = document.querySelector(".timeline");
const timelineSpan = timelineContainer.querySelector('span');
const timelineEvent = timelineContainer.querySelectorAll('.event');


// 화면 크기 변경 시 스크롤 위치 재조정
window.addEventListener("resize", () => {
  // scrollToSection(currentSection);
  timelineBar();
});

// // 휠 이벤트가 생기면 
// document.addEventListener("wheel", (event) => {
//   // 스크롤 중일 때는 무시
//   if (isScrolling) return;

//   const direction = event.deltaY > 0 ? 1 : -1; // 스크롤 방향

//   // 경험 섹션에서만 개별 스크롤을 처리
//   if (experienceSection.contains(event.target)) {
//     const isAtTop = timelineContainer.scrollTop === 0 && event.deltaY < 0;
//     const isAtBottom =
//       timelineContainer.scrollHeight - timelineContainer.scrollTop ===
//         timelineContainer.clientHeight && event.deltaY > 0;

//     // 타임라인 섹션에서 스크롤이 끝까지 내려가면 풀페이지로 이동
//     if (isAtBottom) {
//       event.preventDefault(); // 기본 스크롤 방지
//       scrollToNextSection(); // 다음 섹션으로 이동
//     }

//     // 타임라인 섹션에서 위로 스크롤할 때 풀페이지로 이동
//     if (isAtTop) {
//       event.preventDefault(); // 기본 스크롤 방지
//       scrollToPreviousSection(); // 이전 섹션으로 이동
//     }
//   } else {
//     // 풀페이지 스크롤 처리
//     const newSection = currentSection + direction;

//     // 새 섹션 인덱스 계산
//     if (newSection >= 0 && newSection < sections.length) {
//       currentSection = newSection; // 섹션 업데이트
//       scrollToSection(currentSection); // 섹션 이동
//     }
//   }
// }, { passive: false });

// // 섹션 이동 함수
// function scrollToSection(sectionIndex) {
//   const offset = sectionIndex * window.innerHeight;
//   isScrolling = true; // 스크롤 잠금

//   // 스크롤 애니메이션
//   window.scrollTo({
//     top: offset,
//     behavior: "smooth",
//   });

//   // 대기 시간 후 스크롤 잠금 해제
//   setTimeout(() => {
//     isScrolling = false;
//   }, scrollDelay);
// }

// // 다음 섹션으로 이동
// function scrollToNextSection() {
//   const newSection = currentSection + 1;

//   // 섹션 인덱스가 범위를 벗어나지 않도록 제한
//   if (newSection >= 0 && newSection < sections.length) {
//     currentSection = newSection;
//     scrollToSection(currentSection);
//   }
// }

// // 이전 섹션으로 이동
// function scrollToPreviousSection() {
//   const newSection = currentSection - 1;

//   // 섹션 인덱스가 범위를 벗어나지 않도록 제한
//   if (newSection >= 0 && newSection < sections.length) {
//     currentSection = newSection;
//     scrollToSection(currentSection);
//   }
// }

// // 페이지 로드 시 강제로 맨 위로 이동
// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };
//타임라인 바 계산
function timelineBar(){

  timelineSpan.style.height = 134 * timelineEvent.length + (85 * 2)  + 'px';

}
timelineBar();

/* 메인 페이지 타이핑 효과 */
function typeText(element, text, speed, callback) {
  let index = 0;
  const interval = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}


function eraseText(element, text, speed, callback) {
  let index = text.length;
  const interval = setInterval(() => {
    element.textContent = text.slice(0, index);
    index--;
    if (index === -1) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}

function startAnimation() {
  const textElement = document.querySelector('.text');

  typeText(textElement, 'FRONT-END', 400, () => {
    setTimeout(() => {
      eraseText(textElement, 'FRONT-END', 200, () => {
        setTimeout(() => {
          typeText(textElement, 'SOFT WEB', 400, () => {
            setTimeout(() => {
              eraseText(textElement, 'SOFT WEB', 200, () => {
                setTimeout(startAnimation, 1000);
              });
            }, 2000);
          });
        }, 2000);
      });
    }, 2000);
  });
}

setTimeout(()=>{
  startAnimation();

}, 3000)

// 성장 멘트 슬라이드
$('.growUp').slick({
  infinite: true,
  speed: 300,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  prevArrow: false,
  nextArrow: false,
});

// 성장 멘트 슬라이드

$('.miniCard').slick({
  slidesToShow: 3, // 보여줄 슬라이드 수
  slidesToScroll: 1, // 스크롤 시 넘어갈 슬라이드 수
  dots: false,
  prevArrow: $('.minimalList .controls .prev'),
  nextArrow: $('.minimalList .controls .next'),
});