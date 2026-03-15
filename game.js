// declare initial values
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

// display header and instructions
console.log("%cFire, Water, Ice", "font-size:26px");
console.log('Welcome! The first player to 5 points wins. Type "play" to start the game.')

// prompt human input and return lowercase
function getHumanInput() {
    return humanInput = prompt("Choose fire, water, or ice:").toLowerCase();
}

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
    // invalid input condition
    if ((humanInput !== "fire")
    && (humanInput !== "water")
    && (humanInput !== "ice")) {
        return winCondition = "invalid";
    }
    // tie condition
    else if (humanInput === computerInput) {
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
    if (winCondition === "invalid") {
        console.log("%cInvalid input. Please enter fire, water, or ice", "font-size:12px");
    } else if (winCondition === "tie") {
        console.log("%cIt's a tie!", "font-size: 12px");
    } else if (winCondition === "human") {
        humanInput = capitalizeFirstLetter(humanInput);
        console.log(`%cHuman wins! ${humanInput} beats ${computerInput}.`, "font-size: 12px; color:#66ff8f");
        humanScore++;
        gameRound++;
    } else {
        computerInput = capitalizeFirstLetter(computerInput);
        console.log(`%cComputer wins! ${computerInput} beats ${humanInput}.`, "font-size: 12px; color:#ff6666");
        computerScore++;
        gameRound++;
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
        console.log(`You chose ${getHumanInput()}`);
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
        console.log("Type play to begin a new game.")
    } else if (computerScore === 5) {
        console.log(`%cGame over! Computer wins!`, "font-size:18px; color:#ff6666");
        console.log("Type play to begin a new game.")
    } else {
        console.log("Type play to start another round.");
    }
}

// resets game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameRound = 1;
}

// listens for "play" to be entered into console
Object.defineProperty(window, "play", {
  get: function () {
      playGame();
  }
});