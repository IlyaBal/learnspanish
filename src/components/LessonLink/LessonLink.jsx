import React from 'react';
import { Link } from 'react-router-dom';
import './LessonLink.css';
// eslint-disable-next-line react/prop-types
export default function LessonLink({ pageNumber, title, file }) {
  const link = `/lessons/${pageNumber}`;
  return (
    <>
      <Link className="lesson-link" to={link}>
        {title}
      </Link>
    </>
  );
}
