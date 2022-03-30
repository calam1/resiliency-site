import 'bootstrap/dist/css/bootstrap.css'

import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/App.css"
import "../styles/main.css"
import '../styles/typewriter.css'
import 'instantsearch.css/themes/satellite.css';


import Head from "next/head";

import TopNav from "../components/TopNav";
import { DarkProvider } from "../components/DarkToggle";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (

    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DarkProvider>
        <div className="dark:bg-black min-h-screen flex flex-col">
          <TopNav className="dark:bg-black shadow-lg" />
          <Component {...pageProps} />
        </div>
      </DarkProvider>
    </>
  );
}

export default MyApp;
