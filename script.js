
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


