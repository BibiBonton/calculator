
function addToScreen(value) {
    if (value === 'AC') {
        document.getElementById('display').value = '';
    } else if (value === '=') {
        calculateResult();
    } else {
        document.getElementById('display').value += value;
    }
}
