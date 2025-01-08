
let currentSection = 0;
const sections = document.querySelectorAll("section");
let isScrolling = false; 
const scrollDelay = 1000; 

// 화면 크기 변경 시 스크롤 위치 재조정
window.addEventListener("resize", () => {
  scrollToSection(currentSection);
});

//휠 이벤트가 생기면 
document.addEventListener("wheel", (event) => {
  // 스크롤 중일 때는 무시
  if (isScrolling) return;

  const direction = event.deltaY > 0 ? 1 : -1; // 스크롤 방향

  // 새 섹션 인덱스 계산
  const newSection = currentSection + direction;

  // 섹션 인덱스가 범위를 벗어나지 않도록 제한
  if (newSection >= 0 && newSection < sections.length) {
    currentSection = newSection; // 섹션 업데이트
    scrollToSection(currentSection); // 섹션 이동
  }
});

function scrollToSection(sectionIndex) {
  const offset = sectionIndex * window.innerHeight;
  isScrolling = true; // 스크롤 잠금

  // 스크롤 애니메이션
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  // 대기 시간 후 스크롤 잠금 해제
  setTimeout(() => {
    isScrolling = false;
  }, scrollDelay);
}

// 페이지 로드 시 강제로 맨 위로 이동
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};


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

/* 메인 페이지 타이핑 효과 */
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

  typeText(textElement, 'SUNG WOO', 400, () => {
    setTimeout(() => {
      eraseText(textElement, 'SUNG WOO', 200, () => {
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