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
    updateDOM(result, playerSelection, computerSelection);
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

function updateDOM(result, playerSelection, computerSelection) {
    let container = '';
    let content = '';

    switch (result) {
        case 'win': 
            showWinText(playerSelection, computerSelection);
            break;
        case 'loss':
            showLossText(playerSelection, computerSelection);
            break;
        case 'tie':
            showTieText(playerSelection, computerSelection);
            return;
    }
    
}

function showWinText(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = '';

    let content = document.createElement('h2');
    content.textContent = `You won!` 
    container.appendChild(content);
    
    content = document.createElement('p');
    content.textContent = `${playerSelection} beats ${computerSelection}!`;
    container.appendChild(content);
}

function showLossText(playerSelection, computerSelection) {
            container = document.querySelector('#result');
            container.textContent = '';

            content = document.createElement('h2');
            content.textContent = `You lost!`;
            container.appendChild(content);

            content = document.createElement('p');
            content.textContent = `${playerSelection} is beaten by ${computerSelection}!`
            container.appendChild(content);
}

function showTieText(playerSelection, computerSelection) {
    container = document.querySelector('#result');
    container.textContent = '';        
    content = document.createElement('h2');
    content.textContent = 'It\'s a tie!';
    container.appendChild(content);

    content = document.createElement('p');
    content.textContent = `${playerSelection} ties with ${computerSelection}!`;
    container.appendChild(content);
}

let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', clickHandler));