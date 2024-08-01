
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


