let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateResult();
}

function addOperator(operator) {
    currentExpression += operator;
    updateResult();
}

function calculateResult() {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = '';
}

function clearResult() {
    currentExpression = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentExpression;
}
