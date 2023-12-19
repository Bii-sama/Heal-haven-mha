import { axiosInstance } from '@/utils/urls';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function VerifiedEmail() {
  const params = useParams();
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      const { data } = await axiosInstance.get(
        `/api/users/${params.userID}/verify`
      );
      console.log(data);
      if (data) {
        setEmailVerified(true);
      }
    };
    verifyEmail();
  }, [params.userID]);

  return (
    <section className="h-screen">
      <div className="healHavenContainer flex h-full flex-col items-center justify-center gap-3">
        {emailVerified ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <p>Email Successfully verified</p>
            <Link
              to="/auth/login"
              className="flex items-center justify-center rounded-md bg-purple-500 px-6 py-2 text-white"
            >
              Go to Login Page
            </Link>
          </div>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </section>
  );
}

export default VerifiedEmail;
