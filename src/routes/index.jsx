import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Lessons from '../pages/Lessons';
import Tests from '../pages/Tests';
import Scores from '../pages/Scores';
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
          element: <Dashboard />,
        },
        {
          path: '/profile',
          element: <div>User Profile</div>,
        },
        {
          path: '/logout',
          element: <Logout />,
        },
        {
          path: '/lessons',
          element: <Lessons />,
        },
        {
          path: '/tests',
          element: <Tests />,
        },
        {
          path: '/scores',
          element: <Scores />,
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
