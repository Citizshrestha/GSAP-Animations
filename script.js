gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from("nav h1",{
  y: -30,
  duration: 0.5,
  delay: 0.6,
  stagger: 0.3,
  opacity: 0,
})
tl.from("nav a, nav button",{
  y: 30,
  duration: 0.3,
  stagger: 0.15,
  opacity:0,
})

tl.from(".center-part1 h1",{
  x: -200,
  duration: 0.5,
  opacity: 0,
})

tl.from(".center-part1 p",{
  x: -100,
  duration: 0.5,
  opacity: 0,
})
tl.from(".center-part1 button",{
  duration: 0.4,
  opacity: 0,
})
tl.from(".center-part2 img",{
  duration: 0.6,
  opacity: 0,
  x: 200,
},"-=0.5")

tl.from(".section1bottom img",{
  y: 30,
  opacity: 0,
})

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",

    start: "top 50%",
    end: "top 0%",
    scrub: 2,
  },
});


tl2.from(".services",{

  x: 650,
  opacity: 0,
  duration: 0.9,

});

tl2.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim"
);
tl2.from(
  ".elem.line1.black.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim"
);
tl2.from(
  ".elem.black.line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);
tl2.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);
