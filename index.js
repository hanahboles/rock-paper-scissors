function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    }

    const win = playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'
    return win ? `Yay! ${playerSelection} beats ${computerSelection}` : `You lose! ${computerSelection} beats ${playerSelection}` 
}

function getComputerChoice() {
    const randomVal = Math.floor(Math.random() * 3 + 1)
    switch (randomVal) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        default: 
            console.log('something went wrong')
    }
}

const playerSelection = prompt("Rock, paper, or scissors?").trim().toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));