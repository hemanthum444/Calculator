let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (!display.value.endsWith(' ') && display.value.length > 0) {
        display.value += ' ' + operator + ' ';
    }
}

function appendDecimal() {
    const currentExpression = display.value.split(' ');
    const lastNumber = currentExpression[currentExpression.length - 1];

    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(' ', ''));
    } catch (error) {
        display.value = 'Error';
    }
}
