
function addToScreen(value) {
    let display = document.getElementById('display');
    let operators = ['+', '-', 'x', '/'];

    if (value === 'AC') {
        return display.value = '';
    } else if (value === '=') {
        return calculateResult();
    } else if (operators.includes(value)) {
        let currentValue = display.value;

        if (operators.includes(currentValue[currentValue.length - 1])) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    } else {
        display.value += value;
    }
}