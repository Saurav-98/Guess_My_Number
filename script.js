'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎊🥳  Correct Number! ';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 40;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);

  if (!guess) {
    numberEl.textContent = '🚫 No Number';
  }
});
