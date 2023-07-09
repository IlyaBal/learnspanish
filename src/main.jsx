import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './components/home/Home.jsx';
import Form from './components/common/Form.jsx';
import Root from './routes/root';
import ErrorPage from './components/errorPage/errorPage.jsx';
import SignIn from './components/common/SignIn.jsx';
import UserRegistrationForm from './components/common/UserRegistrationForm.jsx';
import SignInSide from './components/common/SignInSideBar.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/learnspanish/register',
      element: <UserRegistrationForm />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/learnspanish',
      element: <SignInSide />,
    },
    {
      path: '/main',
      element: <App />,
    },
  ],
  {
    basename: '/learnspanish',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
