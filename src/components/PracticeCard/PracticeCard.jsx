import React, { useState } from 'react';
import Image from '../Image';
import LearnCard from '../LearnCard/LearnCard';

// eslint-disable-next-line react/prop-types
export default function PracticeCard({ word, translation, image }) {
  const [showDetails, setShowDetails] = useState(false);
  const onCardClick = () => {
    setShowDetails(!showDetails);
  };

  const details = showDetails ? (
    <>
      <h1>{translation}</h1>

      <Image src={image} alt={word} width={300}></Image>
    </>
  ) : null;
  return (
    <div className="word-card-body" onClick={onCardClick}>
      <h1 className="word-text">{word}</h1>
      {details}
    </div>
  );
}
