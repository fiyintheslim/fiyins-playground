import gsap from "gsap";

const burgerButton = document.querySelector(".hamburger");

function initiateBurgerMenu() {
  let open = false;
  const tl = gsap.timeline();
  tl.addLabel("initial")
    .to(
      ".hamburger .one",
      {
        width: 32,
        rotate: 45,
        y: 8,
        duration: 0.4,
        ease: "none",
      },
      "initial"
    )
    .to(
      ".hamburger .two",
      { width: 32, rotate: -45, y: -8, duration: 0.4, ease: "none" },
      "initial"
    )
    .to("header ul", { right: 0, duration: 0.3, ease: "none" })
    .fromTo(
      "header ul li",
      {
        x: 5,
        rotate: 2,
      },
      {
        x: 0,
        rotate: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "elastic",
      }
    )
    .pause();

  return function () {
    if (open) {
      open = !open;
      return tl.reverse();
    }
    open = !open;
    tl.play();
  };
}

const handleBurgerMenu = initiateBurgerMenu();

burgerButton?.addEventListener("click", handleBurgerMenu);
