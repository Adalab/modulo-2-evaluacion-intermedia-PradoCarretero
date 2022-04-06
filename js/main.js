"use strict";
//--------------------VARIABLES
const selectedNumber = document.querySelector(".js-selected");
const amountContainer = document.querySelector(".js-amount");
const buttonPlay = document.querySelector(".js-button");
const buttonRe = document.querySelector(".js-buttonRe");
const messageElement = document.querySelector(".js-message");
const totaltext = document.querySelector(".js-totaltext");
let pocket = 50;

//--------------------FUNCTIONS
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function resetcounter() {
  pocket = 50;

  const messageStart = "Vamos a jugar!";
  renderMessage(messageStart);
  totaltext.innerHTML = "Saldo: 50";
  selectedNumber.value = 1;
}
function hidden() {
  buttonPlay.classList.remove("hidden");
  buttonRe.classList.add("hidden");
}
function finish() {
  if (pocket <= 0 || pocket >= 200) {
    buttonPlay.classList.add("hidden");
    buttonRe.classList.remove("hidden");
  } else if (pocket >= 200) {
    const messageEndWin = "¡Has ganado!";
    renderMessage(messageEndWin);
  }
}

function accumulated(randomNumber, selectedvalue) {
  if (amountContainer.value > pocket) {
    const messageErr = `No puedes apostar más de lo que tienes `;
    renderMessage(messageErr);
  } else {
    const aggregate = amountContainer.value;
    if (selectedvalue == randomNumber) {
      pocket = 2 * parseInt(aggregate) + pocket;
    } else {
      pocket = pocket - parseInt(aggregate);
    }
    totaltext.innerHTML = `Saldo ${pocket} `;
  }
}

function compare(randomNumber, selectedvalue) {
  if (selectedvalue === randomNumber) {
    const messageWin = "Has ganado el doble de lo apostado :D";
    renderMessage(messageWin);
  } else {
    const messageLost = "Has perdido lo apostado :(";
    renderMessage(messageLost);
  }
}

function renderMessage(value) {
  messageElement.innerHTML = value;
}
//--------------------MAIN FUNCTION
function handleClickButtonPlay(event) {
  event.preventDefault();
  const randomNumber = getRandomNumber(6);
  const selectedvalue = parseInt(selectedNumber.value);
  compare(randomNumber, selectedvalue);
  accumulated(randomNumber, selectedvalue);
  finish();
}
function handleClickButtonRe(event) {
  event.preventDefault();
  hidden();
  resetcounter();
}

//--------------------EVENT LISTENER
buttonPlay.addEventListener("click", handleClickButtonPlay);
buttonRe.addEventListener("click", handleClickButtonRe);
