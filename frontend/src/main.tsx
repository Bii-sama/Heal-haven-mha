import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import router from './routes';
import { AuthProvider } from './context/auth-context';
import { MatchProvider } from './context/match-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <MatchProvider>
        <RouterProvider router={router} />
      </MatchProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
