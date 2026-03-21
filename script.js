// ui

const choicesContainer = document.querySelector(".choicesContainer");
const gameButton = document.querySelectorAll(".gameButton");
const fireButton = document.querySelector("#fireButton");
const waterButton = document.querySelector("#waterButton");
const iceButton = document.querySelector("#iceButton");
const buttonSubtext = document.querySelectorAll(".buttonSubtext");
const humanFireSubtext = document.querySelector("#humanFireSubtext");
const humanWaterSubtext = document.querySelector("#humanWaterSubtext");
const humanIceSubtext = document.querySelector("#humanIceSubtext");
const computerFireSubtext = document.querySelector("#computerFireSubtext");
const computerWaterSubtext = document.querySelector("#computerWaterSubtext");
const computerIceSubtext = document.querySelector("#computerIceSubtext");
const roundText = document.querySelector(".roundText");
const resetButton = document.querySelector(".resetButton");
const winnerText = document.querySelector(".winnerText");
const humanScoreText = document.querySelector("#humanScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

fireButton.addEventListener("mouseenter", gameButtonMouseEnter);
waterButton.addEventListener("mouseenter", gameButtonMouseEnter);
iceButton.addEventListener("mouseenter", gameButtonMouseEnter);
fireButton.addEventListener("mouseleave", gameButtonMouseLeave);
waterButton.addEventListener("mouseleave", gameButtonMouseLeave);
iceButton.addEventListener("mouseleave", gameButtonMouseLeave);
choicesContainer.addEventListener("click", gameButtonClick);
resetButton.addEventListener("click", resetVariables);

function gameButtonMouseEnter(event) {
    let target = event.target;

    switch (target.id) {
        case "fireButton":
            fireButton.src = "./images/fireAnim.gif";
            break;
        case "waterButton":
            waterButton.src = "./images/waterAnim.gif";
            break;
        case "iceButton":
            iceButton.src = "./images/iceAnim.gif";
            break;
    }
}

function gameButtonMouseLeave(event) {
    let target = event.target;

    switch (target.id) {
        case "fireButton":
            fireButton.src = "./images/fire.png";
            break;
        case "waterButton":
            waterButton.src = "./images/water.png";
            break;
        case "iceButton":
            iceButton.src = "./images/ice.png";
            break;
    }
}

function gameButtonClick(event) {
    let target = event.target;

    switch (target.id) {
        case "fireButton":
            humanInput = "fire";
            gameHandler();
            break;
        case "waterButton":
            humanInput = "water";
            gameHandler();
            break;
        case "iceButton":
            humanInput = "ice";
            gameHandler();
            break;
    }
}

function displayInputs() {
    for (const para of buttonSubtext) {
        para.textContent = "";
    }

    switch (humanInput) {
        case "fire":
            humanFireSubtext.textContent = "you";
            break;
        case "water":
            humanWaterSubtext.textContent = "you";
            break;
        case "ice":
            humanIceSubtext.textContent = "you";
            break;
    }
    switch (computerInput) {
        case "fire":
            computerFireSubtext.textContent = "cpu";
            break;
        case "water":
            computerWaterSubtext.textContent = "cpu";
            break;
        case "ice":
            computerIceSubtext.textContent = "cpu";
            break;
    }
}

function displayScoreAndRound(winCondition) {
    roundText.textContent = `Round ${gameRound}`;
    winnerText.classList.remove("winColor", "loseColor");

    switch (winCondition) {
        case "tie":
            winnerText.textContent = "It's a tie!";
            break;
        case "human":
            winnerText.classList.add("winColor");
            humanScoreText.textContent = `Your score: ${humanScore}`;
            winnerText.textContent = "You win!";
            break;
        case "computer":
            winnerText.classList.add("loseColor");
            computerScoreText.textContent = `CPU score: ${computerScore}`;
            winnerText.textContent = "CPU wins...";
            break;
    }
}

function displayWinner(winner) {
    switch (winner) {
        case "human":
            winnerText.classList.add("winColor");
            winnerText.textContent = "Game over, you win!";
            break;
        case "computer":
            winnerText.classList.add("loseColor");
            winnerText.textContent = "Game over, CPU wins!";
            break;
    }
}

function displayResetButton() {
    resetButton.classList.remove("hidden");
}

function disableGameButtons() {
    for (const btn of gameButton) {
        btn.setAttribute("disabled", "");
    }

    fireButton.removeEventListener("mouseenter", gameButtonMouseEnter);
    waterButton.removeEventListener("mouseenter", gameButtonMouseEnter);
    iceButton.removeEventListener("mouseenter", gameButtonMouseEnter);

    // prevent imgs getting stuck on hover anim
    fireButton.src = "./images/fire.png";
    waterButton.src = "./images/water.png";
    iceButton.src = "./images/ice.png";

    fireButton.classList.remove("hoverActive");
    waterButton.classList.remove("hoverActive");
    iceButton.classList.remove("hoverActive");
}

function resetUI() {
    winnerText.textContent = "";
    roundText.textContent = "Round 1";
    
    for (const btn of gameButton) {
        btn.removeAttribute("disabled");
    }

    fireButton.addEventListener("mouseenter", gameButtonMouseEnter);
    waterButton.addEventListener("mouseenter", gameButtonMouseEnter);
    iceButton.addEventListener("mouseenter", gameButtonMouseEnter);
    fireButton.classList.add("hoverActive");
    waterButton.classList.add("hoverActive");
    iceButton.classList.add("hoverActive");
    
    for (const para of buttonSubtext) {
        para.textContent = "";
    }
    
    resetButton.classList.add("hidden");
    
    humanScoreText.textContent = "Your score: 0";
    computerScoreText.textContent = "CPU score: 0";
}

// game logic

let humanScore = 0;
let computerScore = 0;
let gameRound = 1;

function gameHandler() {
    getComputerInput();
    displayInputs();
    compareInputs();
    isGameOver();
}

function getComputerInput() {
    let choices = ["fire", "water", "ice"];
    let randomIndex = Math.floor(Math.random() * 3);
    return computerInput = choices[randomIndex];
}

function compareInputs() {
    if (humanInput === computerInput) {
        updateScoreAndRound("tie");
    } else if (
        (humanInput === "fire" && computerInput === "ice") ||
        (humanInput === "water" && computerInput === "fire") ||
        (humanInput === "ice" && computerInput === "water")
    ) {
        updateScoreAndRound("human");
    } else {
        updateScoreAndRound("computer");
    }
}

function updateScoreAndRound(winCondition) {
    gameRound++;
    
    switch (winCondition) {
        case "tie":
            displayScoreAndRound("tie");
            break;
        case "human":
            humanScore++;
            displayScoreAndRound("human");
            break;
        case "computer":
            computerScore++;
            displayScoreAndRound("computer");
            break;
    }
}

function isGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        displayResetButton();
        disableGameButtons();
    }
    if (humanScore === 5) {
        displayWinner("human");
    } else if (computerScore === 5) {
        displayWinner("computer");
    }
}

function resetVariables() {
    humanScore = 0;
    computerScore = 0;
    gameRound = 1;
    resetUI();
}