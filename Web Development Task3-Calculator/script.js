// Access the digital display element directly
const display = document.getElementById('display');

// Append numbers or operators when buttons are clicked
function appendValue(input) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = input;
    } else {
        display.value += input;
    }
}

// Clear the entire screen view field
function clearDisplay() {
    display.value = '0';
}

// Remove only the very last character typed (Backspace button)
function deleteLast() {
    if (display.value.length > 1 && display.value !== 'Error') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

// Run the evaluation execution algorithm
function calculateResult() {
    try {
        let result = eval(display.value);
        
        // Handle floating point decimals gracefully
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(6));
        }

        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}