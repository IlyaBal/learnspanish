import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Root from './routes/root';
import ErrorPage from './components/errorPage/errorPage.jsx';
import UserRegistrationForm from './components/common/UserRegistrationForm.jsx';
import SignInSide from './components/common/SignInSideBar.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SignInSide />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/register',
      element: <UserRegistrationForm />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <SignInSide />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/main',
      element: <Root />,
    },
  ],
  { basename: '/learnspanish' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
