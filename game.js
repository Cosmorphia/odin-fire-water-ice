// declare initial values
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

// display header and instructions
console.log("%cFire, Water, Ice", "font-size:26px");
console.log(`
The first player to 5 points wins.
Type fire, water, or ice to start the game.
Note: choices must be in all lowercase!`);

// randomize computer input and return
function getComputerInput() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return computerInput = "fire";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return computerInput = "water";
    } else {
        return computerInput = "ice";
    }
}

// compare both inputs and return result
function compareInputs() {
    // tie condition
    if (humanInput === computerInput) {
        return winCondition = "tie";
    }
    // human win condition
    else if ((humanInput === "fire" && computerInput === "ice")
    || (humanInput === "water" && computerInput === "fire")
    || (humanInput === "ice" && computerInput === "water")) {
        return winCondition = "human";
    }
    // computer win condition
    else {
        return winCondition = "computer";
    }

}

// update score and round based on winCondition
function updateScoreAndRound() {
    gameRound++;

    if (winCondition === "tie") {
        console.log("%cIt's a tie!", "font-size: 12px; color:white;");
    } else if (winCondition === "human") {
        humanInput = capitalizeFirstLetter(humanInput);
        console.log(`%cHuman wins! ${humanInput} beats ${computerInput}.`, "font-size: 12px; color:#66ff8f");
        humanScore++;
    } else {
        computerInput = capitalizeFirstLetter(computerInput);
        console.log(`%cComputer wins! ${computerInput} beats ${humanInput}.`, "font-size: 12px; color:#ff6666");
        computerScore++;
    }
}

// capitalize first letter of string
function capitalizeFirstLetter(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
}

// play until either score reaches 5, then reset
function playGame() {
    if (humanScore < 5 && computerScore < 5) {
        console.clear();
        console.log(`--- Round ${gameRound} ---`);
        console.log(`You chose ${humanInput}`);
        console.log(`Computer chose ${getComputerInput()}`);
        compareInputs();
        updateScoreAndRound();
        console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
        checkScore();
    } else {
        resetGame();
        playGame();
    }
}

// check overall score for a winner
function checkScore() {
    if (humanScore === 5) {
        console.log(`%cGame over! You win!`, "font-size:18px; color:#66ff8f");
        console.log("Type fire, water, or ice to begin a new game.")
    } else if (computerScore === 5) {
        console.log(`%cGame over! Computer wins!`, "font-size:18px; color:#ff6666");
        console.log("Type fire, water, or ice to begin a new game.")
    } else {
        console.log("Type fire, water, or ice to start another round.");
    }
}

// resets game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameRound = 1;
}

// listens for "fire" to be entered into console
Object.defineProperty(window, "fire", {
  get: function () {
      humanInput = "fire";
      playGame();
  }
});

// listens for "water" to be entered into console
Object.defineProperty(window, "water", {
  get: function () {
      humanInput = "water";
      playGame();
  }
});

// listens for "ice" to be entered into console
Object.defineProperty(window, "ice", {
  get: function () {
      humanInput = "ice";
      playGame();
  }
});