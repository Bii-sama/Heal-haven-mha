import Layout from '@/components/layout';
import ProtectedRoute from '@/components/protected-route';
import AuthLanding from '@/pages/auth-landing';
import Email from '@/pages/email/email';
import ErrorPage from '@/pages/error';
import ErrorUnauthorized from '@/pages/error-unauthorized';
import FindTherapist from '@/pages/find-therapist';
import Landing from '@/pages/landing';
import MatchLayout from '@/pages/match/layout';
import Recommended, { loader as recommendedLoader } from '@/pages/recommended';
import Register from '@/pages/register';
import Therapist, { loader as therapistLoader } from '@/pages/therapist';
import Therapists from '@/pages/therapists';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'therapists',
        element: <Therapists />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'therapist/:therapistId',
            element: <Therapist />,
            loader: therapistLoader,
            errorElement: <ErrorUnauthorized />,
          },
        ],
      },
      {
        path: 'find-therapist',
        element: <FindTherapist />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'recommended/:patientId',
            element: <Recommended />,
            errorElement: <ErrorUnauthorized />,
            loader: recommendedLoader,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'home',
            element: <AuthLanding />,
          },
        ],
      },
      {
        path: 'verify',
        element: <Email />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: 'match/:matchId',
        element: <MatchLayout />,
      },
    ],
  },
  {
    path: 'auth/:register',
    element: <Register />,
  },
]);

export default router;
