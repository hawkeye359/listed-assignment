import React from 'react';
import Image from 'next/image';
import { lato, montserrat } from '@/components/NextFont';
import SearchIcon from '@/icons/search.svg';
import Profile from '@/icons/profile.jpeg';
import Bell from '@/icons/bell.svg';
function Header() {
  return (
    <header className='flex justify-between items-center h-[1.875rem]'>
      <div>
        <h1
          className={`${montserrat.className} text-[1.5rem] leading-[1.8125rem] font-bold`}
        >
          Dashboard
        </h1>
      </div>
      <div className='flex'>
        <div className='flex w-[11.25rem]'>
          <input
            className={`${lato.className} bg-white min-w-0 h-full pl-[0.9375rem] border-none outline-none rounded-l-[0.625rem] text-[0.875rem]`}
            placeholder='Search...'
          />
          <button className='bg-white pr-[0.9375em] pl-[0.6rem] h-[1.875rem] border-0 outline-0 rounded-r-[0.625rem]'>
            <Image
              src={SearchIcon}
              width={16}
              height={16}
              alt='search button'
            />
          </button>
        </div>

        <Image
          src={Bell}
          width={18}
          height={20}
          alt='notifications'
          className='ml-[1.875rem] mr-[1.8125rem]'
        />

        <div>
          <Image
            width={30}
            height={30}
            src={Profile}
            alt='profile pic'
            className='rounded-[0.9375rem]'
          ></Image>
        </div>
      </div>
    </header>
  );
}

export default Header;
