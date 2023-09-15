const buttonConfig = document.querySelectorAll("button");
const imageChange = document.getElementById("hoverChange");

const intro = document.getElementById("intro");
const drum = document.getElementById("drum");
const keyCode = document.getElementById("keyCode");
const dice = document.getElementById("dice");
const dicePlus = document.getElementById("dicePlus");

let changingImage = () => {};

intro.addEventListener("mouseover", () => {
  imageChange.src = "./JS-DOM-Intro/assets/malibu-sunset-retro-poster.png";
});
// intro.addEventListener("mouseout", () => {
//   imageChange.src = "./images/hello.png";
// });

keyCode.addEventListener("mouseover", () => {
  imageChange.src = "./images/key.svg";
});
// keyCode.addEventListener("mouseout", () => {
//   imageChange.src = "./images/hello.png";
// });

drum.addEventListener("mouseover", () => {
  imageChange.src = "./images/drum.webp";
});
// drum.addEventListener("mouseout", () => {
//   imageChange.src = "./images/hello.png";
// });

dice.addEventListener("mouseover", () => {
  imageChange.src = "./diceGameChallenge/assets/dice1.png";
});
// dice.addEventListener("mouseout", () => {
//   imageChange.src = "./images/hello.png";
// });

dicePlus.addEventListener("mouseover", () => {
  imageChange.src = "./diceGameChallenge/assets/dice2.png";
});
// dicePlus.addEventListener("mouseout", () => {
//   imageChange.src = "./images/hello.png";
// });
for (i = 0; i < buttonConfig.length; i++) {
  buttonConfig[i].addEventListener("mouseout", () => {
    imageChange.src = "./images/hello.png";
  });
}
