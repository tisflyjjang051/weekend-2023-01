Splitting();
const swiperObj = {
  speed: 1000,
  loop: true,
  effect: "fade",
  autoplay: {},
  pagination: {
    el: ".main-visual__pagination",
    type: "bullets",
  },
};

// 이벤트  (~시점에, ~때)

const swiper = new Swiper(".main-visual", {
  speed: 400,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-visual__pagination",
    type: "bullets",
    clickable: true,
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    //1. 문법적 오류
    //2. 오탈자...
    //3. 로직   junior  vs senior
    slideChangeTransitionStart: function () {
      console.log("slide change");
      gsap.fromTo(".swiper-slide-active .main-visual__slogan .char", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.03, ease: "power4", duration: 1 });
    },
    slideChangeTransitionEnd: function () {
      console.log("slide transition end");
    },
  },
});
