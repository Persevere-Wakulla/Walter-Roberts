const scissorsElement = document.getElementById('scissors')
const paperElement = document.getElementById('paper')
const rockElement = document.getElementById('rock')
const lizardElement = document.getElementById('lizard')
const spockElement = document.getElementById('spock')
const playerArenaElement = document.getElementById('playArea')
const playerSideElement = document.getElementById('you')
const playerChoiceElement = document.getElementById('yPick')
const winOrLoseElement = document.getElementById('winLose')
const computerSideElement = document.getElementById('computer')
const computerChoiceElement = document.getElementById('cPick')
const playerDiv = document.getElementById('player')
const computerDiv = document.getElementById('cpu')
const buttonElement = document.getElementById('again')

scissorsElement.addEventListener('click', scissorsEvent)
paperElement.addEventListener('click', paperEvent)
rockElement.addEventListener('click', rockEvent)
lizardElement.addEventListener('click', lizardEvent)
spockElement.addEventListener('click', spockEvent)
buttonElement.addEventListener('click', again)

const selection = {
    scissors: './images/icon-scissors.svg',
    paper: './images/icon-paper.svg',
    rock: './images/icon-rock.svg',
    lizard: './images/icon-lizard.svg',
    spock: './images/icon-spock.svg',
}

const optionArray = ['scissors','paper','rock','lizard','spock',]

function randomIndex(arr) {
const total = arr.length
const random = Math.floor(Math.random() * total)
return arr[random]
}

let randomPick = randomIndex(optionArray)

function cleanArena() {
    rockElement.style.display = 'none'
    paperElement.style.display = 'none'
    scissorsElement.style.display = 'none'
    lizardElement.style.display = 'none'
    spockElement.style.display = 'none'
    playerArenaElement.style.display = 'grid'
    playerSideElement.style.display = '1'
    playerSideElement.style.display = '1'
    playerDiv.style.display = '2'
    playerDiv.style.display = '1'
    winOrLoseElement.style.display = '2'
    winOrLoseElement.style.display = '2'
    computerSideElement.style.display = '1'
    computerSideElement.style.display = '3'
    computerDiv.style.display = '2'
    computerDiv.style.display = '3'
    buttonElement.style.display = '3'
    buttonElement.style.display = '2'
}

let playerScore = 1;
    const playerScoreElement = document.getElementById('yScore')

let computerScore = 1;
    const computerScoreElement = document.getElementById('cScore')

function scissorsEvent() {
    cleanArena();
    let computerChoice = randomPick;
    let  playerChoice = 'scissors';
    playerChoiceElement.src = selection['scissors'];
    computerChoiceElement.src = selection[computerChoice];
    playerDiv.classList.add('scissors');
    computerDiv.classList.add(`${computerChoice}`);
        determineWinner(playerChoice, computerChoice)
}

function paperEvent() {
    cleanArena();
            let computerChoice = randomPick;
            let playerChoice = 'paper';
            playerChoiceElement.src = selection['paper'];
            computerChoiceElement.src = selection[computerChoice];
            playerDiv.classList.add('paper');
            computerDiv.classList.add(`${computerChoice}`);
                determineWinner(playerChoice, computerChoice);
}

function rockEvent() {
    cleanArena();
            let computerChoice = randomPick;
            let playerChoice = 'rock';
            playerChoiceElement.src = selection['rock'];
            computerChoiceElement.src = selection[computerChoice];
            playerDiv.classList.add('rock');
            computerDiv.classList.add(`${computerChoice}`);
                determineWinner(playerChoice, computerChoice);  
}

function lizardEvent() {
    cleanArena();
            let computerChoice = randomPick;
            let playerChoice = 'lizard';
            playerChoiceElement.src = selection['lizard'];
            computerChoiceElement.src = selection[computerChoice];
            playerDiv.classList.add('lizard');
            computerDiv.classList.add(`${computerChoice}`);
                determineWinner(playerChoice, computerChoice);         
}

function spockEvent() {
    cleanArena()
            let computerChoice = randomPick;
            let playerChoice = 'spock';
            playerChoiceElement.src = selection['spock'];
            computerChoiceElement.src = selection[computerChoice];
            playerDiv.classList.add('spock');
            computerDiv.classList.add(`${computerChoice}`);
                determineWinner(playerChoice, computerChoice)
}

                // These functions are all playerChoice winners

function determineWinner(playerChoice, computerChoice){
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'rock' && computerChoice === 'lizard') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'lizard' && computerChoice === 'spock') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'spock' && computerChoice === 'scissors') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'scissors' && computerChoice === 'lizard') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }

    if (playerChoice === 'lizard' && computerChoice === 'paper') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'paper' && computerChoice === 'spock') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'smock' && computerChoice === 'rock') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
    }
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        winOrLoseElement.textContent = 'U WIN';
        playerScoreElement.textContent = playerScore++
            return 'U WIN';
}

                    // These section is for Ties

    if (playerChoice === computerChoice) {
        winOrLoseElement.textContent = 'No Score';
            return 'TIED';
    }
                // This section is for when you LOSE
     else {
        winOrLoseElement.textContent = 'YOU LOSE'
        computerScoreElement.textContent = computerScore++
            return 'YOU LOSE'
    }
}

function again(){
    rockElement.style.display = ''
    paperElement.style.display = ''
    scissorsElement.style.display = ''
    lizardElement.style.display = ''
    spockElement.style.display = ''
    computerDiv.classList.remove(...['scissors', 'paper', 'rock', 'lizard', 'spock']);
    playerDiv.classList.remove(...['scissors', 'paper', 'rock', 'lizard', 'spock']);
    playerArenaElement.style.display = 'none'
    randomPick = randomIndex(optionArray)
}










