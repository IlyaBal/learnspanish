/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
// import './Lesson.css';
import { getImageFolderUrl } from '../../utils/metaHelper';
import PracticeCard from '../PracticeCard/PracticeCard';

export default function LessonCards({ data }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const refreshCard = () => {
      setIndex((prevState) => {
        const count = data?.length ? data?.length - 1 : 0;
        return prevState === count ? 0 : prevState + 1;
      });
    };
    if (!data) return;
    const timerId = setInterval(refreshCard, 3000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [data]);

  const imageFolderUrl = getImageFolderUrl();
  console.log(
    '🚀 ~ file: Lesson.jsx:41 ~ Lesson ~ imageFolderUrl:',
    imageFolderUrl
  );

  const word = data[index][0] ?? '';
  const translation = data[index][1] ?? '';
  const imageUrl = `${imageFolderUrl}${data[index][2]}`;

  return (
    <PracticeCard word={word} translation={translation} image={imageUrl} />
  );
}
