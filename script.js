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
// Defining the Secret Number

const secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);
  numberEl.textContent = secretNumber;

  if (!guess) {
    messageEl.textContent = '🚫 No Number';
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎊🥳  Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      messageEl.textContent = '📈 Umm... Too High';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💀 Game Over!';
      scoreEl.textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      messageEl.textContent = '📉 Hmmm... Too Low';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💀 Game Over!';
      scoreEl.textContent = score;
    }
  }

  // .textContent = 40;
});
