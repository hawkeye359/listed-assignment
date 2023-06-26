import React from 'react';
import revenueIcon from '@/icons/revenue.svg';
import transactionsIcon from '@/icons/transaction.svg';
import likesIcon from '@/icons/likes.svg';
import usersIcon from '@/icons/users.svg';
import Image from 'next/image';
import { lato, montserrat, Open } from '@/components/NextFont';
import useData from '@/components/hooks/getData';
type cards = { name: string; icon: string; data: string; background: string }[];

function Card({
  image,
  name,
  dataForDisplay,
  background,
}: {
  image: string;
  name: string;
  dataForDisplay: string;
  background: string;
}) {
  console.log(background);
  return (
    <div
      style={{ background }}
      className={`w-[13.8156rem] rounded-[1.25rem] py-[1.25rem] px-[1.5625rem]`}
    >
      <div className='flex justify-end'>
        <Image src={image} alt={`${name} icon`} height={24} />
      </div>
      <span
        className={`${lato.className} mt-px block text-[0.875rem] leading-[1.0625rem]`}
      >
        {name}
      </span>
      <p
        className={`${Open.className} mt-[0.3125rem] font-bold text-[1.5rem] leading-[2.0625rem]`}
      >
        {dataForDisplay}
      </p>
    </div>
  );
}
function Data() {
  const { revenue, transactions, likes, users } = useData();
  const cards: cards = [
    {
      name: 'Total Revenues',
      icon: revenueIcon,
      data: revenue,
      background: '#DDEFE0',
    },
    {
      name: 'Total Transactions',
      icon: transactionsIcon,
      data: transactions,
      background: '#F4ECDD',
    },
    {
      name: 'Total Likes',
      icon: likesIcon,
      data: likes,
      background: '#EFDADA',
    },
    {
      name: 'Total Users',
      icon: usersIcon,
      data: users,
      background: '#DEE0EF',
    },
  ];
  return (
    <div className='w-full flex justify-between font-[0.875rem] leading-[1.0625rem]'>
      {cards.map((e) => {
        return (
          <Card
            image={e.icon}
            name={e.name}
            key={e.name}
            dataForDisplay={e.data}
            background={e.background}
          />
        );
      })}
    </div>
  );
}

export default Data;
