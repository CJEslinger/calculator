let currentNum = ''

//display
const currentCalcDisplay = document.querySelector('#current-calculation');
currentCalcDisplay.textContent = currentNum;

//number buttons
const nums = Array.from(document.querySelectorAll('.numbers'));
nums.forEach(num => {num.addEventListener('click', () => (addCurrentNumToDisplay(num)))});

//operator buttons
const addButton = document.querySelector('#add');
      addButton.addEventListener('click', () => {addFunction();})
const subtractButton = document.querySelector('#subtract');
      subtractButton.addEventListener('click', () => {subtractFunction();})
const multiplyButton = document.querySelector('#multiply');
      multiplyButton.addEventListener('click', () => {multiplyFunction();})
const divideButton = document.querySelector('#divide');
      divideButton.addEventListener('click', () => {divideFunction();})
const powerButton = document.querySelector('#power');
      powerButton.addEventListener('click', () => {powerFunction();})

//equals button, perens, and decimal
const equalsButton = document.querySelector('#evaluate');
const leftPeren = document.querySelector('#left-peren');
const rightPeren = document.querySelector('#right-peren');
const decimalButton = document.querySelector('#decimal');

addButton.addEventListener('click', () => {addFunction();})

function addCurrentNumToDisplay(numButton){
    currentNum += (numButton.textContent);
    currentCalcDisplay.textContent = currentNum;
}

function addFunction() {

}

function subtractFunction() {

}

function multiplyButton() {

}

function divideButton() {

}

function powerButton() {
    
}