const buttonContainer = document.querySelector(".buttonContainer");
const fireBtn = document.querySelector("#fireBtn");
const waterBtn = document.querySelector("#waterBtn");
const iceBtn = document.querySelector("#iceBtn");
const roundNumberDiv = document.querySelector(".roundNumber");
const roundWinnerDiv = document.querySelector(".roundWinner");
const computerInputDiv = document.querySelector(".computerInputDiv");
const humanScoreDiv = document.querySelector(".humanScore");
const computerScoreDiv = document.querySelector(".computerScore");
const gameWinnerDiv = document.querySelector(".gameWinner");
const resetButton = document.createElement("button");

let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

buttonContainer.addEventListener("click", event => {
    let target = event.target;

    switch (target.id) {
        case "fireBtn":
            humanInput = "fire";
            gameHandler();
            return;
        case "waterBtn":
            humanInput = "water";
            gameHandler();
            break;
        case "iceBtn":
            humanInput = "ice";
            gameHandler();
            break;
    }
});

function gameHandler() {
    roundNumberDiv.textContent = `--- Round ${gameRound} ---`;
    computerInputDiv.textContent = `Computer chose ${getComputerInput()}.`;
    compareInputs();
    updateScoreAndRound();
    checkScores();
}

function getComputerInput() {
    let choices = ["fire", "water", "ice"];
    let randomIndex = Math.floor(Math.random() * 3);
    return computerInput = choices[randomIndex];
}

function compareInputs() {
    if (humanInput === computerInput) {
        return winCondition = "tie";
    } else if (
        (humanInput === "fire" && computerInput === "ice") ||
        (humanInput === "water" && computerInput === "fire") ||
        (humanInput === "ice" && computerInput === "water")
    ) {
        return winCondition = "human";
    } else {
        return winCondition = "computer";
    }
}

function updateScoreAndRound() {
    switch (winCondition) {
        case "tie":
            roundWinnerDiv.textContent = "It's a tie!";
            break;
        case "human":
            humanScore++;
            humanInput = capitalizeFirstLetter(humanInput);
            roundWinnerDiv.textContent = `You win round ${gameRound}! ${humanInput} beats ${computerInput}.`;
            break;
        case "computer":
            computerScore++;
            computerInput = capitalizeFirstLetter(computerInput);
            roundWinnerDiv.textContent = `Computer wins round ${gameRound}! ${computerInput} beats ${humanInput}.`;
            break;
    }
    humanScoreDiv.textContent = `Your score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer's score: ${computerScore}`;
    gameRound++;
}

function checkScores() {
    if (humanScore === 5 || computerScore === 5) {
        renderResetButton();
    }
    if (humanScore === 5) {
        gameWinnerDiv.textContent = "Game over! You win!";
    } else if (computerScore === 5) {
        gameWinnerDiv.textContent = "Game over! Computer wins!";
    }
}

function checkScores() {
    switch (5) {
        case humanScore || computerScore:
            renderResetButton();
        case humanScore:
    }
}

function renderResetButton() {
    resetButton.textContent = "RESET";
    resetButton.classList.add("button");
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameRound = 1;
    roundNumberDiv.textContent = "";
    computerInputDiv.textContent = "";
    roundWinnerDiv.textContent = "";
    humanScoreDiv.textContent = "";
    computerScoreDiv.textContent = "";
    gameWinnerDiv.textContent = "";
    resetButton.remove();
}

function capitalizeFirstLetter(string) {
    return string = string.charAt(0).toUpperCase() + string.slice(1);
}