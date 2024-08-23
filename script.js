function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let oper;
let result;
let overwrite = true;
// let displayValue = 0;

function operate(num1, oper, num2){
    switch (oper){
        case '+':
           return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
    }
}

let display = document.getElementById('display');
display.textContent = 0;

function displayNumber(num){
    if (overwrite === false){
        display.textContent += num;
    } else {
        display.textContent = num;
        overwrite = false;
    }
}

function clearCalculator(){
    num1 = 0;
    num2 = 0;
    oper = '+';
    result = 0;
    display.textContent = 0;
    overwrite = true;
}

function equality(){
    num2 = display.textContent;
    result = operate(num1, oper, num2)
    display.textContent = result;
    num1 = result;
    alert('Igualando/calculando')
    oper = '=';
}

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayNumber(number.textContent);
    })
});

let operators = document.querySelectorAll('.operators')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num1 === 0 && num2 === 0){ // Primeira operacao
            num1 = display.textContent;
            oper = operator.textContent;
            overwrite = true;
            alert ('Após primeiro número')
        } else if (num1 != 0 && num2 === 0){ // Segunda operacao/sem igualdade antes
            equality();
            oper = operator.textContent;
            overwrite = true;
            alert('Após segundo número')
        } else if (num1 != 0 && num2 != 0 && oper != '='){ // Após igualdade
            equality();
            oper = operator.textContent;
            overwrite = true;
            alert('Depois operação e igualdade')
        } else if (oper === '='){ // Após igualdade
            oper = operator.textContent;
            overwrite = true;
            alert('Após somente igualdade')
        }
    });
});

let invert = document.getElementById('invert')

let percentage = document.getElementById('invert')

let equal = document.getElementById('equal');
equal.addEventListener('click', equality);

let clear = document.getElementById('clear');
clear.addEventListener('click', clearCalculator);
