import '../styles/global.scss';
import Header from '../components/Header';
import { Player } from '../components/Player';
import Head from 'next/head'

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from '../contexts/PlayerContext';

<Head>
< meta  name = 'viewport'  content = 'minimum-scale = 1, initial-scale = 1, width = device-width, shrink-to-fit = no, user-scalable = no, viewport-fit = cover'  />

</Head>

  function MyApp({ Component, pageProps }) {
    return (
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    )
  }
  
  export default MyApp
  