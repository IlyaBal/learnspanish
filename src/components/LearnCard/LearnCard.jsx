import React from 'react';
import Image from '../Image';

// eslint-disable-next-line react/prop-types
export default function LearnCard({ word, translation, image }) {
  return (
    <div className="word-card-body">
      <h1>{word}</h1>
      <h1>{translation}</h1>

      <Image src={image} alt={word} width={300}></Image>
    </div>
  );
}
