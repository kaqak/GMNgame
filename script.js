'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //When there's no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No guess';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Success!!!';
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;

    document.body.style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To big';
      console.log(score);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    //When guess is to low
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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  
});
