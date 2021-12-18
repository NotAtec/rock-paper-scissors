function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    switch (i) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 2;
    } else {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'paper') {
                    return 0;
                } else {
                    return 1;
                }
            case 'paper':
                if (computerSelection ==  'scissors') {
                    return 0;
                } else {
                    return 1;
                }
            case 'scissors':
                if (computerSelection == 'rock') {
                    return 0;
                } else {
                    return 1;
                }
        }
    }
}


function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; i < 5; i++) {
        let computerChoice = computerPlay();
        let playerChoice = prompt('What do you choose? (Rock, Paper, Scissors)');
        let result = playRound(playerChoice, computerChoice);

        switch (result) {
            case 0:
                console.log(`You Lose! ${playerChoice} gets beaten by ${computerChoice}!.`);
                computerScore += 1
                break;
            case 1:
                console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
                playerScore += 1
                break;
            default:
                console.log(`It's a Tie! You and the computer chose ${playerChoice}.`);
        }
        console.log(`Current Score: You: ${playerScore}, Computer: ${computerScore}`);
    }
}