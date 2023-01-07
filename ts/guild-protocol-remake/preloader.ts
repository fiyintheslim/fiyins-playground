import gsap from "gsap";

console.log("preloader");

const coinOne = document.querySelector(".preloader__coin.left");
const coinTwo = document.querySelector(".preloader__coin.right");

const loader = document.querySelector(".loader__percentage") as HTMLDivElement;

window.onload = function () {
  gsap.fromTo(
    coinOne,
    { y: 20 },
    {
      y: -20,
      ease: "sine.inOut",
      yoyo: true,
      duration: 0.7,
      delay: 0.5,
      repeat: -1,
    }
  );
  gsap.fromTo(
    coinTwo,
    { y: -20 },
    {
      y: 20,
      ease: "sine.inOut",
      yoyo: true,
      duration: 0.7,
      delay: 0.3,
      repeat: -1,
    }
  );

  function counter() {
    let count = 0;

    return function repaint() {
      count++;
      if (count <= 100) {
        let percentage = `${count}%`;
        loader.textContent = percentage;
        loader.setAttribute("style", `width:${percentage}`);
        requestAnimationFrame(repaint);
      } else {
        //clearInterval(intervalCounter);
        closingAnimation();
      }
    };
  }
  const loadAnimation = counter();
  requestAnimationFrame(loadAnimation);
};

function closingAnimation() {
  let transHeight = window.innerHeight / 2;

  const tl = gsap.timeline().addLabel("endBeginning");
  tl.to(".line-one", { width: "100%", duration: 3 }, "endBeginning")
    .to(".line-two", { width: "100%", duration: 3 }, "endBeginning")
    .addLabel("widthAnimation")
    .to(
      ".line-one",
      {
        y: transHeight,
        duration: 3,
      },
      "widthAnimation"
    )
    .to(
      ".line-two",
      {
        y: -transHeight,
        duration: 3,
      },
      "widthAnimation"
    )
    .to(
      ".preloader__content",
      {
        height: 0,
        duration: 2,
      },
      "widthAnimation+=1"
    )
    .addLabel("disAppearing");
}
