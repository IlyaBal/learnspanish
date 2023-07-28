import React from 'react';
import test1 from '../../data/test';
import TestView from './TestView';

export default function LessonTest() {
  var t = test1;
  return (
    <div>
      <TestView title={test1.title} data={test1.data}></TestView>
    </div>
  );
}
