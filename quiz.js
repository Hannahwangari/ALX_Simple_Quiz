function checkAnswer() {
    const correctAnswer = "4"; // Step 1: correct answer

    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Step 2: user answer
    const feedback = document.getElementById("feedback"); // feedback element

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

const submitButton = document.getElementById("submit-answer"); // Step 3: event listener
submitButton.addEventListener("click", checkAnswer);
