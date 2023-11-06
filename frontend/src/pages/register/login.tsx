import { useState } from 'react';
import Button from '@/components/button/button';
import Google from '@/components/icons/google';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod';
import { axiosInstance } from '@/utils/urls';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import Spinner from '@/components/spinner';
import { useAuth } from '@/hooks/useAuth';
import { AxiosError } from 'axios';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string(),
});

type LoginData = z.infer<typeof loginSchema>;

function Login() {
  const { setToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginData> = async (loginData) => {
    console.log(loginData);
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const res = await axiosInstance.post('/api/users/login', loginData);
      if (res.data.token) {
        setToken(res.data.token);
        setLoading(false);
        toast.success('Sign In successful!');
        navigate('/home');
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.error ?? 'Something went wrong');
      }

      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-[2.375rem] font-semibold text-healHavenGray900">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  w-full flex-col gap-5"
      >
        <div className="text-healHavenGray700">
          <label htmlFor="email" className="font-medium">
            Email<sup>*</sup>
          </label>
          <input
            {...register('email')}
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-inherit"
          />
          {errors.email && (
            <small className="mt-1 text-red-500">{errors.email.message}</small>
          )}
        </div>
        <div className="text-healHavenGray700">
          <label htmlFor="password" className="font-medium">
            Password<sup>*</sup>
          </label>
          <input
            {...register('password')}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-healHavenGray700"
          />
          {errors.password && (
            <small className="mt-1 text-red-500">
              {errors.password.message}
            </small>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Button
            text={!loading ? 'Sign In' : ''}
            bgColor="brand"
            icon={loading ? <Spinner /> : null}
            type="submit"
          />
          <Button
            text="Sign In With Google"
            bgColor="white"
            type="button"
            icon={<Google />}
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm">Don&apos;t have an account?</p>
        <Link className="text-sm text-healHavenBrand700" to="/auth/register">
          Create Account
        </Link>
      </div>
    </>
  );
}

export default Login;
