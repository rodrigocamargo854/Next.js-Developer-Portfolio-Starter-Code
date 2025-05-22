import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className}font-mont bg-light w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
