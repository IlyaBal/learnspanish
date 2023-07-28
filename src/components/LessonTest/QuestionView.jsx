/* eslint-disable react/prop-types */
import { useState } from 'react';
import AnswerInput from './AnswerInput';

export default function QuestionView({ data, onChange }) {
  const [selected, setSelected] = useState(null);
  const onAnswerSelected = (answer) => {
    setSelected(answer);
    onChange(answer);
  };
  return (
    <div className="question-view">
      <h2>{data.question}</h2>
      {data.answers.map((a) => (
        <AnswerInput
          key={a.text}
          text={a.text}
          isSelected={a.text === selected}
          onChange={onAnswerSelected}
        />
      ))}
    </div>
  );
}
