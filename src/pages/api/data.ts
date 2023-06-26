// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  revenue: string;
  transactions: string;
  likes: string;
  users: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    revenue: '$2,129,430',
    transactions: '1,520',
    likes: '9,721',
    users: '892',
  });
}
