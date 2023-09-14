// JavaScript (calculator.js)

function appendToDisplay(value) {
    const display = document.getElementById('display');

    display.value += value;

}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const EmptyMsg = 'Please Enter a Valid Number';
    try {
        const result = eval(display.value);
        display.value = result === undefined ? EmptyMsg : result;
    } catch (error) {
        display.value = EmptyMsg;
    }
}

// Event listener to capture keyboard input for numbers
// Event listener to capture keyboard input for numbers and Enter key
document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Check if the pressed key is a valid number key (0-9)
    if (/^[0-9]$/.test(key)) {
        appendToDisplay(key);
    }
    // Check if the pressed key is an operator (+, -, *, /, =)
    else if (['+', '-', '*', '/', '='].includes(key)) {
        appendToDisplay(key);
    }
    // Check if the pressed key is the "C" key for clearing
    else if (key === 'C') {
        clearDisplay();
    }
    // Check if the pressed key is the "Enter" key
    else if (key === 'Enter') {
        calculateResult();
    }
});