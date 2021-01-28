"use strict";

const numberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const hintElement = document.querySelector(".js-hint");

const randomNumer = Math.ceil(Math.random() * 100);
console.log(randomNumer);

function buttonHandler(ev) {
    ev.preventDefault()
    let valueInput = parseInt(numberElement.value);
    console.log(valueInput);
    
  //get random number and check with input value
  if (randomNumer === valueInput) {
    hintElement.innerHTML = "Has ganado campeona!!!";
  } else if (randomNumer < valueInput) {
    hintElement.innerHTML = "Demasiado alto.";
  } else if (randomNumer > valueInput) {
    hintElement.innerHTML = "Demasiado bajo.";
  }

  //count intents
  const numberIntentsElement = document.querySelector(".js-numberIntents");
  let value = parseInt(numberIntentsElement.innerHTML);
  value++;
  numberIntentsElement.innerHTML = value;
};

buttonElement.addEventListener("click", buttonHandler);
