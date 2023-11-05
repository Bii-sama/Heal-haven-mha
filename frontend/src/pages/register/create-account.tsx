/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Button from '@/components/button/button';
import Google from '@/components/icons/google';
import Spinner from '@/components/spinner';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom';
import z from 'zod';
import { axiosInstance } from '@/utils/urls';

const formSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password length must be at least 6 characters' }),
});

type FormData = z.infer<typeof formSchema>;

function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const res = await axiosInstance.post('/api/users/register', {
        data,
      });
      console.log(res.data);

      setLoading(false);
      redirect('/verify');
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-[2.375rem] font-semibold text-healHavenGray900">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  w-full flex-col  gap-5"
      >
        <div className="text-healHavenGray700">
          <label
            htmlFor="name"
            className={cn('font-medium', {
              'text-red-500': errors.name,
            })}
          >
            Name<sup>*</sup>
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Name"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-inherit"
          />
          {errors.name && (
            <small className="mt-1 text-red-500">{errors.name.message}</small>
          )}
        </div>
        <div className="text-healHavenGray700">
          <label
            htmlFor="email"
            className={cn('font-medium', {
              'text-red-500': errors.email,
            })}
          >
            Email<sup>*</sup>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-inherit"
            {...register('email')}
          />
          {errors.email && (
            <small className="mt-1 text-red-500">{errors.email.message}</small>
          )}
        </div>
        <div className="text-healHavenGray700">
          <label
            htmlFor="password"
            className={cn('font-medium', {
              'text-red-500': errors.password,
            })}
          >
            Password<sup>*</sup>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="mt-[2px] block w-full rounded-lg border border-solid border-healHavenGray300 px-[0.875rem] py-[0.625rem] text-healHavenGray700 placeholder:text-healHavenGray700"
            {...register('password')}
          />
          {errors.password && (
            <small className="mt-1 text-red-500">
              {errors.password.message}
            </small>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <Button
            text={!loading ? 'Create Account' : ''}
            bgColor="brand"
            type="submit"
            icon={loading ? <Spinner /> : null}
          />
          <Button
            text="Sign Up With Google"
            bgColor="white"
            type="button"
            icon={<Google />}
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm">Already have an account?</p>
        <Link className="text-sm text-healHavenBrand700" to="/auth/login">
          Log in
        </Link>
      </div>
    </>
  );
}

export default CreateAccount;
