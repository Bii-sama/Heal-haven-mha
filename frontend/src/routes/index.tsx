import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/error';
import Layout from '../components/layout';
import Therapists from '../pages/therapists';
import Therapist from '../pages/therapist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'therapists',
        element: <Therapists />,
      },
      {
        path: 'therapist/:therapistId',
        element: <Therapist />,
      },
    ],
  },
]);

export default router;
