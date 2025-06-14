// Define the function that checks the answer
function checkAnswer() {
    // The correct answer to the quiz
    const correctAnswer = "4";

    // Get the radio input selected by the user
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element where we'll show the result
    const feedback = document.getElementById('feedback');

    // Check if the user selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option was selected
        feedback.textContent = "Please select an answer.";
    }
}

// Add an event listener to the button to run the checkAnswer function when clicked
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
