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

function clickHandler(e) {
    const computerSelection = computerPlay();
    const playerSelection = e.target.id;
    let result = playRound(playerSelection, computerSelection);
    updateStats(result);
    updateDOM(result);
}

function updateStats(result) {
    switch (result) {
        case 'loss':
            computerScore += 1;
            break;
        case 'win':
            playerScore += 1;
            break;
        default:
    }
}

function updateDOM(result) {
    if (result == 'tie') {
        //Add tie text, nothing else
        
        return;
    } else {
        //Add result text
        //Replace Computer text
        //Replace player text
    }
}

let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', clickHandler));