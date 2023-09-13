const diceNumber = document.getElementById("diceNumber");
const roll = document.getElementById("roll");
const restart = document.getElementById("restart");
const score = document.getElementById("score");
const win = document.getElementById("win");
const countingRolls = document.getElementById("countingRolls");
let rollNumber = 0;

const diceRoll = () => {
  const randomNumber = Math.ceil(Math.random() * 6);
  diceNumber.src = `./assets/dice${randomNumber}.png`;
  countingRolls.textContent++;
  if (randomNumber > 1) {
    rollNumber += randomNumber;
    score.textContent = rollNumber;
    if (rollNumber >= 20) {
      score.textContent = "YOU WIN!";
      win.textContent++;
      roll.disabled = true;
      roll.style.backgroundColor = "#134f5c";
    }
  } else {
    score.textContent = "YOU LOSE";
    roll.disabled = true;
    roll.style.backgroundColor = "#e0ddd5";
  }
};

roll.addEventListener("click", () => {
  diceRoll();
});

const reset = () => {
  score.textContent = 0;
  countingRolls.textContent = 0;
  rollNumber = 0;
  roll.disabled = false;
  roll.style.backgroundColor = "#f44336";
};

restart.addEventListener("click", () => {
  reset();
});

//create function that generates random number between 1-6
//have that number change the img src to the corresponding die number //DONE

//create a event listener click that calls on this function when button is clicked//DONE

//create methods or functions that allow the span tags to update the right number respectively//DONE
//   {
//     diceNumber.src = `./assets/dice${math.round(Math.random() * 6)}.png`;
//     console.log(test[i]);
//   }
// };
// diceRoll();
