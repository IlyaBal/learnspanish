/* eslint-disable react/no-unescaped-entities */

import LessonView from '../../components/LessonView/LessonView';

const dictionary = [
  ['La manzana', 'Яблоко', 'apple.png'],
  ['El plátano', 'Банан', 'banana.png'],
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
];

export default function Lesson4() {
  return (
    <>
      <LessonView quiz={quiz} dictionary={dictionary}>
        <div>
          <p style={{ color: 'orange' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur magnam mollitia debitis cumque, et quisquam magni
            reiciendis quam aut eligendi officiis facere, corrupti explicabo
            laboriosam odit, tempore iste laborum. Culpa.
          </p>
        </div>
      </LessonView>
    </>
  );
}
