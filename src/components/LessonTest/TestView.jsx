/* eslint-disable react/prop-types */
import { useState } from 'react';
import QuestionView from './QuestionView';
import { Alert, Button } from '@mui/material';

export default function TestView({ title, data }) {
  const [index, setIndex] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showError, setErrorShow] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const record = data[index];
  const onAnswerSelected = (d) => {
    const found = record.answers.find((a) => a.text === d);
    setSelectedAnswer(found);
  };

  const onNextButtonClick = () => {
    if (!selectedAnswer) return;
    setErrorShow(false);
    if (!selectedAnswer.correct) {
      setErrorShow(true);
      setErrorCount(errorCount + 1);
      return;
    }

    if (index + 1 < data.length) {
      setIndex(index + 1);
      setSelectedAnswer(null);
    } else {
      setTestCompleted(true);
    }
  };

  if (testCompleted) {
    return (
      <div>
        <h1>
          Правильных ответов {data.length - errorCount} из {data.length}{' '}
        </h1>
      </div>
    );
  }
  const alertText = showError ? (
    <Alert severity="error">Ой... вы выбрали не правильный вариант</Alert>
  ) : null;
  return (
    <div className="test-view">
      {alertText}
      <QuestionView data={record} onChange={onAnswerSelected} />
      <br></br>
      <div className="align-right">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onNextButtonClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
