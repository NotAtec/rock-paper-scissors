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
        return `That's a Tie! You both chose ${playerSelection}!`;
    } else {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection == 'paper') {
                    return 'You Lose! Rock gets beaten by Paper';
                } else {
                    return 'You Win! Rock beats Scissors';
                }
            case 'paper':
                if (computerSelection ==  'scissors') {
                    return 'You Lose! Paper gets beaten by Scissors';
                } else {
                    return 'You Win! Paper beats Rock';
                }
            case 'scissors':
                if (computerSelection == 'rock') {
                    return 'You Lose! Scissors gets beaten by Rock';
                } else {
                    return 'You Win! Scissors beats Paper';
                }
        }
    }
}