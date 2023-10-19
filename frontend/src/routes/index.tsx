import Layout from '@/components/layout';
import ErrorPage from '@/pages/error';
import FindTherapist from '@/pages/find-therapist';
import Landing from '@/pages/landing';
import MatchLayout from '@/pages/match/layout';
import Recommended from '@/pages/recommended';
import Therapist from '@/pages/therapist';
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
        path: 'therapist/:therapistId',
        element: <Therapist />,
      },
      {
        path: 'find-therapist',
        element: <FindTherapist />,
      },
      {
        path: 'recommended',
        element: <Recommended />,
      },
    ],
  },
  {
    path: 'match/:matchId',
    element: <MatchLayout />,
    // children: [
    //   {
    //     path: 'gender',
    //     element: <Gender />,
    //   },
    // ],
  },
]);

export default router;
