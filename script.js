function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let oper = '+';

function operate(num1, oper, num2){
    switch (oper){
        case '+':
           return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

console.log(operate(2,'+',3));

let displayValue = 0;

function showDisplay(num){
    displayValue = num;
}
// 1. Clica em um numero, numero vira num1, num1 aparece na tela
// 2. Clica em operador, operador vira oper
// 3. Clica em segundo num, num vira num2, num2 aparece na tela
// 4. Clica em =, realiza operacao, resultado vai pra tela
// 5. Clica em outro numero, numero vira num1, num1 vai p tela

// 5b. Clica em outro operador, resultado vai p tela, operador vira oper, 
// volta p passo 3
