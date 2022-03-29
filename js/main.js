"use strict";
//--------------------VARIABLES
const selected = document.querySelector(".js-selected");
const amount = document.querySelector(".js-amount");
const button = document.querySelector(".js-button");
const buttonRe = document.querySelector(".js-buttonRe");
const message = document.querySelector(".js-message");
const totaltext = document.querySelector(".js-totaltext");
let pocket = 50;

//--------------------FUNCTIONS
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function resetcounter(){
    pocket = 50;
}
function hidden (){
    button.classList.remove("hidden");
        buttonRe.classList.add("hidden");
}
function finish (){
    if (pocket>200){
        button.classList.add("hidden");
        buttonRe.classList.remove("hidden");
        message.innerHTML= '¡Has ganado!';
    }
    else if (pocket<0){
        message.innerHTML= '¡Has perdido!';
    }
}

function accumulated(randomNumber, selectedvalue, pocket) {
    const aggregate = amount.value;
    if (selectedvalue==randomNumber) {
     pocket += 2 * parseInt(aggregate);
        totaltext.innerHTML= `Saldo ${pocket} `;
        
        return pocket;
    }
    else {
        pocket -= parseInt(aggregate);
        totaltext.innerHTML= `Saldo ${pocket} `;
        return pocket; 
    }
}

function compare (randomNumber, selectedvalue) {
    if (selectedvalue==randomNumber) {
        message.innerHTML = 'Has ganado el doble de lo apostado';
    }
    else {
        message.innerHTML = 'Has perdido lo apostado';
    }
}
//--------------------MAIN FUNCTION 
function handleClickButton(event) {
    event.preventDefault();
    const randomNumber = getRandomNumber(6);
    const selectedvalue = selected.value;
    compare(randomNumber, selectedvalue);
    accumulated(randomNumber, selectedvalue, pocket);
   /*  finish(); */
}
/* function handleClickButtonRe(event) {
    event.preventDefault();  
    hidden();
    resetcounter();
} */

//--------------------EVENT LISTENER
button.addEventListener("click", handleClickButton);
/* buttonRe.addEventListener("click", handleClickButtonRe); */