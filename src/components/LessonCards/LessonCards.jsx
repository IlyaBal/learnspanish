import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
// import './Lesson.css';
import { getImageFolderUrl } from '../../utils/metaHelper';
import PracticeCard from '../PracticeCard/PracticeCard';

export default function LessonCards() {
  const [lessonData, setLessonData] = useState(null);
  const [index, setIndex] = useState(0);
  let { Id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(`/data/lesson${Id}.json`);
      setLessonData(response.data);
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

  const imageFolderUrl = getImageFolderUrl();
  console.log(
    '🚀 ~ file: Lesson.jsx:41 ~ Lesson ~ imageFolderUrl:',
    imageFolderUrl
  );

  const word = lessonData?.data[index][0] ?? '';
  const translation = lessonData?.data[index][1] ?? '';
  const imageUrl = `${imageFolderUrl}${lessonData?.data[index][2]}`;

  return (
    <PracticeCard word={word} translation={translation} image={imageUrl} />
  );
}
