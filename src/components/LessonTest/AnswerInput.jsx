/* eslint-disable react/prop-types */
import { useState } from 'react';

const AnswerInput = ({ text, onChange, isSelected }) => {
  const onValueChange = function (e) {
    onChange(e.target.value);
  };
  return (
    <>
      <div className="radio">
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            value={text}
            checked={isSelected === true}
            onChange={onValueChange}
          />
          {text}
        </label>
      </div>
    </>
  );
};

export default AnswerInput;
