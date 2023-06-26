import { Html, Head, Main, NextScript } from 'next/document';
import { lato, montserrat } from '@/components/NextFont';

export default function Document() {
  return (
    <Html lang='en' className={`${lato.variable} ${montserrat.variable}`}>
      <Head />
      <title>Listed Assignment</title>
      <body className='bg-[#F5F5F5]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
