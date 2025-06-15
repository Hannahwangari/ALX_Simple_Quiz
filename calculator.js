// Define arithemetic functions
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
}
// Event listener for addition
document.getElementById("addButton").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = add(number1, number2);
    document.getElementById("result").innerText = `Result: ${result}`;
});
// Event listener for subtraction
document.getElementById("subtractButton").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(number1, number2);
    document.getElementById("result").innerText = `Result: ${result}`;
});
// Event listener for multiplication 
document.getElementById("multiplyButton").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(number1, number2);
    document.getElementById("result").innerText = `Result: ${result}`;
});  
// Event listener for division  
document.getElementById("divideButton").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    try {
        const result = divide(number1, number2);
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = error.message;
    }
});    
