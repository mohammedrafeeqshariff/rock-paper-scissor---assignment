const rockImage = "assets/rock-hand.png"
const paperImage = "assets/paper-hand.png"
const scissorsImage = "assets/scissors-hand.png"

var rockButtonElem = document.getElementById("rock");
var paperButtonElem = document.getElementById("paper");
var scissorsButtonElem = document.getElementById("scissors");

var playerMoveElem = document.getElementById("player-move");
var computerMoveElem = document.getElementById("computer-move");

var userMove;
var computerMove;
var computerScore = 0;
var userScore = 0;

var scoreElem = document.getElementById("game-score");
var resultMessageElem = document.getElementById("game-result");
var wonMessageElem = document.getElementById("game-won");
var playAgainButton = document.getElementById("play-again");

rockButtonElem.addEventListener("click", () => {
    playerMoveElem.innerHTML = `<img src="${rockImage}" class="pictures" >`;
    userMove = "rock";
    generateComputerMove();
});

paperButtonElem.addEventListener("click", () => {
    playerMoveElem.innerHTML = `<img src="${paperImage}" class="pictures">`;
    userMove = "paper";
    generateComputerMove();
});

scissorsButtonElem.addEventListener("click", () => {
    playerMoveElem.innerHTML = `<img src="${scissorsImage}" class="pictures">`;
    userMove = "scissors";
    generateComputerMove();
});

function generateComputerMove() {
    if (userScore >= 5 || computerScore >= 5) {
        return; 
    }
    let number = Math.ceil((Math.random() * 3));
    if (number === 1) {
        computerMoveElem.innerHTML = `<img src="${paperImage}" class="pictures" >`;
        computerMove = "paper";
    } else if (number === 2) {
        computerMoveElem.innerHTML = `<img src="${scissorsImage}" class="pictures">`;
        computerMove = "scissors";
    } else {
        computerMoveElem.innerHTML = `<img src="${rockImage}"  class="pictures">`;
        computerMove = "rock";
    }
    calculateScores();
}

function calculateScores() {
    if (userMove === "rock" && computerMove === "paper" ||
        userMove === "paper" && computerMove === "scissors" ||
        userMove === "scissors" && computerMove === "rock") {
        computerScore++;
    } else if (userMove === "rock" && computerMove === "scissors" ||
        userMove === "paper" && computerMove === "rock" ||
        userMove === "scissors" && computerMove === "paper") {
        userScore++;
    }
    displayResults();
}

function displayResults() {
    scoreElem.textContent = `${computerScore}-${userScore}`;
    if (userScore >= 5 || computerScore >= 5) {
        wonMessageElem.style.visibility = 'visible';
        rockButtonElem.disabled = true;
        paperButtonElem.disabled = true;
        scissorsButtonElem.disabled = true;
        if (userScore > computerScore) {
            resultMessageElem.textContent = "You Won";
            resultMessageElem.style.color = "white";
        } else {
            resultMessageElem.textContent = "Computer Won";
            resultMessageElem.style.color = "white";
        }
    } else {
        resultMessageElem.textContent = "Continue playing...";
        resultMessageElem.style.color = "white";
    }
}

playAgainButton.addEventListener("click", () => {
    location.reload();
});
