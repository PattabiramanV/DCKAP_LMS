let quizData = [
  {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
  },
  {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
  },
  {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
  },
      {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  // Add more quiz questions as needed
];

let quizContainer = document.getElementById('quiz');
let resultContainer = document.getElementById('result');
let submitButton = document.getElementById('submit');
let backButton = document.getElementById('submit_btn');
let retryButton = document.getElementById('retry');
let showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }

function displayQuestion() {
  let questionData = quizData[currentQuestion];

  let questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.textContent = questionData.question;

  let optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  let shuffledOptions = [...questionData.options];
  // shuffleArray(shuffledOptions);

  shuffledOptions.forEach(option => {
    const label = document.createElement('label');
    label.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = option;

    const optionText = document.createTextNode(option);

    label.appendChild(radio);
    label.appendChild(optionText);
    optionsElement.appendChild(label);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
          score++;
      } else {
          incorrectAnswers.push({
              question: quizData[currentQuestion].question,
              incorrectAnswer: answer,
              correctAnswer: quizData[currentQuestion].answer,
          });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
          displayQuestion();
      } else {
          displayResult();
      }
  }
}

function goBack() {
  if (currentQuestion > 0) {
      currentQuestion--;
      displayQuestion();
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  backButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  backButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  backButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
          <p>
              <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
              <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
              <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
          </p>
      `;
  }
  
  resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
backButton.addEventListener('click', goBack);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
