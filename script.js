'use strict ';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there's no input
  if (!guess) {
    displayMessage('No number!!!');
    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You guessed the right number!`;
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
    //When input is to high
  } else if (guess != secretNumber) {
    if (score > 1) {
      const message = guess > secretNumber ? `To big!!!` : `To small`;
      displayMessage(message);

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Guess the number!!!');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '';
  document.querySelector('.number').style.width = '15rem';
});
