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
    if (toLowerCase(playerSelection) === toLowerCase(computerSelection)) {
        return 'Draw!'
    }
    else if (toLowerCase(playerSelection) === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats scissors.';
    } else if (toLowerCase(playerSelection) === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats rock.';
    } else if (toLowerCase(playerSelection) === 'scissors' && computerSelection === 'Paper') {
         return 'You win! Scissors beat paper.';
    } else if (toLowerCase(playerSelection) === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats rock.';
    } else if (toLowerCase(playerSelection) === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat paper.';
    } else if (toLowerCase(playerSelection) === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats scissors'
    } else {
        return 'Please choose between rock, paper, or scissors'
    }
}