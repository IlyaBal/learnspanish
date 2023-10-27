/* eslint-disable react/no-unescaped-entities */

import LessonCards from '../../components/LessonCards/LessonCards';
import TestView from '../../components/LessonTest/TestView';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '../../components/CustomPanel';

const dictionary = [
  ['Hola', 'Привет', 'hola.png'],
  ['Buenos dias!', 'Добрый день!'],
  ['Por favor', 'Пожалуйста'],
];

const test = [
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
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <h2>Oraciones simples</h2>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Урок" />
            <Tab label="Словарь" />
            <Tab label="Тест" />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          <div>
            <h2>Ресторан</h2>
            <p>
              когда мы заходим в ресторан и мы хотим попросить у офицанта кофе
              то мы говорим "un cafe, por favor" что в переводе "одно кофе,
              пожалуйста" "por favor"-пожалуйста а если мы хотим сказать спасибо
              то тогда мы говорим "gracias".
            </p>
            <p>
              когда мы хотим с кем-то познакомится тогда мы говорим "hola!
              buenos dias"-"привет! добрый день" "buenos dias"-"добрый день"
              "hola"-"привет".
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          <LessonCards data={dictionary} />
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={2}>
          <TestView data={test} />
        </CustomTabPanel>
      </Box>
    </>
  );
}
