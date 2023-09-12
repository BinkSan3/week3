// ACTIVITY 1

const sunsetImage = document.getElementById("activity1Image");
const treeButton = document.getElementById("activity1Button");
let sunsetIsVisible = true;

treeButton.addEventListener("click", () => {
  if (sunsetIsVisible) {
    sunsetImage.style.display = "none";
  } else {
    sunsetImage.style.display = "block";
  }
  sunsetIsVisible = !sunsetIsVisible;
});

//ACTIVITY 2

const imageChange = document.getElementById("imageChange");
const inputImageBox = document.getElementById("inputImageBox");
const changeImageButton = document.getElementById("changeImageButton");

changeImageButton.addEventListener("click", () => {
  imageChange.src = inputImageBox.value;
});

//ACTIVITY 3

const headingChange = document.getElementById("headingChange");
const newHeadingColor = document.getElementById("newHeadingColor");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  headingChange.style.color = newHeadingColor.value;
});

//ACTIVITY 4

const coordinates = document.getElementById("displayCordinates");

document.addEventListener("click", (clickEvent) => {
  coordinates.textContent = `${clickEvent.clientX} , ${clickEvent.clientY}`;
});
