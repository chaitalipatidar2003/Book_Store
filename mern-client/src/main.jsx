import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './components/SignUp';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routers/Router';
import AuthProvider from './contexts/AuthProvider'; // Import your AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>,
);
