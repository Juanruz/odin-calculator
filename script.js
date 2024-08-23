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

let num1;
let num2;
let oper;
let result;

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

console.log(operate(2,'+',3));

let displayValue = 0;
let display = document.getElementById('display');
display.textContent = displayValue;

function showDisplay0(num){
    display.textContent = num;
    displayValue = display.textContent;
}

function showDisplay(num){
    display.textContent += num;
    displayValue = display.textContent;
}

function clearDisplay(){
    num1 = 0;
    num2 = 0;
    oper = '+';
    result = 0;
    display.textContent = 0;
    displayValue = display.textContent;
}

function writeNumber(num){
    if (displayValue != 0){
        showDisplay(num);      
    } else {
        showDisplay0(num);
    }
}

let numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        writeNumber(number.textContent);
    })
});

let operators = document.querySelectorAll('.operators')
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (num1 === 0 && num2 === 0){ // Primeira operacao
            display.textContent = displayValue;
            num1 = displayValue;
            oper = operator.textContent;
            displayValue = 0;
            alert ('apos primeiro numero')
        } else if (num1 != 0 && num2 === 0){ // Segunda operacao sem igualdade antes
            display.textContent = displayValue;
            num2 = displayValue;
            result = operate(num1, oper, num2);
            showDisplay0(result);
            num1 = result;
            oper = operator.textContent;
            displayValue = 0;
            alert('apos segundo numero')
        } else if (num1 != 0 && num2 != 0 && num1 != result){ // N's operacoes sem igualdade antes
            display.textContent = displayValue;
            num2 = displayValue;
            result = operate(num1, oper, num2);
            showDisplay0(result);
            num1 = result;
            oper = operator.textContent;
            displayValue = 0;
            alert('sem igualdade antes')
        } else if (num1 != 0 && num2 != 0 && num1 === result){ // N's operacoes apos igualdade
            oper = operator.textContent;
            displayValue = 0;
            alert('dps de igualdade')
        }
    });
});

let equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    display.textContent = displayValue;
    num2 = displayValue;
    result = operate(num1, oper, num2)
    showDisplay0(result);
    num1 = result;
    displayValue = 0;
    alert('igual')
});

let clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);
// 1. Clica em um numero, numero vira num1, num1 aparece na tela
// 2. Clica em operador, operador vira oper
// 3. Clica em segundo num, num vira num2, num2 aparece na tela
// 4. Clica em =, realiza operacao, resultado vai pra tela
// 5. Clica em outro numero, numero vira num1, num1 vai p tela

// 5b. Clica em outro operador, resultado vai p tela, operador vira oper, 
// volta p passo 3
