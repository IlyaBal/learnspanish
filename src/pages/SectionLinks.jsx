import { Link } from 'react-router-dom';
import { lessonRoutes } from './Lessons/lessonRoutes';
export default function LessonSectionLinks() {
  return (
    <>
      <h2 style={{ color: 'lightblue' }}>Lessons</h2>
      <hr />
      {lessonRoutes.map((r) => (
        <Link key={r.path} className="lesson-link" to={r.path}>
          {r.title}
        </Link>
      ))}
    </>
  );
}
