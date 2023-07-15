import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Traveling web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Traveling</title>
      </Head>
      <div className={`bg-gray-50 overflow-x-hidden`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
