"use strict";
/* VARIABLES */
const select = document.querySelector(".js-select");
const amount = document.querySelector(".js-amount");
const button = document.querySelector(".js-button");


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    


    if (select.value===randomNumber) {
        console.log("has ganado")
    }
    else {
        console.log("has perdido :");
    }

/* function handleClickButton(event) {
    event.preventDefault();    
    refreshface();
    changeColor();
}
 */
/* button.addEventListener("click", handleClickButton); */