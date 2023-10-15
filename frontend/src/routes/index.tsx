import Landing from '@/pages/landing';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout';
import ErrorPage from '@/pages/error';
import Therapist from '@/pages/therapist';
import Therapists from '@/pages/therapists';
import FindTherapist from '@/pages/find-therapist';

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
    ],
  },
]);

export default router;
