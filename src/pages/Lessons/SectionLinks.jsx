import { Link } from 'react-router-dom';

export default function LessonSectionLinks() {
  return (
    <>
      <h2 style={{ color: 'lightblue' }}>Lessons</h2>
      <hr />

      <Link className="lesson-link" to="/lesson1">
        Lesson 1
      </Link>

      <Link className="lesson-link" to="/lesson2">
        Lesson 2
      </Link>
    </>
  );
}
