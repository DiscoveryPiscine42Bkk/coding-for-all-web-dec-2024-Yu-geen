$(document).ready(function() {
    function calculate() {
        const leftOperand = parseInt($('#leftOperand').val());
        const rightOperand = parseInt($('#rightOperand').val());
        const operator = $('#operator').val();

        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }

        if ((operator === '/' || operator === '%') && rightOperand === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
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

    $('#calculateA').on('click', calculate);

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});
