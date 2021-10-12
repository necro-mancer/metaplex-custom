import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Non-fungible Matrix</title>
      </Head>
      
      <div id="root">
        <span style={{color: "orange"}}>(base) root@local:~$ </span>
        <span style={{color:  "white"}}>gsissh matrix</span><br />
        <span style={{color:  "white"}}>&gt; This space is in development; please use caution. Connecting to &#10686; Solana via metaplex ...</span><br />
        <span style={{color: "lightgreen"}}>(host) guest@matrix:~$ </span>
        <span className="typewriter-end"></span>
        
        <Component {...pageProps} />
      </div>
    </>
  );
}
