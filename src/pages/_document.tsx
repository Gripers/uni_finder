import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Uni Finder</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src='https://code.jquery.com/jquery-3.6.3.min.js'
          strategy='beforeInteractive'
        ></Script>
      </body>
    </Html>
  );
}
