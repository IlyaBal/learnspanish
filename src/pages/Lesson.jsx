import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Lesson.css';
import Image from '../components/Image';
import { getImageFolderUrl } from '../utils/metaHelper';

export default function Lesson() {
  const [lessonData, setLessonData] = useState(null);
  const [index, setIndex] = useState(0);
  let { Id } = useParams();
  const fileName = `${lessonData?.data[index][2]}`;

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

  return (
    <div className="word-card">
      <h2>
        Lesson {Id} {lessonData?.title}
      </h2>
      <hr></hr>
      <div className="word-card-body">
        <h1>{lessonData?.data[index][0]}</h1>
        <h1>{lessonData?.data[index][1]}</h1>

        <Image
          src={`${imageFolderUrl}${lessonData?.data[index][2]}`}
          alt={lessonData?.data[index][0]}
          width={300}
        ></Image>
      </div>
    </div>
  );
}
