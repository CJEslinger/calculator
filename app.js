let currentNum = '';
let pendingCalc = '';
let currentOperationLine = [];
let opperationNumPair = [];

//display
const currentCalcDisplay = document.querySelector('#current-calculation');
const pendingCalcDisplay = document.querySelector('#prev-calculation');

//number buttons
const nums = Array.from(document.querySelectorAll('.numbers'));
nums.forEach(num => {num.addEventListener('click', () => (addCurrentNumToDisplay(num)))});

//operator buttons
const operatorButtons = Array.from(document.querySelectorAll('.operators'));
operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => continueOpperationLine(operator));
});
//equals button, perens, and decimal
const equalsButton = document.querySelector('#evaluate');
equalsButton.addEventListener('click', evaluate)
const leftPeren = document.querySelector('#left-peren');
const rightPeren = document.querySelector('#right-peren');
const decimalButton = document.querySelector('#decimal');

//backend logic****************************************************

function addCurrentNumToDisplay(numButton){
    currentNum += (numButton.textContent);
    currentCalcDisplay.textContent = currentNum;
}

function continueOpperationLine(operator) {
    if (opperationNumPair.length == 2) {
        evaluate();
    }
    pendingCalc = currentNum;
    currentNum = '';
    pendingCalcDisplay.textContent = pendingCalc;
    currentCalcDisplay.textContent = currentNum;
    opperationNumPair = [pendingCalc, operator.textContent];
    currentOperationLine.push(opperationNumPair);
    console.log(currentOperationLine);
}

function evaluate() {
    if (opperationNumPair[1] == '+'){addFunction()}
    if (opperationNumPair[1] == '-'){subtractFunction()}
    if (opperationNumPair[1] == '*'){multiplyFunction()}
    if (opperationNumPair[1] == '/'){divideFunction()}
    if (opperationNumPair[1] == 'x^'){powerFunction()}
    opperationNumPair.pop()
    opperationNumPair.pop()
}

function addFunction() {
    currentNum = parseInt(currentNum);
    pendingCalc = parseInt(pendingCalc);
    currentNum = pendingCalc + currentNum;
    pendingCalc = '';
    currentCalcDisplay.textContent = `${currentNum}`;
    pendingCalcDisplay.textContent = '';
}

function subtractFunction() {
    currentNum = parseInt(currentNum);
    pendingCalc = parseInt(pendingCalc);
    currentNum = pendingCalc - currentNum;
    pendingCalc = '';
    currentCalcDisplay.textContent = `${currentNum}`;
    pendingCalcDisplay.textContent = '';
}

function multiplyFunction() {
    currentNum = parseInt(currentNum);
    pendingCalc = parseInt(pendingCalc);
    currentNum = pendingCalc * currentNum;
    pendingCalc = '';
    currentCalcDisplay.textContent = `${currentNum}`;
    pendingCalcDisplay.textContent = '';
}

function divideFunction() {
    currentNum = parseInt(currentNum);
    pendingCalc = parseInt(pendingCalc);
    currentNum = pendingCalc * currentNum;
    pendingCalc = '';
    currentCalcDisplay.textContent = `${currentNum}`;
    pendingCalcDisplay.textContent = '';
}

function powerFunction() {
    currentNum = parseInt(currentNum);
    pendingCalc = parseInt(pendingCalc);
    currentNum = Math.pow(pendingCalc, currentNum);
    pendingCalc = '';
    currentCalcDisplay.textContent = `${currentNum}`;
    pendingCalcDisplay.textContent = '';
}
//:)