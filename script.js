const display = document.querySelector('#display');
let num1;
let num2;
let opp;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let stat = 1;
let dec = 0;

digits.forEach((digit) => digit.addEventListener('click', takeInputNum));
operators.forEach((operator) => operator.addEventListener('click', takeInputOperator));

function takeInputNum(aPointer) {
    a = aPointer.target.value;
    if (a != '0' || dec == 0) {
    display.textContent += a;
    if (a == '.') dec=1;
    }
    if (stat == 1) num1 += a;
    else num2 += a;
}

function takeInputOperator(bPointer) {
    b = bPointer.target.textContent;
    if (b=='C') {
        num1 = '';
        num2 = '';
        stat = 1;
        dec = 0;
        display.textContent = '';
    }
    else if (!isNaN(Number(num1))) {
        if (b=='=') {
            display.textContent = operate(opp, Number(num1), Number(num2));
            num1 = display.textContent;
            num2='';
            stat = 2;
        }
        else if (stat==2) {
            display.textContent = '';
            num1 = operate(opp, Number(num1), Number(num2));
            num2='';
            stat = 2;
        }
        else {
            display.textContent = '';
            opp = b;
            stat = 2;
        }
    }
}
function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
        case 'x':
        case 'X':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'ERROR';
    }
}

