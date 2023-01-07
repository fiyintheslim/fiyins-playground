import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollers = document.getElementsByClassName("horizontal");

console.log(scrollers[0]);
function getScrollWidth(el: Element) {
  const element = el.querySelector(".animation-wrap");

  return element ? element.scrollWidth : el.scrollWidth;
}

gsap.fromTo(
  scrollers[0].querySelector(".animation-wrap"),
  {
    x: 0,
  },
  {
    x: -getScrollWidth(scrollers[0]) + 500,
    ease: "ease",
    scrollTrigger: {
      trigger: scrollers[0].querySelector(".pin-wrap"),
      start: "center center",
      end: () => `+=1000`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    },
  }
);

gsap.fromTo(
  scrollers[1].querySelector(".animation-wrap"),
  {
    x: -getScrollWidth(scrollers[1]) + 200,
  },
  {
    x: 0,
    ease: "ease",
    scrollTrigger: {
      trigger: scrollers[1].querySelector(".pin-wrap"),
      start: "center center",
      end: `+=1200`,
      scrub: true,
      pin: true,
    },
  }
);
