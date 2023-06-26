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

export default questions;
