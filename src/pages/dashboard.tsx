import React, { useEffect } from 'react';
import '@/styles/Home.module.css';
import Header from '@/components/Dashboard/Right/Header';
import Data from '@/components/Dashboard/Right/Data';
import Chart from '@/components/Dashboard/Right/Chart';
import TopProducts from '@/components/Dashboard/Right/TopProducts';
import Schedule from '@/components/Dashboard/Right/Schedule';
import LeftPanel from '@/components/Dashboard/Left/LeftPanel';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading';
import { useRouter } from 'next/router';
function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      console.log('session', session);
      router.push('/');
    } else {
      console.log('session not found');
    }
  }, [session, router]);
  return (
    <div className='h-screen flex bg-[#F5F5F5] max-w-[1440px] m-auto'>
      <div className='h-full py-[2.5rem] pl-[2.5rem]'>
        <div className='h-full w-[17.5rem] px-[3.125rem] py-[3.75rem] bg-black rounded-[1.875rem]'>
          <LeftPanel />
        </div>
      </div>
      <div className='h-full p-[3.75rem] grow'>
        <div className='h-full w-full '>
          <div>
            <Header />
          </div>
          <div className='mt-[2.4375rem]'>
            <Data />
          </div>
          <div className='mt-[2.5rem]'>
            <Chart />
          </div>
          <div className='flex mt-[2.5rem] justify-between'>
            <div className='w-[30rem] h-[16rem] bg-slate-300 rounded-[1.25rem]'>
              <TopProducts />
            </div>
            <div className='w-[30rem] h-[16rem] bg-slate-300 rounded-[1.25rem]'>
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
