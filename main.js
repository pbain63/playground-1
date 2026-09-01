function evaluateGuess(magicNumber, guess) {
  if (guess > magicNumber) {
    return "Your guess is too big";
  } else if (guess < magicNumber) {
    return "Yor guess is too small";
  } else if (guess == magicNumber) {
    return "You did it";
  } else {
    return "INVALID INPUT";
  }
}

function guessingGame() {
  const magicNumber = 22;
  const guess = prompt("Guess a number between 1 and 100!");
  const message = evaluateGuess(magicNumber, guess);
  alert(message);
}

guessingGame();
