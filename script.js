function add(a, b) {
    return a + b;

};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


function operate(a, b, opr) {
    a = Number(a);
    b = Number(b);

    if (opr == '+') {
        return add(a, b);
    } else if (opr == '-') {
        return subtract(a, b);
    } else if (opr == '*') {
        return multiply(a, b);
    } else if (opr == '/') {
        if (b == 0) {
            return "UPS 😅"
        } else {
            return divide(a, b);
        }
    }
}

let numbers = []
let operator = '';
let result = '';
let currentNumber = '';
let displayValue = 0;


const smallButtons = document.querySelectorAll(".num-btn");
const funcButtons = document.querySelectorAll('.func-btn');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const display = document.querySelector(".display-containter");

display.textContent = displayValue;

smallButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == '.' && currentNumber.includes('.')) {

        } else if (button.id == '.' && currentNumber == '') {
            (displayValue == 0) ? displayValue = '' : displayValue;
            currentNumber += "0."
            displayValue = currentNumber;
            display.textContent = displayValue;
        } else {
            (displayValue == 0) ? displayValue = '' : displayValue;
            currentNumber += button.id;
            displayValue = currentNumber;
            display.textContent = displayValue;
        }

    })
});

funcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == '=') {
            numbers.push(currentNumber);
            let firstNumber = (numbers.length == 2) ? numbers[numbers.length - 2] : result;
            let secondNumber = numbers[numbers.length - 1]
            console.log('new_log');
            console.log(numbers);
            console.log('f' + firstNumber);
            console.log('o' + operator);
            result = operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            currentNumber = '';

        } else if (numbers.length == 0) {
            operator = button.id;
            numbers.push(currentNumber);
            currentNumber = ''
        } else if (numbers.length == 1) {
            numbers.push(currentNumber);
            result = operate(numbers[0], currentNumber, operator);
            display.textContent = result;
            currentNumber = '';
            operator = button.id;

        } else if (numbers.length > 1 && currentNumber != '') {
            numbers.push(currentNumber);
            result = operate(result, currentNumber, operator);
            display.textContent = result;
            currentNumber = '';
            operator = button.id;
        }
    })

});

clearButton.addEventListener('click', () => {
    operator = '';
    currentNumber = '';
    numbers = [];
    result = '';
    displayValue = 0;
    display.textContent = displayValue;
})

deleteButton.addEventListener('click', () => {
    if (currentNumber == 0) {

    } else if (currentNumber.length == 1) {
        currentNumber = 0;
        displayValue = 0;
        display.textContent = displayValue;


    } else {
        currentNumber = currentNumber.slice(0, -1);
        displayValue = currentNumber;
        display.textContent = displayValue;


    }
})
