// declare initial values
let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

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
        console.log("Invalid input. Please enter fire, water, or ice");
    } else if (winCondition === "tie") {
        console.log("It's a tie!");
    } else if (winCondition === "human") {
        humanInput = capitalizeFirstLetter(humanInput);
        console.log(`Human wins! ${humanInput} beats ${computerInput}.`);
        humanScore++;
        gameRound++;
    } else {
        computerInput = capitalizeFirstLetter(computerInput);
        console.log(`Computer wins! ${computerInput} beats ${humanInput}.`);
        computerScore++;
        gameRound++;
    }
}

// capitalize first letter of string
function capitalizeFirstLetter(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
}