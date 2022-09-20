'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎊🥳  Correct Number! ';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 40;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Saving all the HTML Elements being Manipulated

const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

// Defining the Secret Number and Score

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//  Making the Game reset Button Work

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = '20';
  guessEl.value = '';
  numberEl.textContent = '?';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Checking the Guess Value

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);

  // Check for Invalid / missing input
  if (!guess) {
    messageEl.textContent = '🚫 No Number';
  }

  // Check for Win Condition
  else if (guess === secretNumber) {
    messageEl.textContent = '🎊🥳  Correct Number!';
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = '#60dd47';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
  // Check for High Condition
  else if (guess > secretNumber) {
    if (score > 0) {
      messageEl.textContent = '📈 Umm... Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💀 Game Over!';
      scoreEl.textContent = score;
    }
  }
  // Check for High Condition
  else if (guess < secretNumber) {
    if (score > 0) {
      messageEl.textContent = '📉 Hmmm... Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💀 Game Over!';
      scoreEl.textContent = score;
    }
  }
});
