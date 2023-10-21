import Button from '@/components/button/button';
import Google from '@/components/icons/google';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <h1 className="text-[2.375rem] font-semibold text-healHavenGray900">
        Sign In
      </h1>
      <form className="flex  w-full flex-col gap-5">
        <div className="text-healHavenGray700">
          <label htmlFor="email" className="font-medium">
            Email<sup>*</sup>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-inherit"
          />
        </div>
        <div className="text-healHavenGray700">
          <label htmlFor="password" className="font-medium">
            Password<sup>*</sup>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-healHavenGray700"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button text="Create Account" bgColor="brand" type="submit" />
          <Button
            text="Sign In With Google"
            bgColor="white"
            type="button"
            icon={<Google />}
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm">Dontapos;t have an account?</p>
        <Link className="text-sm text-healHavenBrand700" to="/auth/register">
          Create Account
        </Link>
      </div>
    </>
  );
}

export default Login;
