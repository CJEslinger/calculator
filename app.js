let currentNum = '';
let pendingCalc = '';
let currentOperationLine = [];
let opperationNumPair = [];

//display
const currentCalcDisplay = document.querySelector('#current-calculation');
const prevCalcDisplay = document.querySelector('#prev-calculation');

//number buttons
const nums = Array.from(document.querySelectorAll('.numbers'));
nums.forEach(num => {num.addEventListener('click', () => (addCurrentNumToDisplay(num)))});

/*operator buttons
const addButton = document.querySelector('#add');
      addButton.addEventListener('click', () => {continueOpperationLine(addButton);})
const subtractButton = document.querySelector('#subtract');
      subtractButton.addEventListener('click', () => {continueOpperationLine(subtractButton);})
const multiplyButton = document.querySelector('#multiply');
      multiplyButton.addEventListener('click', () => {continueOpperationLine(multiplyButton);})
const divideButton = document.querySelector('#divide');
      divideButton.addEventListener('click', () => {continueOpperationLine(divideButton);})
const powerButton = document.querySelector('#power');
      powerButton.addEventListener('click', () => {continueOpperationLine(powerButton);})
*/

const operatorButtons = Array.from(document.querySelectorAll('.operators'));
operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => continueOpperationLine(operator))
});
      //equals button, perens, and decimal
const equalsButton = document.querySelector('#evaluate');
const leftPeren = document.querySelector('#left-peren');
const rightPeren = document.querySelector('#right-peren');
const decimalButton = document.querySelector('#decimal');

function addCurrentNumToDisplay(numButton){
    currentNum += (numButton.textContent);
    currentCalcDisplay.textContent = currentNum;
}

function continueOpperationLine(operator) {
    pendingCalc = currentNum;
    currentNum = '';
    prevCalcDisplay.textContent = pendingCalc;
    currentCalcDisplay.textContent = currentNum;
    opperationNumPair = [pendingCalc, operator.textContent];
    currentOperationLine.push(opperationNumPair);
    console.log(currentOperationLine);
}

function addFunction() {

}

function subtractFunction() {

}

function multiplyFunction() {

}

function divideFunction() {

}

function powerFunction() {

}