const allSounds = document.getElementById("allSounds");

const playSoundByID = (audioID) => {
  let audio = document.getElementById(audioID).lastChild;
  if (audio != null) {
    audio.currentTime = 0;
    audio.play();
  }
};

allSounds.addEventListener("click", (clickEvent) => {
  playSoundByID(clickEvent.target.id);
});

//This targets the last child(last element of the family) of the button element with the id name that the click event pulls
