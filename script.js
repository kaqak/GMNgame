'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No guess';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Success!!!';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To big';
      console.log(score);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (score < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To small';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});
