const questions = [
  {
    questions: 'Выберите не примитивный вид данных.',
    answers: [
      { answer: 'Число', isCorrect: false },
      { answer: 'Строка', isCorrect: false },
      { answer: 'undefined', isCorrect: false },
      { answer: 'Массив', isCorrect: true },
    ],
  },
  {
    questions: 'Какое значение не преобразуется в false?',
    answers: [
      { answer: '\' \'', isCorrect: false },
      { answer: '\'0\'', isCorrect: true },
      { answer: '0', isCorrect: false },
      { answer: 'NaN', isCorrect: false },
    ],
  },
  {
    questions: 'Какая строка не является корректной?',
    answers: [
      { answer: '\' \'', isCorrect: false },
      { answer: '" \\"WOW\\" "', isCorrect: false },
      { answer: '"Who\'s there?"', isCorrect: false },
      { answer: '\'Not \'like\' this\'', isCorrect: true },
    ],
  },
  {
    questions: 'Что означает оператор "="',
    answers: [
      { answer: 'Присваивание', isCorrect: true },
      { answer: 'Приравнивание', isCorrect: false },
      { answer: 'Сравнение', isCorrect: false },
      { answer: 'Ровно', isCorrect: false },
    ],
  },  
  {
    questions: 'Что такое const',
    answers: [
      { answer: 'Переменная', isCorrect: false },
      { answer: 'Константа', isCorrect: true },
    ],
  },
];

const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');
const nextButtonEl = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const startButton = document.getElementById('start-quiz');
const menu = document.getElementById('menu');

let currentQuestionIndex = 0;
let score = 0;

const resetState = () => {
  nextButtonEl.style.display = 'none';
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.isCorrect === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score += 1;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  const allButtons = Array.from(answerButtonEl.children);
  allButtons.forEach((button) => {
    if (button.dataset.isCorrect === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButtonEl.style.display = 'block';
};

const showQuestion = () => {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${questionNo}. ${currentQuestion.questions}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.answer;
    button.classList.add('btn');
    answerButtonEl.appendChild(button);
    if (answer.isCorrect) {
      button.dataset.isCorrect = answer.isCorrect;
    }
    button.addEventListener('click', selectAnswer);
  });
};

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButtonEl.innerHTML = 'Next';
  menu.style.display = 'none';
  quiz.style.display = 'block';
  showQuestion();
};

const showScore = () => {
  resetState();
    if (score === 1) {
      questionEl.innerHTML = `К сожалению ты ответил на ${score} вопрос из ${questions.length}. Не расстраивайся и попробуйте ещё раз, я уверен что у тебя всё получится!`
    } else if (score === 2 || score === 3 || score === 4) {
      questionEl.innerHTML = `Ты ответил на ${score} вопроса из ${questions.length}. Не плохой результат, но я уверен, что ты можешь лучше!`
    } else if (score === 0 || score === 5) {
      questionEl.innerHTML = `Поздравляю, ты ответил на ${score} вопросов из ${questions.length}, молодец!`
    };
  nextButtonEl.innerHTML = 'Ещё раз!';
  nextButtonEl.style.display = 'block';
};

const handleNextButton = () => {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButtonEl.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startButton.addEventListener('click', startQuiz);
