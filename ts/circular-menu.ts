window.onload = handleLoaded;
const menu = document.querySelector(".circular-menu");
const toggle = document.querySelector(".toggle");
function handleLoaded() {
  toggle?.addEventListener("click", handleToggleClick);
}

function handleToggleClick(this: HTMLDivElement, e: Event) {
  menu?.classList.toggle("active");
}
