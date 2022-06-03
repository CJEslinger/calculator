let currentNum = ''

//display
const currentCalcDisplay = document.querySelector('#current-calculation');
currentCalcDisplay.textContent = currentNum;

//number buttons
const nums = Array.from(document.querySelectorAll('.numbers'));

//decimal button
const decimalButton = document.querySelector('#decimal');

//operator buttons
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const powerButton = document.querySelector('#power');

//operator button event funtions

nums.forEach(num => {
    num.addEventListener('click', () => {
        currentNum += (num.textContent);
        currentCalcDisplay.textContent = currentNum;
    })
});

