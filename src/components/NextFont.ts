import { Montserrat, Lato } from 'next/font/google';
const roboto = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Montserrat',
  preload: true,
});
const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  preload: true,
});

export { roboto, lato };
