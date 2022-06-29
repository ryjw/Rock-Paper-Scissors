function computerPlay () {
    const computerGuess = Math.floor(Math.random() * 3)
    switch (computerGuess) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Draw!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
         return 'You win! Scissors beat paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beat paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors'
    } else {
        return 'Please choose between rock, paper, or scissors'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, paper, or scissors?");
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        const message = `Round ${i + 1}/5: ${result}`;
        if (result.startsWith('You win')) {
            playerScore += 1;
        } else if (result.startsWith('You lose')) {
            computerScore += 1;
        }
        console.log(message);
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won with ${playerScore} overall victories!`)
    } else if (computerScore > playerScore) {
        console.log(`Unlucky! The computer won with ${computerScore} victories...`)
    } else {
        console.log(`The games resulted in a draw overall!`)
    }
}