import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const clientId = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';
const jwtSecret = process.env.JWT_SECRET || '';
const database_uri = process.env.DATABASE_URI || '';
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
  pages: {
    signIn: '/',
  },
  database: database_uri,
};
export default NextAuth(authOptions);
