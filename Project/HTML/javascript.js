document.getElementById('submit-btn').addEventListener('click', function () {
    // Correct answers
    const correctAnswers = {
      q1: 'a', q2: 'c', q3: 'c', q4: 'b', q5: 'c',
      q6: 'b', q7: 'a', q8: 'b', q9: 'b', q10: 'b',
      q11: 'c', q12: 'a', q13: 'b', q14: 'c', q15: 'a',
      q16: 'a', q17: 'b', q18: 'a', q19: 'b', q20: 'b',
      q21: 'c', q22: 'd', q23: 'c', q24: 'a', q25: 'b',
      q26: 'b', q27: 'c', q28: 'd', q29: 'b', q30: 'c',
      q31: 'c', q32: 'b', q33: 'b', q34: 'd', q35: 'a',
      q36: 'd', q37: 'b', q38: 'c', q39: 'b', q40: 'b',
      q41: 'c', q42: 'a', q43: 'c', q44: 'c', q45: 'c',
      q46: 'a', q47: 'd', q48: 'b', q49: 'c', q50: 'b'
    };
  
    // Get user answers
    const userAnswers = {};
    for (const question in correctAnswers) {
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      userAnswers[question] = selectedOption ? selectedOption.value : undefined; // Handle unanswered questions
    }
  
    // Calculate score
    let score = 0;
    for (const question in correctAnswers) {
      if (userAnswers[question] === correctAnswers[question]) {
        score++;
      }
    }
  
    // Display result
    const resultDiv = document.getElementById('result');
    const totalQuestions = Object.keys(correctAnswers).length;
  
    if (score === totalQuestions) {
      resultDiv.textContent = `Congratulations! You scored ${score}/${totalQuestions}.`;
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = `You scored ${score}/${totalQuestions}. Try again!`;
      resultDiv.style.color = 'red';
    }
  });