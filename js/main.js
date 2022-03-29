"use strict";
/* VARIABLES */
const selected = document.querySelector(".js-selected");
const amount = document.querySelector(".js-amount");
const button = document.querySelector(".js-button");
const message = document.querySelector(".js-message");


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}





function compare () {
    const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    const selectedvalue = selected.value;
    console.log(selectedvalue);
    if (selectedvalue==randomNumber) {
        console.log("has ganado")
        message.innerHTML = 'Has ganado el doble de lo apostado';
    }
    else {
        console.log("has perdido :");
        message.innerHTML = 'Has perdido lo apostado';
    }
}

function handleClickButton(event) {
    event.preventDefault();    
    compare();
}

button.addEventListener("click", handleClickButton);