import { useState } from 'react';
import data from '../data/lessons.json';
import LessonLink from '../components/LessonLink/LessonLink';

export default function LessonList() {
  const [jsonData, setJsonData] = useState(data);

  console.log(JSON.stringify(data));

  return (
    <>
      <h2>Lessons</h2>
      {jsonData.data.map((d) => (
        <LessonLink key={d.pageNumber} {...d} />
      ))}
    </>
  );
}
