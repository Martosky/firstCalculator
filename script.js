const display = document.getElementById('display');


function calculate() {
   if(display.value.includes('+')) {
        const values = display.value.split('+');
        return addValues(parseFloat(values[0]), parseFloat(values[1]));
    } else if (display.value.includes('-')) {
        const values = display.value.split('-');
        return subtractValues(parseFloat(values[0]), parseFloat(values[1]));
    } else if (display.value.includes('*')) {
        const values = display.value.split('*');
        return multiplyValues(parseFloat(values[0]), parseFloat(values[1]));
    } else if (display.value.includes('/')) {
        const values = display.value.split('/');
        return divideValues(parseFloat(values[0]), parseFloat(values[1]));
    } else {
        return parseFloat(display.value);
    }
}
function result() {
    display.value = calculate();
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

         

