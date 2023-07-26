import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Lesson.css';
import Image from '../components/Image';
import { getImageFolderUrl } from '../utils/metaHelper';
import LearnCard from '../components/LearnCard/LearnCard';
import PracticeCard from '../components/PracticeCard/PracticeCard';
import Lesson1 from '../components/Text/Lesson1';
import Lesson2 from '../components/Text/Lesson2'
import Lesson3 from '../components/Text/Lesson3';

//import Lesson3 from '../components/Text/Lesson3'
export default function Lesson() {
  const [lessonData, setLessonData] = useState(null);
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState('practice');
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

  const getCard = () => {
    const word = lessonData?.data[index][0] ?? '';
    const translation = lessonData?.data[index][1] ?? '';
    const imageUrl = `${imageFolderUrl}${lessonData?.data[index][2]}`;
    if (mode === 'practice') {
      return (
        <PracticeCard word={word} translation={translation} image={imageUrl} />
      );
    }
    return <LearnCard word={word} translation={translation} image={imageUrl} />;
  };

  function getLessonText() {

    switch (Id) {
      case "1":
        return <Lesson1 />

      case "2":
        return <Lesson2 />

      case "3":
        return <Lesson3 />
      default:
        return null;
    }
    return null;

  }
  return (
    <div className="word-card">
      <h2>
        Lesson {Id} {lessonData?.title}
      </h2>
      <hr></hr>
      <div>{getCard()}</div>
      <div className='lesson-content'>
        {getLessonText()}
      </div>
    </div>
  );

}
