// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './index.css';
// import Root from './components/layout/root';
// import ErrorPage from './components/errorPage/errorPage.jsx';
// import UserRegistrationForm from './components/common/UserRegistrationForm.jsx';
// import SignInSide from './components/common/SignInSideBar.jsx';
// import SignIn from './components/common/SignIn';
// import ProtectedRoute from './routes/ProtectedRoute';

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: (
//         <ProtectedRoute>
//           <Root />
//         </ProtectedRoute>
//       ),
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: '/forgot-password',
//       element: (
//         <ProtectedRoute>
//           <SignIn />
//         </ProtectedRoute>
//       ),
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: '/register',
//       element: <UserRegistrationForm />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: '/login',
//       element: <SignInSide />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: '/main',
//       element: <Root />,
//     },
//   ],
//   { basename: '/learnspanish' }
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
