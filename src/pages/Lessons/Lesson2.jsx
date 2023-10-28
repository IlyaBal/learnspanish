/* eslint-disable react/no-unescaped-entities */

import LessonView from '../../components/LessonView/LessonView';

const dictionary = [
  ['La manzana', 'Яблоко', 'apple.png'],
  ['El plátano', 'Банан', 'banana.png'],
  ['La naranja', 'Апельсин', 'naranja.jpeg'],
  ['El pepino', 'Огурец', 'cucumber-1.jpg'],
  ['El melocoton', 'персик', 'Peach.png'],
  ['La uwa', 'Виноград', 'Black-Grapes-PNG-Image-File.png'],
  ['La pera', 'Груша', 'pera.jpg'],
  ['El albaricoqe', 'Абрикос', 'pngimg.com - apricot_PNG12634.png'],
];

const quiz = [
  {
    question: 'Что значит слово manzana?',
    answers: [
      {
        text: 'Конь',
      },
      {
        text: 'Огурец',
      },
      {
        text: 'Яблоко',
        correct: true,
      },
      {
        text: 'Пить',
      },
      {
        text: 'Небо',
      },
    ],
  },
  {
    question: 'Что значит слово naranja?',
    answers: [
      {
        text: 'Апельсин',
        correct: 'true',
      },
      {
        text: 'Огурец',
      },
      {
        text: 'Кабачек',
      },
      {
        text: 'Молоко',
      },
      {
        text: 'Арбуз',
      },
    ],
  },

  {
    question: 'Что значит слово uva?',
    answers: [
      {
        text: 'Слива',
      },
      {
        text: 'Капуста',
      },
      {
        text: 'Груша',
      },
      {
        text: 'Виноград',
        correct: 'true',
      },
      {
        text: 'Дыня',
      },
    ],
  },
];

export default function Lesson2() {
  return (
    <>
      <LessonView quiz={quiz} dictionary={dictionary}>
        <div>
          <h1>Las frutas</h1>
          <p>
            вам обязательно нужно запомнить эти слова: "manzana"-яблоко;
            "platano"-банан; "uwa"-виноград; "pera"-груша; "albaricoqe"-абрикос;
            "tomato"-помидор; "patato"-картошка; "melocoton"-персик.
          </p>
          <h2>в контексте</h2>
          <p>tu comes patato yo como una sandia</p>
        </div>
      </LessonView>
    </>
  );
}
