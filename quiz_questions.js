const veryEasy = [
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
];

const easy = [
  {
    questions: 'Что вернет обращение к индексу 1 в массиве [dog, cat, horse]?',
    answers: [
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: true },
      { answer: 'horse', isCorrect: false },
      { answer: 'undefined', isCorrect: false },
    ],
  },
  {
    questions: 'Что вернет обращение к индексу 3 в массиве [dog, cat, horse]?',
    answers: [
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: false },
      { answer: 'horse', isCorrect: false },
      { answer: 'undefined', isCorrect: true },
    ],
  },
  {
    questions: 'Что вернет обращение к индексу -1 в массиве [dog, cat, horse]?',
    answers: [
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: false },
      { answer: 'horse', isCorrect: true },
      { answer: 'undefined', isCorrect: false },
    ],
  },
];

const medium = [
  {
    questions: 'Что будет в консоли? for (let i = 1; i < 5; i++) { if (i === 3) continue; console.log(i)}',
    answers: [
      { answer: '1 2', isCorrect: false },
      { answer: '1 2 3', isCorrect: false },
      { answer: '1 2 4', isCorrect: true },
      { answer: '1 3 4', isCorrect: false },
    ],
  },
  {
    questions: 'Каким будет результат? function sum(a,b) { return a + b; } sum(1, \'2\');',
    answers: [
      { answer: '"12"', isCorrect: true },
      { answer: 'TypeError', isCorrect: false },
      { answer: 'NaN', isCorrect: false },
      { answer: '3', isCorrect: false },
    ],
  },
  {
    questions: 'Что будет в консоли? let n = 0 console.log(n++); console.log(++n); console.log(n);',
    answers: [
      { answer: '0 2 2', isCorrect: true },
      { answer: '0 1 2', isCorrect: false },
      { answer: '1 1 2', isCorrect: false },
      { answer: '1 2 2', isCorrect: false },
    ],
  },
];

const hard = [
  {
    questions: 'Каким будет результат? const 1 () => console.log(\'1\'); const 2 = () => setTimeout(() => console.log(\'2\')); const 3 = () => console.log(\'3\'); 1(); 2(); 3();',
    answers: [
      { answer: '1 2 3', isCorrect: false },
      { answer: '1 3 2', isCorrect: true },
      { answer: '2 1 3', isCorrect: false },
      { answer: '2 3 1', isCorrect: false },
    ],
  },
];

const veryHard = [
  {
    questions: 'Что будет в консоли после клика по параграфу? &lt;div onclick="console.log(\'div\')"&gt;&lt;p onclick="console.log(\'p\')"&gt;Кликни меня!&lt;/p&gt;&lt;/div&gt;',
    answers: [
      { answer: 'p div', isCorrect: true },
      { answer: 'div p', isCorrect: false },
      { answer: 'p', isCorrect: false },
      { answer: 'div', isCorrect: false },
    ],
  },
];

const questions = [veryEasy, easy, medium, hard, veryHard];

export default questions;
