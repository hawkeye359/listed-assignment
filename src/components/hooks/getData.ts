import { useEffect, useState } from 'react';
export default function useData() {
  const [data, setData] = useState({
    revenue: '0',
    transactions: '0',
    likes: '0',
    users: '0',
  });
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const { revenue, transactions, likes, users } = await res.json();
      setData({ revenue, transactions, likes, users });
    }
    fetchData();
  }, []);

  return data;
}
