const display = document.querySelector('#display');
let num1 = '';
let num2 = '';
let opp;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let stat = 1;
let dec1 = 0;
let dec2 = 0;

digits.forEach((digit) => digit.addEventListener('click', takeInputNum));
operators.forEach((operator) => operator.addEventListener('click', takeInputOperator));

function takeInputNum(numPointer) {
    num = numPointer.target.value;
    if (num != '.' || (stat == 1 && dec1 == 0) ||(stat == 2 && dec2 == 0)) {
    display.textContent += num;
    if (num == '.') {
        switch(stat) {
            case 1:
                dec1 = 1;
                break;
            case 2:
                dec2 = 1;
                break;
        }
    };
    }
    if (stat == 1) num1 += num;
    else num2 += num;
}

function takeInputOperator(bPointer) {
    b = bPointer.target.textContent;
    if (b=='C') {
        num1 = '';
        num2 = '';
        stat = 1;
        dec1 = 0;
        dec2 = 0;
        let opp;
        display.textContent = '';
    }
    else if (num1) {
        if (b=='=' && num2) {
            display.textContent = operate(opp, Number(num1), Number(num2));
            num1 = display.textContent;
            num2='';
            stat = 2;
        }
        else if (stat==2 && num2) {
            display.textContent = '';
            num1 = operate(opp, Number(num1), Number(num2));
            num2='';
            stat = 2;
        }
        else if (b!='=') {
            display.textContent = '';
            opp = b;
            stat = 2;
        }
    }
}
function operate(operator, a, b) {
    let result;
    switch(operator) {
        case '+':
            result =  a + b;
            break;
        case '-':
            result =  a - b;
            break;
        case '*':
        case 'x':
        case 'X':
            result =  a * b;
            break;
        case '/':
            result =  (b==0)?'No':a/b;
            break;
        default:
            result =  a;
            
    }
    if (String(result).includes('.')) {
        return (Math.round(result*100)/100)
    }
    return result;
}

