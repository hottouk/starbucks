const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){ 
  console.log(window.scrollY);
  if(window.scrollY > 500){
    gsap.to(badgeEl,0.6,{ //배지 숨기기
      opacity:0,
      display:'none'
    })
    gsap.to(toTopEl,.2,{ //버튼 보이기
      x:0, //x축 원래대로
    });
  }else{
    gsap.to(badgeEl,0.6,{
      opacity:1,
      display:'block'
    })
    gsap.to(toTopEl,.2,{
      x:100, //100만큼 x축 이동
    });
  }
},300));
//_.throttle(함수, 시간;몇 초 단위로 사용될 것인가?)
//gsap.to(요소, 지속시간, 옵션(객체형태));


toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    scrollTo: 0 
  });
});

const fadeEls=document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*.7,
    opacity:1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 3000 },
  pagination: {
    el:'.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
      prevEl:".promotion .swiper-prev",
      nextEl:".promotion .swiper-next"
  }
});

new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5, //하나의 화면에 몇개의 슬라이드가 보일 것인가?
  navigation:{
    prevEl:".awards .swiper-prev",
    nextEl:".awards .swiper-next"
  }
});

const promotionEl = document.querySelector('.promotion');
const promtionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promtionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min,max){
  return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to('선택자',시간, 옵션)
  gsap.to(selector, random(1.5,2.5), {
    y: size, //y축을 얼마나 움직일 것인가?]
    repeat: -1, //-1이 무한 반복
    yoyo:true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
   .Scene({
    triggerElement: spyEl,  //보여짐 여부를 감시하는 요소를 지정
    tirggerHook:.8, //뷰포트 첫부분 0, 뷰포트 끝부분 1; 0.8은 밑에서 3/4지점.
   })
   .setClassToggle(spyEl, 'show')
   .addTo(new ScrollMagic.Controller());
});
