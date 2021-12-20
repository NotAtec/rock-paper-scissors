let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('.weapon');
buttons.forEach((button) => button.addEventListener('click', clickHandler));
const modalButton = document.querySelector('#modal-button');
modalButton.addEventListener('click', winHandler);

function clickHandler(e) {
    const computerSelection = computerPlay();
    const playerSelection = this.id;
    let result = playRound(playerSelection, computerSelection);
    updateStats(result);
    updateDOM(result, playerSelection, computerSelection);
    showUpdatedStats(playerSelection, computerSelection);
    checkWinner();
}

function winHandler(e) {
    playerScore = 0;
    computerScore = 0;

    resetTopText();
    showUpdatedStats('questionmark', 'questionmark')
    const modal = document.querySelector('#modal-overlay');
    modal.style.display = 'none';
}

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
    switch (result) {
        case 'win': 
            showWinText(playerSelection, computerSelection);
            break;
        case 'loss':
            showLossText(playerSelection, computerSelection);
            break;
        case 'tie':
            showTieText(playerSelection, computerSelection);
            break;
    }
    
}

function showWinText(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = '';

    let content = document.createElement('h1');
    content.textContent = `You won!` 
    container.appendChild(content);
    
    content = document.createElement('p');
    content.textContent = `${playerSelection} beats ${computerSelection}!`;
    container.appendChild(content);
}

function showLossText(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = '';

    let content = document.createElement('h1');
    content.textContent = `You lost!`;
    container.appendChild(content);

    content = document.createElement('p');
    content.textContent = `${playerSelection} is beaten by ${computerSelection}!`
    container.appendChild(content);
}

function showTieText(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = '';   

    let content = document.createElement('h1');
    content.textContent = 'It\'s a tie!';
    container.appendChild(content);

    content = document.createElement('p');
    content.textContent = `${playerSelection} ties with ${computerSelection}!`;
    container.appendChild(content);
}

function showUpdatedStats(playerSelection, computerSelection) {
    let container = document.querySelector('#player');
    container.textContent = '';
    
    let content = document.createElement('div');
    content.classList.add('img-box');
    content.innerHTML = `<img src="img/${playerSelection}.png" alt="A ${playerSelection}">`
    container.appendChild(content);

    content = document.createElement('p');
    content.textContent = `Player: ${playerScore}`
    container.appendChild(content);

    container = document.querySelector('#computer');
    container.textContent = '';

    content = document.createElement('div');
    content.classList.add('img-box');
    content.innerHTML = `<img src="img/${computerSelection}.png" alt="A ${computerSelection}">`
    container.appendChild(content);

    content = document.createElement('p');
    content.textContent = `Computer: ${computerScore}`;
    container.appendChild(content);
}

function resetTopText() {
    const div = document.querySelector('#result');
    div.textContent = '';

    let content = document.createElement('h2');
    content.textContent = 'Choose your fighter';
    div.appendChild(content);

    content = document.createElement('p');
    content.textContent = 'First to 5 points wins';
    div.appendChild(content);
}

function checkWinner() {
    if (playerScore == 5) {
        const text = document.querySelector('#modal-title');
        text.innerHTML = "<h2>You win!</h2>"
        const modal = document.querySelector('#modal-overlay');
        modal.style.display = "flex";
    } else if (computerScore == 5) {
        const text = document.querySelector('#modal-title');
        text.innerHTML = "<h2>You lose.. :(</h2>"
        const modal = document.querySelector('#modal-overlay');
        modal.style.display = "flex";
    }
}