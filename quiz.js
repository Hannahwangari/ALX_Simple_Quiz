// Step 1: Define the function that will check the user's answer
function checkAnswer() {
    // This is the correct answer for the question "What is 2 + 2?"
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    // We look for which radio input is checked under name="quiz"
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Handle the case when nothing is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return; // Exit the function early
    }

    // Get the value of the selected radio option
    const userAnswer = selectedOption.value;

    // Step 4: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If correct, show positive feedback
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // If wrong, encourage the user to try again
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add a click event to the "Submit Answer" button
// This tells the browser: When the button is clicked, run the checkAnswer function
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
