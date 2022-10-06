// 일정 스크롤이 내려가면 뱃지가 사라지게하기

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){ //스크롤이벤트 제어를 위한 코드 _.throttle사용
  console.log(window.scrollY);
  if (window.scrollY > 1000){
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));
// _.throttle(함수, 시간(ms));


// SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.background .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
  speed: 1500
});
