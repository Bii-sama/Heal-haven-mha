import { LoaderFunctionArgs } from 'react-router-dom';
import { axiosInstance } from '@/utils/urls';
import { useLoaderData } from 'react-router-typesafe';
import Hero from './hero';
import Info from './info';
import { Therapist as ITherapist } from '../recommended';

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<{ therapist: ITherapist }> => {
  const token = localStorage.getItem('healHavenToken');

  if (token) {
    const res = await axiosInstance.get(
      `/api/therapists/${params.therapistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log('==> serverT', res.data);
    return { therapist: res.data };
  }

  throw new Error('Oh! Unauthorized request!');
};

function Therapist() {
  const { therapist } = useLoaderData<typeof loader>();

  if (!therapist) {
    return <div>No Therapist found</div>;
  }

  return (
    <div>
      <Hero
        fullName={therapist.fullName ? therapist.fullName : 'Aisha Patel'}
        title={therapist.title ? therapist.title : 'Clinical Psychologist'}
        gender={therapist.gender ? therapist.gender : 'non-binary'}
      />
      <Info therapist={therapist} />
    </div>
  );
}

export default Therapist;
