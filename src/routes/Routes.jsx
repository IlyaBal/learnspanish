import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { useAuth } from '../provider/useAuth';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/User/Login';
import Logout from '../pages/User/Logout';
import SignUp from '../pages/User/SignUp';
import Scores from '../pages/Scores';
import LessonSectionLinks from '../pages/Lessons/SectionLinks';

import Lesson1 from '../pages/Lessons/Lesson1';
import Lesson2 from '../pages/Lessons/Lesson2';
import Layout from '../layout/Layout';
import Lesson3 from '../pages/Lessons/Lesson3.';
const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: '/service',
      element: <div>Service Page</div>,
    },
    {
      path: '/about-us',
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Navigate to="/lessons" replace />,
            },
            {
              path: '/lesson1',
              element: <Lesson1 />,
            },
            {
              path: '/lesson2',
              element: <Lesson2 />,
            },
            {
              path: '/lesson3',
              element: <Lesson3 />,
            },
            {
              path: '/lessons',
              element: <LessonSectionLinks />,
            },

            {
              path: '/scores',
              element: <Scores />,
            },
          ],
        },
        {
          path: '/profile',
          element: <div>User Profile</div>,
        },
        {
          path: '/logout',
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <SignUp />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter(
    [
      ...routesForPublic,
      ...(!token ? routesForNotAuthenticatedOnly : []),
      ...routesForAuthenticatedOnly,
    ],
    { basename: '/learnspanish' }
  );

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
