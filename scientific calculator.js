const display = document.getElementById('display');
let currentInput = '';
let result = 0;

function updateDisplay() {
    display.textContent = currentInput;
}

// Add event listeners to calculator buttons
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                result = eval(currentInput);
                currentInput = result.toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else if (value === 'C') {
            currentInput = '';
        } else if (value === '√') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        } else if (value === 'x^y') {
            currentInput += '**';
        } else if (value === 'sin') {
            currentInput = Math.sin(parseFloat(currentInput)).toString();
        } else if (value === 'cos') {
            currentInput = Math.cos(parseFloat(currentInput)).toString();
        } else if (value === 'tan') {
            currentInput = Math.tan(parseFloat(currentInput)).toString();
        } else if (value === '∛') {
            currentInput = Math.cbrt(parseFloat(currentInput)).toString();
        } else if (value === 'tan⁻¹') {  // Updated to 'tan⁻¹'
            currentInput = Math.atan(parseFloat(currentInput)).toString();
        } else if (value === 'sin⁻¹') {  // Updated to 'sin⁻¹'
            currentInput = Math.asin(parseFloat(currentInput)).toString();
        } else if (value === 'cos⁻¹') {  // Updated to 'cos⁻¹'
            currentInput = Math.acos(parseFloat(currentInput)).toString();
        } else if (value === 'ln') {
            currentInput = Math.log(parseFloat(currentInput)).toString();
        } else if (value === 'e^x') {
            currentInput = Math.exp(parseFloat(currentInput)).toString();
        } else {
            currentInput += value;
        }

        updateDisplay();
    });
});