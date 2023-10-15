import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as { statusText?: string })?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
      <button
        className="mt-1 bg-healHavenBrand600 px-6 py-1 text-lg font-bold text-white hover:bg-violet-950"
        type="button"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
