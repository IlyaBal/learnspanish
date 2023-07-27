import React from 'react';
import { useParams } from 'react-router-dom';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';

function LessonText() {
  let { Id } = useParams();

  switch (Id) {
    case '1':
      return <Lesson1 />;

    case '2':
      return <Lesson2 />;

    case '3':
      return <Lesson3 />;

    case '4':
      return <Lesson4 />;

    default:
      return null;
  }
}

export default function LessonInfoSection() {
  return (
    <div className="lesson-content">
      <LessonText />
    </div>
  );
}
