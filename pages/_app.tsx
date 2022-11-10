import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Мир дерева ввладимир</title>
    <link key={1} rel="preconnect" href="https://fonts.googleapis.com"/>
    <link key={2} rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
    <link key={3} href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
  </Head>
  <Component {...pageProps} />
  </>;
}
