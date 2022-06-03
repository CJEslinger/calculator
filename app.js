let currentNum = ''

//display
const currentCalcDisplay = document.querySelector('#current-calculation');
currentCalcDisplay.textContent = currentNum;

//number buttons
const nums = Array.from(document.querySelectorAll('.numbers'));

//operator buttons
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const powerButton = document.querySelector('#power');

//equals button, perens, and decimal
const equalsButton = document.querySelector('#evaluate');
const leftPeren = document.querySelector('#left-peren');
const rightPeren = document.querySelector('#right-peren');
const decimalButton = document.querySelector('#decimal');

nums.forEach(num => {
    num.addEventListener('click', () => {
        currentNum += (num.textContent);
        currentCalcDisplay.textContent = currentNum;
    })
});

