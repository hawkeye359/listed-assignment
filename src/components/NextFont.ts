import { Montserrat, Lato, Open_Sans } from 'next/font/google';
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});
const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  preload: true,
});
const Open = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  preload: true,
});
export { montserrat, lato, Open };
