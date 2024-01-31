const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let playerScore = 0, computerScore = 0;

function playGame(playerChoice) {
    playerDisplay.textContent = "PLAYER:   ";
    computerDisplay.textContent = "COMPUTER:   ";
    resultDisplay.classList.remove("redText");
    resultDisplay.classList.remove("greenText");
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);
    playerDisplay.textContent += playerChoice;
    computerDisplay.textContent += computerChoice;
    let result = ""
    if (computerChoice === playerChoice) {
        result = "IT'S A TIE!";
        resultDisplay.textContent = result;
    }
    else {
        switch (playerChoice) {
            case "rock":
                (computerChoice === "scissors") ? result = "You WIN!" : result = "You LOSE";

                break;
            case "scissors":
                (computerChoice === "paper") ? result = "You WIN!" : result = "You LOSE";
                break;
            case "paper":
                (computerChoice === "rock") ? result = "You WIN!" : result = "You LOSE";
                break;
        }
    }

    resultDisplay.textContent = result;
    if (result == "You WIN!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
    } else if (result == "You LOSE") {
        computerScore++;
        resultDisplay.classList.add("redText");
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}