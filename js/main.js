"use strict";

const numberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");

const numberValue = () => {
  let value = parseInt(numberElement.innerHTML);
  console.log(value);
};

function buttonHandler() {

    //get random number
    const randomNumer = Math.ceil(Math.random() * 100);
console.log(randomNumer);


  //count intents
  const numberIntentsElement = document.querySelector('.js-numberIntents');
  let value = parseInt(numberIntentsElement.innerHTML);
  value++; 
  numberIntentsElement.innerHTML = value;
};


buttonElement.addEventListener('click', buttonHandler);


