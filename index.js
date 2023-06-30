import questions from './quiz_questions.js';

const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-buttons');
const nextButtonEl = document.getElementById('next-btn');
const quiz = document.getElementById('quiz');
const startButton = document.getElementById('start-quiz');
const menu = document.getElementById('menu');
const failButton = document.getElementById('fail-btn');
const gamesButton = document.getElementById('menu-games');
const aboutUsButton = document.getElementById('about');
const aboutSection = document.getElementById('about-section');
const progressBar = document.getElementById('progress-bar');
const anotherGame = document.getElementById('start-another');

let currentQuestionIndex = 0;

const resetState = () => {
  nextButtonEl.style.display = 'none';
  failButton.style.display = 'none';
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.isCorrect === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    nextButtonEl.style.display = 'block';
    const progressPoint = document.createElement('div');
    progressPoint.classList.add('progress-bar-completion');
    progressBar.appendChild(progressPoint);
  } else {
    selectedBtn.classList.add('incorrect');
    failButton.style.display = 'block';
    while (progressBar.firstChild) {
      progressBar.removeChild(progressBar.firstChild);
    }
  }
  const allButtons = Array.from(answerButtonEl.children);
  allButtons.forEach((btn) => {
    const thisBtn = btn;
    if (thisBtn.dataset.isCorrect === 'true') {
      thisBtn.classList.add('correct');
    }
    thisBtn.disabled = true;
  });
};

const showQuestion = () => {
  resetState();
  const QuestionBank = questions[currentQuestionIndex];
  const currentQuestion = QuestionBank[Math.floor(Math.random() * QuestionBank.length)];
  const questionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${questionNo}. ${currentQuestion.questions}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.answer;
    button.classList.add('btn-3');
    answerButtonEl.appendChild(button);
    if (answer.isCorrect) {
      button.dataset.isCorrect = answer.isCorrect;
    }
    button.addEventListener('click', selectAnswer);
  });
};

const startQuiz = () => {
  currentQuestionIndex = 0;
  nextButtonEl.innerHTML = 'Дальше!';
  menu.style.display = 'none';
  quiz.style.display = 'block';
  aboutSection.style.display = 'none';
  showQuestion();
};

const showScore = () => {
  resetState();
  questionEl.innerHTML = 'Поздравляем! Вы настоящий джаваскриптер!';
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
    while (progressBar.firstChild) {
      progressBar.removeChild(progressBar.firstChild);
    }
    startQuiz();
  }
});

failButton.addEventListener('click', () => {
  startQuiz();
});

gamesButton.addEventListener('click', () => {
  quiz.style.display = 'none';
  menu.style.display = 'block';
  aboutSection.style.display = 'none';
});

aboutUsButton.addEventListener('click', () => {
  quiz.style.display = 'none';
  menu.style.display = 'none';
  aboutSection.style.display = 'block';
});

anotherGame.addEventListener('click', () => {
  const anotherGameButton = anotherGame;
  anotherGameButton.innerHTML = 'Мы не успели. Увы :<';
});

startButton.addEventListener('click', startQuiz);
