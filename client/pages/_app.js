import "@/styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Context from "../context/context";
import Tostify from "@/components/notify/Tostify";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta name="description" content="Traveling web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Traveling</title>
      </Head>
      <div className={`bg-gray-50 overflow-x-hidden`}>
        <QueryClientProvider client={queryClient}>
          <Context>
            <Component {...pageProps} />
            <Tostify />
          </Context>
        </QueryClientProvider>
      </div>
    </>
  );
}
