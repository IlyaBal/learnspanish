/* eslint-disable react/no-unescaped-entities */

import LessonView from '../../components/LessonView/LessonView';

const dictionary = [
  ['Hola', 'Привет', 'hola.png'],
  ['Buenos dias!', 'Добрый день!'],
  ['Por favor', 'Пожалуйста'],
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

export default function Lesson1() {
  return (
    <>
      <LessonView dictionary={dictionary} quiz={quiz}>
        <div>
          <h2>Ресторан</h2>
          <p>
            когда мы заходим в ресторан и мы хотим попросить у офицанта кофе то
            мы говорим "un cafe, por favor" что в переводе "одно кофе,
            пожалуйста" "por favor"-пожалуйста а если мы хотим сказать спасибо
            то тогда мы говорим "gracias".
          </p>
          <p>
            когда мы хотим с кем-то познакомится тогда мы говорим "hola! buenos
            dias"-"привет! добрый день" "buenos dias"-"добрый день"
            "hola"-"привет".
          </p>
        </div>
      </LessonView>
    </>
  );
}
