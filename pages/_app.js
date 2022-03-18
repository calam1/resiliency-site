import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/App.css"
import '../styles/typewriter.css'
import 'instantsearch.css/themes/satellite.css';

import TopNav from "../components/TopNav";
import { DarkProvider } from "../components/DarkToggle";


function MyApp({ Component, pageProps }) {
  return (
      <DarkProvider>
          <div className="dark:bg-black min-h-screen flex flex-col">
            <TopNav className="dark:bg-black shadow-lg" />
            <Component {...pageProps}/>
          </div>
     </DarkProvider>
  );
}

export default MyApp;
