import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Lesson() {
  const [lessonData, setLessonData] = useState(null);
  const [index, setIndex] = useState(0);
  let { Id } = useParams();
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`/data/lesson${Id}.json`);
      const json = await response.json();

      setLessonData(json);
    };
    loadData();
  }, [Id]);

  useEffect(() => {
    const refreshCard = () => {
      setIndex((prevState) => {
        const count = lessonData?.data?.length
          ? lessonData?.data?.length - 1
          : 0;
        return prevState === count ? 0 : prevState + 1;
      });
    };
    if (!lessonData) return;
    const timerId = setInterval(refreshCard, 3000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [lessonData]);

  return (
    <div>
      <h2>
        Lesson {Id} {lessonData?.title}
      </h2>
      <hr></hr>
      <h1>{lessonData?.data[index][0]}</h1>
      <h1>{lessonData?.data[index][1]}</h1>
    </div>
  );
}
