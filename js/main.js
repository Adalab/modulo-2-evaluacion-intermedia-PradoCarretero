"use strict";
/* VARIABLES */
const selected = document.querySelector(".js-selected");
const amount = document.querySelector(".js-amount");
const button = document.querySelector(".js-button");
const buttonRe = document.querySelector(".js-buttonRe");
const message = document.querySelector(".js-message");
const totaltext = document.querySelector(".js-totaltext");


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
    if (total>200){
        button.classList.add("hidden");
        buttonRe.classList.remove("hidden");
        message.innerHTML= '¡Has ganado!';
    }
    else if (total<0){
        message.innerHTML= '¡Has perdido!';
    }
}
function accumulated(randomNumber, selectedvalue, pocket) {
    const aggregate = amount.value;
    if (selectedvalue==randomNumber) {
        console.log(aggregate);
      const total = pocket + 2*aggregate;
      totaltext.innerHTML= `Saldo ${total} `;
     return total;
    }
    else {
        const total = pocket - aggregate;
        totaltext.innerHTML= `Saldo ${total} `;
        return total;
    }
}

function compare (randomNumber, selectedvalue) {
    
    console.log(randomNumber);
    console.log(selectedvalue);
    if (selectedvalue==randomNumber) {
        console.log("has ganado")
        message.innerHTML = 'Has ganado el doble de lo apostado';
    }
    else {
        console.log("has perdido");
        message.innerHTML = 'Has perdido lo apostado';
    }
}

function handleClickButton(event) {
    event.preventDefault();
    const randomNumber = getRandomNumber(6);
    const selectedvalue = selected.value;
    let pocket = 50;
    compare(randomNumber, selectedvalue);

    accumulated(randomNumber, selectedvalue, pocket);
    finish();
}
/* function handleClickButtonRe(event) {
    event.preventDefault();  
    hidden();
    resetcounter();
} */
button.addEventListener("click", handleClickButton);
/* buttonRe.addEventListener("click", handleClickButtonRe); */