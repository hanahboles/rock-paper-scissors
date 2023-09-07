function game() {
    let numRounds = 5
    let score = 0
    let computerScore = 0

    for (i = 0; i < numRounds; i++) {
        let playerSelection = getPlayerChoice()
        let computerSelection = getComputerChoice()
        let game = playRound(playerSelection, computerSelection)
        game.win ? score++ : computerScore++
        console.log('your score', score)
        console.log('computer score', computerScore)
        alert(game.message)
        // if game is a tie, need to add another round
        if (game.win === null) {
            numRounds++
        }
    }

    if (score > computerScore) {
        alert('You win the game!')
    } else {
        alert('You lose the game')
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {win: null, message: "Tie!"}
    }

    const win = playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'
    return {win, message: win ? `Yay! ${playerSelection} beats ${computerSelection}` : `You lose! ${computerSelection} beats ${playerSelection}`} 
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

function getPlayerChoice() {
    const playerSelection = prompt("Rock, paper, or scissors?").trim().toLowerCase()

    if (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper') {
        alert('Please type a valid choice')
        return getPlayerChoice()
    } else {
        return playerSelection
    }
}

game()
