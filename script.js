'use strict';
//console.log(document.querySelector('.message').textContent);
// textContent takes the text part of the element
// remember when we have multiple dot operators they are executed from left to right
// DOM - Document Object Model. Allows us to connect to HTML document and perform operations with it. eg chsnge text, HTML attributes, even CSS styles
// The DOM is not part of Javascript. It's part of what are called Web APIs; The web APIs are accessible and can interact with JS

// document.querySelector('.message').textContent = '🎉Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // to get value from an input field; we use the .value method

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value); // short cut to move a whole line to the next "ALT + DOWN Arrow"

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🎃 No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
