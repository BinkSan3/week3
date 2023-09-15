const heading = document.getElementById("heading");
const promptChange = document.getElementById("promptChange");
let eventKey = document.getElementById("eventKey");
let eventCode = document.getElementById("eventCode");
let eventKeyCode = document.getElementById("eventKeyCode");
let disappearingBoxes = document.getElementById("disappearingBoxes");

disappearingBoxes.style.display = "none";

document.addEventListener("keydown", (pressingKeyInfo) => {
  disappearingBoxes.style.display = "flex";
  eventKey.textContent = pressingKeyInfo.key;
  eventCode.textContent = pressingKeyInfo.code;
  eventKeyCode.textContent = pressingKeyInfo.keyCode;
  heading.textContent = `JavaScript Key Code ${pressingKeyInfo.keyCode}`;
  promptChange.style.display = "none";
});

document.addEventListener("keyup", () => {
  promptChange.style.display = "block";
  disappearingBoxes.style.display = "none";
  heading.textContent = "JavaScript Key Code";
});
