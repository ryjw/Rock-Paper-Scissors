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