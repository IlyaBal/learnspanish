import { Link, Outlet, useParams } from 'react-router-dom';
import './Lesson.css';

//import Lesson3 from '../components/Text/Lesson3'
export default function Lesson() {
  let { Id } = useParams();

  return (
    <div className="word-card">
      <h2>Lesson {Id}</h2>
      <Link className="sub-link" to="">
        Info
      </Link>
      <Link className="sub-link" style={{ marginLeft: '1rem' }} to="card">
        Cards
      </Link>
      <Link className="sub-link" style={{ marginLeft: '1rem' }} to="test">
        Test
      </Link>
      <hr></hr>
      <Outlet />
    </div>
  );
}
