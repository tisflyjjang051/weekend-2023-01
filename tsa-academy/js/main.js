Splitting();
gsap.defaults({ duration: 1, ease: "power4" });

// 첫번째 page에 animation 5개
const section01TL = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".section01",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom+=2000 top",
  },
});
section01TL
  .from(".section01 .txt01 .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {
    cssRule: { scaleX: 0 },
  })
  .from(".section01 .txt02 .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section01 .txt03 .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section01 .txt04 img", {
    opacity: 0,
    scale: 3,
  })
  .from(".section01 .txt04 img", {
    delay: 10,
  });

// section02
const section02TL = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".section02",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom+=2000 top",
  },
});
section02TL
  .from(".section02 .title", {
    backgroundColor: "transparent",
  })
  .from(".section02 .title .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })

  .from(".section02 .mainTxt .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section02 .circleList li", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section02 .cduBox", {
    opacity: 0,
    scale: 3,
  })
  .from(".section02", {
    delay: 10,
  });
// section03
const section03TL = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".section03",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom+=2000 top",
  },
});
section03TL
  .from(".section03 .title", {
    backgroundColor: "transparent",
  })
  .from(".section03 .title .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })

  .from(".section03 .mainTxt .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section03 .list li", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section03 .airplane", {
    opacity: 0,
    xPercent: -100,
    yPercent: 100,
  })
  .from(".section03", {
    delay: 10,
  });
// section04
const section04TL = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".section04",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom+=2000 top",
  },
});
section04TL
  .from(".section04 .title", {
    backgroundColor: "transparent",
  })
  .from(".section04 .title .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })

  .from(".section04 .mainTxt .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })
  .from(".section04 .list li", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
  })

  .from(".section04", {
    delay: 10,
  });
