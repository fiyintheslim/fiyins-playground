const listItems = document.querySelectorAll(".list");
const indicator = document.querySelector(".indicator");

window.onload = function handleWindowLoaded() {
  listItems?.forEach(function attachListener(el) {
    el.addEventListener("click", handleClick);
  });
};

function handleClick(this: HTMLLIElement, e: Event) {
  let element = this;
  console.log(this.offsetLeft, this.offsetWidth);
  indicator?.setAttribute("style", `left:${this.offsetLeft + 25}px`);
  listItems?.forEach(function findClickedElement(el) {
    if (element === el) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
