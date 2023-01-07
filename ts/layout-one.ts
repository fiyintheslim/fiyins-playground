import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const indicator = document.querySelector(".indicator");
const links = document.querySelectorAll(".nav-item");
const cards = document.querySelectorAll(".card");

window.addEventListener("load", handlePageLoad);

function handlePageLoad() {
  let defaultLink = links[0] as HTMLLIElement;
  indicator?.setAttribute(
    "style",
    `width:${defaultLink?.offsetWidth}px; transform:translateX(${defaultLink.offsetLeft}px)`
  );

  links.forEach(function attachEventListener(each) {
    each.addEventListener("click", handleNavClick);
  });

  cards.forEach(function attachListenersToCards(card) {
    card.addEventListener("click", handleCardClick);
  });
}

function handleNavClick(this: HTMLLIElement, e: Event) {
  let element = this;
  links?.forEach(function resetColor(el) {
    if (element === el) {
      el.setAttribute("style", `color: blue`);
      //   gsap.to(el, { color: "blue", duration: 0.5, ease: "elastic" });
    } else {
      el.setAttribute("style", "color:black");
    }
  });
  gsap.to(indicator, {
    x: `${this.offsetLeft}px`,
    duration: 1,
    width: `${this.offsetWidth}px`,
    ease: "elastic",
  });
}

function handleCardClick(this: HTMLDivElement, e: Event) {
  const state = Flip.getState(cards);
  const element = this;
  const isCardActive = this.classList.contains("active");
  cards.forEach((card) => {
    card.classList.remove("active");
    card.classList.remove("inactive");
  });

  cards.forEach((card) => {
    if (isCardActive) return;
    if (card === element) {
      element.classList.add("active");
    } else {
      card.classList.add("inactive");
    }
  });

  Flip.from(state, {
    duration: 1,
    ease: "expo.out",
    absolute: true,
  });
}
