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
        return 'tie';
    } else {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'paper') {
                    return 'loss';
                } else {
                    return 'win';
                }
            case 'paper':
                if (computerSelection ==  'scissors') {
                    return 'loss';
                } else {
                    return 'win';
                }
            case 'scissors':
                if (computerSelection == 'rock') {
                    return 'loss';
                } else {
                    return 'win';
                }
        }
    }
}

function setupRound(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.id;
    playRound(playerSelection, computerSelection);
}
//function game() {
//    let computerScore = 0;
//    let playerScore = 0;
//    for (let i=0; i < 5; i++) {
//        let computerChoice = computerPlay();
//        let playerChoice = prompt('What do you choose? (Rock, Paper, Scissors)');
//        let result = playRound(playerChoice, computerChoice);
//
//        switch (result) {
//            case 'loss':
//                console.log(`You Lose! ${playerChoice} gets beaten by ${computerChoice}!.`);
//                computerScore += 1
//                break;
//            case 'win':
//              console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
//                playerScore += 1
//                break;
//            default:
//                console.log(`It's a Tie! You and the computer chose ${playerChoice}.`);
//        }
//        console.log(`Current Score: You: ${playerScore}, Computer: ${computerScore}`);
//    }
//}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', setupRound));