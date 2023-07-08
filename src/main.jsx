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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <UserRegistrationForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <SignIn test={1} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
