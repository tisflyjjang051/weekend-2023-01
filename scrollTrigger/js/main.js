gsap.to(".red", {
  x: 1200,
  rotation: 180,
  duration: 5,
  scrollTrigger: {
    trigger: ".red",
    markers: true,
    start: "top center",
    end: "bottom top+=300",
    //scrub: 1,
    //pin: true, // 화면 고정 시키기
    toggleActions: "play pause reverse reset", // 앞에 두개는 내려갈때 뒤에 두개는 올라갈때...
  },
});

gsap.to(".green", {
  x: 1200,
  rotation: 180,
  duration: 5,
  scrollTrigger: {
    trigger: ".green",
    markers: true,
    start: "top center",
    end: "bottom top",
  },
});
gsap.to(".blue", {
  x: 1200,
  rotation: 180,
  duration: 5,
  scrollTrigger: {
    trigger: ".blue",
    markers: true,
    start: "top center",
    end: "bottom top",
  },
});
