import '@/styles/Home.module.css';
import { lato, montserrat } from '@/components/NextFont';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import GoogleIcon from '@/icons/google-icon 1.svg';
import Google from 'next-auth/providers/google';
export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);
  return (
    <div className='flex tracking-[0.01rem]'>
      <div className='h-screen w-2/5 bg-black flex justify-center items-center'>
        <h1
          className={`${montserrat.className} font-bold text-7xl leading-[1.22em] text-white`}
        >
          Board.
        </h1>
      </div>
      <div className='h-screen w-3/5 bg-[#f5f5f5] flex justify-center items-center'>
        <div className='w-[24.0625rem]'>
          <h2
            className={`${montserrat.className} text-[2.25rem] font-bold leading-[1.223em] text-black`}
          >
            Sign In
          </h2>
          <p
            className={`${lato.className} text-base font-normal tracking-[0.01em] leading-[1.1875em]  mt-[0.3125rem]`}
          >
            Sign in to your account
          </p>
          <div className='flex mt-[1.625rem] h-[1.875rem]'>
            <button
              className='bg-white rounded-[0.625rem] flex items-center px-[1.1875rem]'
              onClick={() => {
                signIn('google');
              }}
            >
              <Image
                src={GoogleIcon}
                alt='Sign in with google icon'
                className='h-full'
              />
              <span
                className={`${montserrat.className}  leading-[0.9375rem] ml-[0.625rem] text-[0.75rem]`}
              >
                Sign in with Google
              </span>
            </button>
            <div>Sign in with Apple</div>
          </div>
          <div className='bg-white p-[1.875rem] mt-[1.5625rem] w-full rounded-[1.25rem]'>
            <form className={`flex flex-col ${lato.className}`}>
              <label
                htmlFor='email'
                className={`${lato.className} leading-[1.1875em] tracking-normal`}
              >
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='username'
                placeholder='johndoe@gmail.com'
                className={`h-[2.5rem] bg-[#f5f5f5] mt-2.5 py-2.5 leading-[1.1875em] px-[0.9375rem]  rounded-[0.625rem] placeholder:text-base placeholder:font-[${lato.style.fontFamily}] focus:border-none active:border-none outline-0`}
              />
              <label
                htmlFor='password'
                className={`mt-[1.25rem] ${lato.className} leading-[1.1875em] tracking-normal`}
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                autoComplete='password'
                placeholder='••••••••••••••'
                className={`h-[2.5rem] bg-[#f5f5f5] mt-2.5 py-2.5 leading-[1.1875em] px-[0.9375rem]  rounded-[0.625rem] placeholder:text-base placeholder:font-[${lato.style.fontFamily}] focus:border-none outline-0`}
              />
              <Link
                href='#'
                className='mt-[1.3rem] leading-[1.1875em] ml-px text-[#346BD4]'
              >
                Forgot password?
              </Link>
              <button
                type='submit'
                className={`${montserrat.className} mt-[1.25rem] bg-black text-white py-[0.5625em] leading-[1.25em] rounded-[0.625rem] font-bold h-[2.5em]`}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className={`${lato.className} mt-[1.25rem] text-center`}>
            <span className='block'>
              <span className='text-[#858585] leading-[1.1875rem] inline-block'>
                Don’t have an account?
              </span>
              &nbsp;
              <span className='inline-block'>
                <Link
                  className='text-[#346BD4] leading-[1.1875rem] inline-block '
                  href='/signup'
                >
                  Register here
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
