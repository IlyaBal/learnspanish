/* eslint-disable react/no-unescaped-entities */

import LessonCards from '../../components/LessonCards/LessonCards';
import TestView from '../../components/LessonTest/TestView';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '../../components/CustomPanel';

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

export default function Lesson2() {
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
            <h1>Las frutas</h1>
            <p>
              вам обязательно нужно запомнить эти слова: "manzana"-яблоко;
              "platano"-банан; "uwa"-виноград; "pera"-груша;
              "albaricoqe"-абрикос; "tomato"-помидор; "patato"-картошка;
              "melocoton"-персик.
            </p>
            <h2>в контексте</h2>
            <p>tu comes patato yo como una sandia</p>
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
