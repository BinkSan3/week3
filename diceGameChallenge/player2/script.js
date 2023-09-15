// const dice = document.getElementById("dice");
// const currentScore = document.getElementsByClassName("currentScore");
// const roll = document.getElementById("roll");
// let rollNumber = 0;

// const playerOne = document.getElementById("playerOne");
// const playerTwo = document.getElementById("playerTwo");
// let playerTurn = true;

// let turn = () => {
//   playerOne != playerTwo;
//   if (playerOne != playerTurn) {
//     playerTwo.diceRoll();
//   }
// };
// //write a program that generates random number between one and six and plugs it straight into the src of the img

// const diceRoll = () => {
//   const randomNumber = Math.ceil(Math.random() * 6);
//   dice.src = `../assets/dice${randomNumber}.png`;
//   rollNumber += randomNumber;
//   for (i = 0; i < currentScore.length; i++) {
//     if (randomNumber > 1) {
//       currentScore[i].textContent = rollNumber;
//       if (rollNumber >= 20) {
//         currentScore[i].textContent = "YOU WIN";
//         roll.disabled = true;
//       }
//     } else {
//       currentScore[i].textContent = "YOU LOSE";
//       roll.disabled = true;
//     }
//   }
// };

// roll.addEventListener("click", () => {
//   diceRoll();
// });

// //click event listener for roll button

// //scores to update separate players card when hold is pressed
// //so when hold is pressed it swaps the players score card true and the other false

// const dice = document.getElementById("dice");
// const currentScore = document.getElementsByClassName("currentScore");
// const roll = document.getElementById("roll");
// let rollNumber = 0;

// const playerOne = document.getElementById("playerOne");
// const playerTwo = document.getElementById("playerTwo");
// let playerTurn = false;

// const diceRoll = () => {
//   const randomNumber = Math.ceil(Math.random() * 6);
//   dice.src = `../assets/dice${randomNumber}.png`;
//   rollNumber += randomNumber;
// };

// roll.addEventListener("click", () => {
//   if ((playerOne = true)) {
//     playerOne.children.diceRoll();
//   }
// });

//okay so using the class it will update both i need to make it so it will only update a certain one and then flip it. maybe instead of true and false i can use 1 and 0 of the array and make a function that only allows ne to be used at a time
//it needs an active function one the disables the other persons scorecard while another is running

const dice = document.getElementById("dice");
const currentScore = document.getElementsByClassName("currentScore");
const wins = document.getElementsByClassName("wins");
const holdNumber = document.getElementsByClassName("holdNumber");

const whichPlayer = document.getElementById("whichPlayer");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const restart = document.getElementById("restart");
let rollNumber = 0;

const playerCard = document.querySelectorAll("aside");

let playerTurn = 0;
whichPlayer.textContent = 1;

let turn = () => {
  if (playerTurn === 0) {
    playerTurn = 1;
  } else {
    playerTurn = 0;
  }
  whichPlayer.textContent = playerTurn + 1;
  playerCard[0].classList.toggle("playerCard");
  playerCard[1].classList.toggle("playerCard");
};
//write a program that generates random number between one and six and plugs it straight into the src of the img

const diceRoll = () => {
  const randomNumber = Math.ceil(Math.random() * 6);
  dice.src = `../assets/dice${randomNumber}.png`;
  rollNumber += randomNumber;

  if (randomNumber > 1) {
    currentScore[playerTurn].textContent = rollNumber;
    if (rollNumber + parseInt(holdNumber[playerTurn].textContent) >= 20) {
      currentScore[playerTurn].textContent = "YOU WIN";

      wins[playerTurn].textContent++;
      roll.disabled = true;
      hold.disabled = true;
    }
  } else {
    currentScore[playerTurn].textContent = "YOU LOSE";
    roll.disabled = true;
    hold.disabled = true;
  }
};

const reset = () => {
  for (i = 0; i < currentScore.length; i++) {
    currentScore[i].textContent = 0;
    holdNumber[i].textContent = 0;
    rollNumber = 0;
  }
  roll.disabled = false;
  hold.disabled = false;
  turn();
};

roll.addEventListener("click", () => {
  diceRoll();
});

hold.addEventListener("click", () => {
  holdNumber[playerTurn].textContent =
    rollNumber + parseInt(holdNumber[playerTurn].textContent);
  rollNumber = 0;
  turn();
});

restart.addEventListener("click", () => {
  reset();
});

// need all to reset to one when you lose will use the same function that restart uses

// const dice = document.getElementById("dice");
// const currentScore = document.getElementsByClassName("currentScore");
// const wins = document.getElementsByClassName("wins");
// const holdNumber = document.getElementsByClassName("holdNumber");

// const whichPlayer = document.getElementById("whichPlayer");
// const roll = document.getElementById("roll");
// const hold = document.getElementById("hold");
// const restart = document.getElementById("restart");
// let rollNumber = 0;

// const playerOne = document.getElementById("playerOne");
// const playerTwo = document.getElementById("playerTwo");
// let playerTurn = 0;
// let winNumber = 0;

// let turn = () => {
//   if (playerTurn === 0) {
//     playerTurn = 1;
//   } else {
//     playerTurn = 0;
//   }
// };
// //write a program that generates random number between one and six and plugs it straight into the src of the img

// const diceRoll = () => {
//   const randomNumber = Math.ceil(Math.random() * 6);
//   dice.src = `../assets/dice${randomNumber}.png`;
//   rollNumber += randomNumber;

//   if (randomNumber > 1) {
//     currentScore[playerTurn].textContent = rollNumber;
//     if (rollNumber >= 20) {
//       currentScore[playerTurn].textContent = "YOU WIN";
//       //   wins[playerTurn].textContent = winNumber++;
//     }
//   } else {
//     currentScore[playerTurn].textContent = "YOU LOSE";
//     turn();
//   }
//   if (
//     currentScore[playerTurn].textContent === "YOU WIN" ||
//     currentScore[playerTurn].textContent === "YOU LOSE"
//   ) {
//     roll.disabled = true;
//     hold.disabled = true;
//   }
// };

// const reset = () => {
//   for (i = 0; i < currentScore.length; i++) {
//     currentScore[i].textContent = 0;
//     holdNumber[i].textContent = 0;
//     rollNumber = 0;
//   }
//   roll.disabled = false;
//   hold.disabled = false;
//   turn();
// };

// roll.addEventListener("click", () => {
//   diceRoll();
// });

// hold.addEventListener("click", () => {
//   holdNumber[playerTurn].textContent = rollNumber;
//   turn();
// });
// restart.addEventListener("click", () => {
//   reset();
// });

// // need all to reset to one when you lose will use the same function that restart uses
