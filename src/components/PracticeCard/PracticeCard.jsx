import React, { useState } from 'react';
import Image from '../common/Image';

// eslint-disable-next-line react/prop-types
export default function PracticeCard({ word, translation, image }) {
  const [showDetails, setShowDetails] = useState(true);
  const onCardClick = () => {
    setShowDetails(!showDetails);
  };

  const details = showDetails ? (
    <>
      <h1>{translation}</h1>
      <Image src={image} alt={word}></Image>
    </>
  ) : null;
  return (
    <div className="word-card-body" onClick={onCardClick}>
      <h1 className="word-text">{word}</h1>
      {details}
    </div>
  );
}
