const display = document.getElementById('display');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divid = document.getElementById('divid');

function calculateResult(output) {
   switch (output) {
       case '+':
           return addValues(a, b);
       case '-':
           return subtractValues(a, b);
       case '*':
           return multiplyValues(a, b);
       case '/':
           return divideValues(a, b);
       default:
           alert("Error: Invalid operator");
           return null;
   }
}
   

function addValues(a, b) {
    return a + b;
}

function subtractValues(a, b) {
    return a - b;
}

function multiplyValues(a, b) {
    return a * b;
}

function divideValues(a, b) {
    if (b === 0) {
        alert("Error: Division by zero");
        return null;
    }
    return a / b;
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

         

