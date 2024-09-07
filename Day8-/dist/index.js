"use strict";
const buttons = document.querySelectorAll('.buttons button');
const expression = document.getElementById("expersion");
function evaluateExpression() {
    if (expression) {
        try {
            let answer = eval(expression.value);
            if (answer === Infinity || answer === -Infinity) {
                expression.value = 'Division By Zero';
            }
            else {
                expression.value = isNaN(answer) ? 'Invalid Expression' : answer.toString();
            }
        }
        catch (error) {
            expression.value = "Enter the Valid Expression";
        }
    }
}
expression.value = '';
if (expression) {
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.textContent === 'C') {
                expression.value = '';
            }
            else if (button.textContent === '=') {
                evaluateExpression();
            }
            else {
                expression.value += button.textContent;
            }
        });
    });
}
//# sourceMappingURL=index.js.map