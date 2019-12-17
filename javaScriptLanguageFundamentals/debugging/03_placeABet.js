// Place A Bet
// The function placeABet below accepts a guess from the user between 1 and 25.
// The function should determine a winning number and return a message to the
// user indicating whether he/she entered a winning guess. When you try to
// invoke placeABet, an error is raised. Fix the bug and explain what caused it.

// function placeABet(guess) {
//   (function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   }); // does not need parens and semicolon around this secondary function ?
//       // with parens around it, `generateRandomInt` is a function expression
//       // and the name of it is only available within the function
//
//   var winningNumber = generateRandomInt();
//
//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }
//
//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }
//
// var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// alert(placeABet(userGuess));

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  var winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));
