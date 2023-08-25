let inputLine = '';
let outputValue = '0';

function updateDisplay() {
    document.getElementById('inputLine').textContent = inputLine;
    document.getElementById('outputLine').textContent = outputValue;
}

function appendToDisplay(value) {
    inputLine += value;
    updateDisplay();
}

function appendOperator(operator) {
    inputLine += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    inputLine = '';
    outputValue = '0';
    updateDisplay();
}

function deleteLastChar() {
    inputLine = inputLine.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(inputLine);
        outputValue = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    } catch (error) {
        outputValue = 'Error';
    }
    //inputLine = '';
    updateDisplay();
}

updateDisplay();
