import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SunAir supply INC | Premium Heating & Cooling Solutions</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
