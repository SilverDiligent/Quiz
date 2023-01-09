// list of all questions, choices, and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];


const form = document.getElementById('quiz-form');
const questions = form.querySelectorAll('.question');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  // Check the answers
  questions.forEach(question => {
    const answer = question.querySelector('input:checked').value;
    if (answer === 'correct') {
      score++;
    }
  });

  // Show the results
  alert(`You scored ${score} out of ${questions.length}`);
});

questions.forEach(question => {
  const input = question.querySelector('input');
  input.addEventListener('change', e => {
    const nextQuestion = question.nextElementSibling;
    if (nextQuestion) {
      nextQuestion.style.display = 'block';
    }
  });
});

