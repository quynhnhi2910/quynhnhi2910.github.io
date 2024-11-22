function calculate(operator) {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    if (isNaN(a) || isNaN(b)) {
        errorDiv.textContent = 'Please enter valid numbers!';
        return;
    }
    if (operator === '/' && b === 0) {
        errorDiv.textContent = 'Cannot divide by zero!';
        return;
    }
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            errorDiv.textContent = 'Invalid operation!';
            return;
    }

    resultDiv.textContent = 'ketqua: ${result}';
}