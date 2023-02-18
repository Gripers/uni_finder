import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import { store } from '@/store/store';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-modern-drawer/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
