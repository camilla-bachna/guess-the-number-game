"use strict";

const numberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const hintElement = document.querySelector(".js-hint");
const numberIntentsElement = document.querySelector(".js-numberIntents");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function buttonHandler(ev) {
  ev.preventDefault();

  checkRandomNumber();
  countIntents();
}

function checkRandomNumber() {
  //get random number and check with input value
  let valueInput = parseInt(numberElement.value);
  console.log(valueInput);

  if (valueInput < 1 || valueInput > 100){
    hintElement.innerHTML = "El número debe estar entre 1 y 100.";
  }else if(randomNumber === valueInput) {
    hintElement.innerHTML = "Has ganado campeona!!!";
  } else if (randomNumber < valueInput) {
    hintElement.innerHTML = "Demasiado alto.";
  } else if (randomNumber > valueInput) {
    hintElement.innerHTML = "Demasiado bajo.";
  }
}

function countIntents() {
  //count intents
  let value = parseInt(numberIntentsElement.innerHTML);
  value++;
  numberIntentsElement.innerHTML = value;
}

buttonElement.addEventListener("click", buttonHandler);
