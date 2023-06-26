import React, { useState } from 'react';
import { montserrat } from '@/components/NextFont';
import DashboardIcon from '@/icons/dashboard_icon.svg';
import TransactionIcon from '@/icons/transaction_icon.svg';
import ScheduleIcon from '@/icons/schedule_icon.svg';
import UsersIcon from '@/icons/user_icon.svg';
import SettingsIcon from '@/icons/setting_icon.svg';
import Image from 'next/image';
import Link from 'next/link';
type listItems = { id: number; name: string; icon: string }[];
const listItems: listItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    id: 2,
    name: 'Transactions',
    icon: TransactionIcon,
  },
  {
    id: 3,
    name: 'Schedules',
    icon: ScheduleIcon,
  },
  {
    id: 4,
    name: 'Users',
    icon: UsersIcon,
  },
  {
    id: 5,
    name: 'Settings',
    icon: SettingsIcon,
  },
];
const ListElement = ({
  name,
  icon,
  active,
  changeActive,
  id,
}: {
  name: string;
  icon: string;
  active: boolean;
  changeActive: React.Dispatch<React.SetStateAction<number>>;
  id: number;
}) => {
  function routeHandler(e: React.MouseEvent) {
    if (e.target) {
      if (e.target instanceof HTMLElement) {
        console.log(e);
        console.log(e.target.dataset.idOf);
        changeActive(Number(e.target.dataset.idof));
      }
    }
  }
  return (
    <li
      className='inline-block mt-[2.22rem]'
      onClick={(e) => {
        routeHandler(e);
      }}
      data-idof={id}
    >
      <div className='flex items-center'>
        <Image src={icon} alt={`${name} icon`} width={18} />
        <span
          className={`${
            montserrat.className
          } inline-block text-[1.125rem] ml-[1.25rem] leading-[1.375rem] h-[1.375rem] ${
            active ? 'font-bold' : 'font-normal'
          }`}
        >
          {name}
        </span>
      </div>
    </li>
  );
};
function LeftPanel() {
  const [active, setActive] = useState(1);

  return (
    <div className='text-white flex flex-col justify-between h-full'>
      <div>
        <h2
          className={`${montserrat.className} leading-[2.75rem] text-[2.25rem] font-bold`}
        >
          Board.
        </h2>
        <ul className='mt-[1.52rem] block'>
          {listItems.map((e) => (
            <ListElement
              name={e.name}
              active={active === e.id}
              icon={e.icon}
              key={e.name}
              changeActive={setActive}
              id={e.id}
            />
          ))}
        </ul>
      </div>
      <div
        className={`${montserrat.className} flex flex-col text-[0.875rem] leading-[1.0625rem]`}
      >
        <Link href='#'>Help</Link>
        <Link href='#' className='mt-[1.25rem]'>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default LeftPanel;
