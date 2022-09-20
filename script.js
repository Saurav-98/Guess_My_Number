'use strict';

// Saving all the HTML Elements being Manipulated

const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

// Defining the Secret Number and Score

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 25;
let highScore = 0;

// setting a display Message function

const displayMessage(message){
  messageEl.textContent = message;
}

//  Making the Game reset Button Work

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  // messageEl.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  scoreEl.textContent = 25;
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
    // messageEl.textContent = '🚫 No Number entered';
    displayMessage('🚫 No Number entered');
  }

  // Check for Win Condition
  else if (guess === secretNumber) {
    // messageEl.textContent = 'Hurray! 🥳 Correct Number!';
    displayMessage('Hurray! 🥳 Correct Number!');
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = '#60dd47';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
  // Check for High and Low Condition
  else if (guess !== secretNumber) {
    if (score > 0) {
      // messageEl.textContent =
      //   guess > secretNumber ? '📈 Umm... Too High' : '📉 Hmmm... Too Low';
      displayMessage(guess > secretNumber ? '📈 Umm... Too High' : '📉 Hmmm... Too Low')
      score--;
      scoreEl.textContent = score;
    } else {
      // messageEl.textContent = '💀 Game Over!';
      displayMessage('💀 Game Over!');
      scoreEl.textContent = score;
    }
  }
});
