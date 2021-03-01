'use strict ';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there's no input
  if (!guess) {
    document.querySelector('.message').textContent = `No number!`;
    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You guessed the right number!`;
    score++;
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //When input is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `To big!!!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game!!!`;
      document.querySelector('.score').textContent = 0;
    }
    //When input is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `To small!!!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game!!!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '';
  document.querySelector('.message').textContent = `Guess the number!!!`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
});
