
const display = document.getElementById('display');

function addToScreen(value) {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(value)) {
        const currentValue = display.value;

        if (operators.includes(currentValue[currentValue.length - 1])) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    } else {
        display.value += value;
    }
}

function calculateResult() {
    display.value = eva; (display.value);
}

function reset() {
    display.value = '0'
}