import { Link } from 'react-router-dom';

function Email() {
  return (
    <section className="h-full">
      <div className="healHavenContainer flex h-full flex-col items-center justify-center gap-3">
        <p>
          A Link has been sent to your mail, click on the link to verify your
          account
        </p>
        <Link
          to="/home"
          className="flex w-full  
            max-w-[190px] items-center justify-center rounded-lg bg-healHavenBrand600 px-5
        py-3 text-white hover:bg-healHavenBrand800"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

export default Email;
