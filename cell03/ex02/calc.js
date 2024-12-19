function calculate() {
    const leftOperand = parseInt(document.getElementById('leftOperand').value);
    const rightOperand = parseInt(document.getElementById('rightOperand').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert('Error :(');
        return;
    }

    if ((operator === '/' || operator === '%') && rightOperand === 0) {
        alert("It’s over 9000!");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            result = leftOperand / rightOperand;
            break;
        case '%':
            result = leftOperand % rightOperand;
            break;
    }

    alert('Result: ' + result);
    console.log('Result: ' + result);
}

document.getElementById('calculateBtn').addEventListener('click', calculate);

setInterval(() => {
    alert('Please, use me...');
}, 30000);
