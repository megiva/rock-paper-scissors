
var rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', () => {
    playRound('rock');
});
var paperBtn = document.getElementById("paper");
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
var scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice == 0) return 'rock'
    if (computerChoice == 1) return 'paper'
    if (computerChoice == 2) return 'scissors'
}

let humanScore = 0;
let computerScore = 0; 
let numRound = 1;

const content = document.getElementById("content");
const header = document.createElement("h2");
header.style.color = "blue";
content.appendChild(header);
const score = document.createElement("h6");
const words = document.createElement("h4")
content.appendChild(words);
content.appendChild(score);
words.style.color = "magenta";
score.style.color = "purple";
score.textContent = '';
header.textContent = '';

function playRound(humanChoice) {
    header.textContent = "ROUND " + numRound++;
 

    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice){
        let result = "It's a tie! " + computerChoice + " equals " + humanChoice;
        words.textContent = result;
    }

    else if (computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        let result = computerChoice + " beats " + humanChoice + ", You lose!";
        words.textContent = result;

    }
    else {
        humanScore++;
        let result = humanChoice + " beats " + computerChoice + ", You win!";
        words.textContent = result;
    } 
    score.textContent = "Human score: " + humanScore + " Computer score: " + computerScore;

    checkGameOver();
}

function checkGameOver() {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            words.textContent = "YOU WIN!";
        } else if (humanScore === computerScore) {
            words.textContent = "IT'S A DRAW!";
        } else {
            words.textContent = "YOU LOSE!";
        }

        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
        numRound = 1;
    }

}
        

function playGame() { 
    header.textContent = "The game is starting! First to five wins!";
}

playGame();




