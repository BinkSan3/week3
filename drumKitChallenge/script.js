// const allSounds = document.getElementById("allSounds");

// const playSoundByID = (audioID) => {
//   let audio = document.querySelector(`audio[data-drumType="${audioID}"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };

// allSounds.addEventListener("click", (clickEvent) => {
//   playSoundByID(clickEvent.target.id);
// });

// const playBoom = () => {
//   let audio = document.querySelector(`audio[data-drumType="boom"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };

// const playClap = () => {
//   let audio = document.querySelector(`audio[data-drumType="clap"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playHihat = () => {
//   let audio = document.querySelector(`audio[data-drumType="hihat"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playKick = () => {
//   let audio = document.querySelector(`audio[data-drumType="kick"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playOpenhat = () => {
//   let audio = document.querySelector(`audio[data-drumType="openhat"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playRide = () => {
//   let audio = document.querySelector(`audio[data-drumType="ride"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playSnare = () => {
//   let audio = document.querySelector(`audio[data-drumType="snare"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playTink = () => {
//   let audio = document.querySelector(`audio[data-drumType="tink"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };
// const playTom = () => {
//   let audio = document.querySelector(`audio[data-drumType="tom"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };

// document.addEventListener("keydown", (keyDownEvent) => {
//   if (keyDownEvent.code === "KeyA") {
//     playSoundByID("boom");
//   } else if (keyDownEvent.code === "KeyS") {
//     playSoundByID("clap");
//   } else if (keyDownEvent.code === "KeyD") {
//     playHihat();
//   } else if (keyDownEvent.code === "KeyF") {
//     playKick();
//   } else if (keyDownEvent.code === "KeyG") {
//     playOpenhat();
//   } else if (keyDownEvent.code === "KeyH") {
//     playRide();
//   } else if (keyDownEvent.code === "KeyJ") {
//     playSnare();
//   } else if (keyDownEvent.code === "KeyK") {
//     playTink();
//   } else if (keyDownEvent.code === "KeyL") {
//     playTom();
//   }
// });

//The above is what I first tried with functions for each sounds. If I were to condense having so many many functions what I could do is call on the playSoundByID function and give each if statement a string to plug into that function See below:

// const allSounds = document.getElementById("allSounds");

// const playSoundByID = (audioID) => {
//   let audio = document.querySelector(`audio[data-drumType="${audioID}"]`);
//   if (audio != null) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// };

// allSounds.addEventListener("click", (clickEvent) => {
//   playSoundByID(clickEvent.target.id);
// });

// document.addEventListener("keydown", (keyDownEvent) => {
//   if (keyDownEvent.code === "KeyA") {
//     playSoundByID("boom");
//   } else if (keyDownEvent.code === "KeyS") {
//     playSoundByID("clap");
//   } else if (keyDownEvent.code === "KeyD") {
//     playSoundByID("hihat");
//   } else if (keyDownEvent.code === "KeyF") {
//     playSoundByID("kick");
//   } else if (keyDownEvent.code === "KeyG") {
//     playSoundByID("openhat");
//   } else if (keyDownEvent.code === "KeyH") {
//     playSoundByID("ride");
//   } else if (keyDownEvent.code === "KeyJ") {
//     playSoundByID("snare");
//   } else if (keyDownEvent.code === "KeyK") {
//     playSoundByID("tink");
//   } else if (keyDownEvent.code === "KeyL") {
//     playSoundByID("tom");
//   }
// });

//now this works well there is a lot less repetition in my code and I can use the big brain function: playSoundByID work as the function whilst giving the function its parameter ("string") to plug into the function in the if else statement.
//It seems this can be condensed down further with a few tweaks to my html so that I can have a similar event listener as the click one without the need for if else statements. lets have a go!

const allSounds = document.getElementById("allSounds");

const playSoundByID = (audioID) => {
  let audio = document.querySelector(`audio[data-drumType="${audioID}"]`);
  if (audio != null) {
    audio.currentTime = 0;
    audio.play();
    document.getElementById(audioID).style.backgroundColor = "red";
    setTimeout(() => {
      document.getElementById(audioID).style.backgroundColor = "pink";
    }, 100); //this works! need to find out a way that doesnt involve manually inputting the color as a string
  }
};

allSounds.addEventListener("click", (clickEvent) => {
  playSoundByID(clickEvent.target.id);
});
document.addEventListener("keydown", (keyDownEvent) => {
  playSoundByID(keyDownEvent.code);
});

//This is perfect by changing the parent button ids and the audio data id to match the keyDownevent.code. It allowed me to use the event object and use a part of that information and plug it straight into the playSoundByID function as the key down event object pulls the keyDownEvent.Code which has a string value and sets it into the parameter of the function which matches a query selector to pull the audio and play the file. Next time to make it look good!
