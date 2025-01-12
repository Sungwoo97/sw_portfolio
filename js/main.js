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
  timelineBar();
});

//메인 배경 텍스처 라이브러리
var setVanta = ()=>{
  if (window.VANTA) window.VANTA.NET({
     el: ".main",
     mouseControls: true,
     touchControls: true,
     gyroControls: false,
     minHeight: 200.00,
     minWidth: 200.00,
     scale: 1.00,
     scaleMobile: 1.00,
     color: '#6e6e6e',
     backgroundColor: '#121212',
     points: 20.00,
     spacing: 20.00
   })
  }
setVanta();

//타임라인 바 계산
function timelineBar(){
  timelineSpan.style.height = 134 * timelineEvent.length + (85 * 2)  + 'px';
}
timelineBar();

// 텍스트 타이핑 함수
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

// 타이핑한 텍스트 지우는 함수
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

// 메인 화면에 타이핑 효과를 실행시키는 함수
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

// 스킬 태그 패럴렉스 효과
const parallaxContainer = document.getElementById("parallax-container");
  new Parallax(parallaxContainer);

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

// 미니 프로젝트 슬라이드
$('.miniCard').slick({
  slidesToShow: 3, // 보여줄 슬라이드 수
  slidesToScroll: 1, // 스크롤 시 넘어갈 슬라이드 수
  dots: false,
  prevArrow: $('.minimalList .controls .prev'),
  nextArrow: $('.minimalList .controls .next'),
});

//프로젝트 목록 AOS 효과
AOS.init({
  // 선택 사항: 초기화 시 적용할 설정 옵션
  duration: 1000,  // 애니메이션 지속 시간 (밀리초 단위)
  easing: 'ease-in-out',  // 애니메이션 효과
  once: true,  // 스크롤 시 한 번만 애니메이션 실행
});

  // 스크롤 배경 라이브러리
const rellax = new Rellax('.rellax', {
    round: true, // 위치값 반올림
    center:true,
});
