const allSounds = document.getElementById("allSounds");
const boom = document.getElementById("boom");

const playSoundByID = (audioID) => {
  let audio = document.querySelector(`audio[data-drumType="${audioID}"`);
  if (audio != null) {
    audio.currentTime = 0;
    audio.play();
  }
};

allSounds.addEventListener("click", (clickEvent) => {
  playSoundByID(clickEvent.target.id);
});

document.addEventListener("keydown", (keyDownEvent) => {
  if ((keyDownEvent.code = "KeyA")) {
    playSoundByID(keyDownEvent.target.id);
  }
});
